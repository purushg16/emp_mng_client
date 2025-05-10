import { AxiosRequestConfig } from "axios";
import { getAxiosInstance } from "./axiosInstance";
import { CurrentClient } from "../data/token_key";

export interface FetchResponse<T> {
  data: T[];
  success: boolean;
  message: string;
  next: string | null;
  prev: string | null;
  page: number;
  page_size: number;
  total: number;
}

export default class APIClient<T, R = undefined> {
  endpoint: string;
  axios: ReturnType<typeof getAxiosInstance>;

  constructor(endpoint: string, role: CurrentClient = "employee") {
    this.endpoint = endpoint;
    this.axios = getAxiosInstance(role);
  }

  get = (subPath = "", config?: AxiosRequestConfig) => {
    return this.axios
      .get<FetchResponse<T>>(`${this.endpoint}/${subPath}`, config)
      .then((res) => res.data);
  };

  getAll = (config?: AxiosRequestConfig) => {
    return this.axios
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  post = (data?: Partial<T>, config?: AxiosRequestConfig) => {
    return this.axios
      .post<FetchResponse<R>>(this.endpoint, data, config)
      .then((res) => res.data);
  };

  put = (subPath = "", data?: Partial<T>, config?: AxiosRequestConfig) => {
    return this.axios
      .put<FetchResponse<R>>(`${this.endpoint}/${subPath}`, data, config)
      .then((res) => res.data);
  };

  delete = (subPath: string, config?: AxiosRequestConfig) => {
    return this.axios
      .delete<FetchResponse<R>>(`${this.endpoint}/${subPath}`, config)
      .then((res) => res.data);
  };
}
