import { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";
import { ApiResponse } from "./api.types";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      accessToken: string;
      role: string;
    } & DefaultSession["user"];
    error?: "RefreshAccessTokenError";
  }

  interface User extends DefaultUser {
    role: string;
    accessToken: string;
    refreshToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string;
    accessToken: string;
    refreshToken?: string;
    accessTokenExpires: number;
    role: string;
  }
}

// Register
export interface RegisterPayload {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface AuthUser {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  role: string;
}

export interface AuthTokenData {
  user: AuthUser;
  accessToken: string;
}

export type RegisterResponse = ApiResponse<AuthTokenData>;
export type LoginResponse = ApiResponse<AuthTokenData>;
