// utils/axiosInstance.ts
import axios from "axios";
import token_key, { CurrentClient } from "../data/token_key";

export const getAxiosInstance = (role: CurrentClient) => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
  });

  instance.interceptors.request.use((config) => {
    const token = localStorage.getItem(token_key[role]);
    if (!config.url?.includes("/auth/login") && token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return instance;
};
