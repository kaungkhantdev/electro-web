import apiClient from "@/lib/api/client";
import { AUTH_ENDPOINT } from "@/lib/api/endpoint";
import type {
  LoginResponse,
  RegisterPayload,
  RegisterResponse,
} from "@/types/auth.types";

export const authService = {
  register: (payload: RegisterPayload) =>
    apiClient
      .post<RegisterResponse>(AUTH_ENDPOINT.REGISTER, payload)
      .then((res) => res.data),

  login: (payload: { username: string; password: string }) =>
    apiClient
      .post<LoginResponse>(AUTH_ENDPOINT.LOGIN, payload)
      .then((res) => res.data),
};
