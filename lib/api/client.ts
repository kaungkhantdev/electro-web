import axios from "axios";
import { getSession, signOut } from "next-auth/react";

const API_URL = process.env.API_URL || "http://localhost:8000";

const baseConfig = {
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
};

export const serverClient = axios.create(baseConfig);

export const apiClient = axios.create({
  ...baseConfig,
  withCredentials: true,
});

apiClient.interceptors.request.use(async (config) => {
  const session = await getSession();
  if (session?.user?.accessToken) {
    config.headers.Authorization = `Bearer ${session.user.accessToken}`;
  }
  return config;
});

let isRefreshing = false;
let refreshQueue: Array<(token: string) => void> = [];

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status !== 401 || originalRequest._retry) {
      return Promise.reject(error);
    }

    if (isRefreshing) {
      return new Promise((resolve) => {
        refreshQueue.push((token) => {
          originalRequest.headers.Authorization = `Bearer ${token}`;
          resolve(apiClient(originalRequest));
        });
      });
    }

    originalRequest._retry = true;
    isRefreshing = true;

    try {
      const session = await getSession();
      const newToken = session?.user?.accessToken;

      if (!newToken || session?.error === "RefreshAccessTokenError") {
        throw new Error("Token refresh failed");
      }

      refreshQueue.forEach((cb) => cb(newToken));
      refreshQueue = [];

      originalRequest.headers.Authorization = `Bearer ${newToken}`;
      return apiClient(originalRequest);
    } catch {
      refreshQueue = [];
      signOut({ callbackUrl: "/login" });
      return Promise.reject(error);
    } finally {
      isRefreshing = false;
    }
  },
);

export default apiClient;
