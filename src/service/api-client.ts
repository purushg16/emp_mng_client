import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  data: T[];
  success: boolean;
  message: string;
  next: string | null;
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export default class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = (subPath = "", config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<T>(`${this.endpoint}${subPath}`, config)
      .then((res) => res.data);
  };

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  post = (data?: Partial<T>, config?: AxiosRequestConfig) => {
    return axiosInstance
      .post<T>(this.endpoint, data, config)
      .then((res) => res.data);
  };

  put = (subPath?: string, data?: Partial<T>, config?: AxiosRequestConfig) => {
    return axiosInstance
      .put<T>(`${this.endpoint}/:${subPath}`, data, config)
      .then((res) => res.data);
  };

  delete = (subPath: string, config?: AxiosRequestConfig) => {
    return axiosInstance
      .delete<T>(`${this.endpoint}/:${subPath}`, config)
      .then((res) => res.data);
  };
}
