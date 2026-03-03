"use server";
import { serverClient } from "@/lib/api/client";
import { AUTH_ENDPOINT } from "@/lib/api/endpoint";
import type { RegisterPayload, RegisterResponse } from "@/types/auth.types";

export async function registerAction(payload: RegisterPayload) {
  const { data } = await serverClient.post<RegisterResponse>(
    AUTH_ENDPOINT.REGISTER,
    payload,
  );
  // Return only what the client needs to sign in
  return {
    username: payload.username,
    password: payload.password,
  };
}
