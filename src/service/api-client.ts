import { AxiosRequestConfig } from "axios";
import axiosInstance from "./axiosInstance";

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

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = (subPath = "", config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<T>(`${this.endpoint}/${subPath}`, config)
      .then((res) => res.data);
  };

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  post = (data?: Partial<T>, config?: AxiosRequestConfig) => {
    return axiosInstance
      .post<FetchResponse<R>>(this.endpoint, data, config)
      .then((res) => res.data);
  };

  put = (subPath = "", data?: Partial<T>, config?: AxiosRequestConfig) => {
    return axiosInstance
      .put<FetchResponse<R>>(`${this.endpoint}/${subPath}`, data, config)
      .then((res) => res.data);
  };

  delete = (subPath: string, config?: AxiosRequestConfig) => {
    return axiosInstance
      .delete<FetchResponse<R>>(`${this.endpoint}/${subPath}`, config)
      .then((res) => res.data);
  };
}
