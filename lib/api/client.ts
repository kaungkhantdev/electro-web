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

export default apiClient;
