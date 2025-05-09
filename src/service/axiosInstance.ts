import axios from "axios";
import token_key, { CurrentClient } from "../data/token_key";

const cl = window.location.pathname.split("/")[1] as CurrentClient;

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem(token_key[cl]);

  if (!config.url?.includes("/auth/login") && token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default axiosInstance;
