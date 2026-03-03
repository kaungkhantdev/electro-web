import { NextAuthOptions, getServerSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import "@/types/auth.types";
import {
  RegisterPayload,
  RegisterResponse,
  LoginResponse,
} from "@/types/auth.types";
import { serverClient } from "@/lib/api/client";
import { isApiError } from "@/types/api.types";
import { AUTH_ENDPOINT } from "@/lib/api/endpoint";

const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const { data: response } = await serverClient.post<LoginResponse>(
            AUTH_ENDPOINT.LOGIN,
            {
              username: credentials?.username,
              password: credentials?.password,
            },
          );

          const { user, accessToken } = response.data;

          return {
            id: user.id,
            name: `${user.firstName} ${user.lastName}`,
            email: user.email,
            role: user.role,
            accessToken,
          };
        } catch (error) {
          if (isApiError(error)) {
            console.error("Login failed:", error.message);
          } else {
            console.error("Error in authorize:", error);
          }
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.accessToken = user.accessToken;
        token.accessTokenExpires = Date.now() + 15 * 60 * 1000; // 15 minutes
        token.role = user.role;
      }

      if (Date.now() < (token.accessTokenExpires as number)) {
        return token;
      }

      return await refreshAccessToken(token);
    },

    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id;
        session.user.accessToken = token.accessToken;
        session.user.role = token.role;
      }
      if (token.error) {
        session.error = token.error as "RefreshAccessTokenError";
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: { strategy: "jwt", maxAge: 15 * 60 },
};

async function refreshAccessToken(token: JWT) {
  try {
    const { data: response } = await serverClient.post<{ accessToken: string }>(
      AUTH_ENDPOINT.REFRESH,
    );

    return {
      ...token,
      accessToken: response.accessToken,
      accessTokenExpires: Date.now() + 15 * 60 * 1000,
    };
  } catch (error) {
    console.error("Error refreshing access token:", error);
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export { authOptions };

export async function auth() {
  return getServerSession(authOptions);
}

export async function register(payload: RegisterPayload) {
  try {
    const { data: response } = await serverClient.post<RegisterResponse>(
      AUTH_ENDPOINT.REGISTER,
      payload,
    );

    const { user, accessToken } = response.data;

    return {
      id: user.id,
      name: `${user.firstName} ${user.lastName}`,
      email: user.email,
      role: user.role,
      accessToken,
    };
  } catch (error) {
    if (isApiError(error)) {
      console.error("Register failed:", error.message);
    } else {
      console.error("Error in register:", error);
    }
    return null;
  }
}
