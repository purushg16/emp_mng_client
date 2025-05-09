import { AxiosError, AxiosResponse } from "axios";
import { FetchResponse } from "../service/api-client";

interface Token {
  message: string;
  token: string;
}

interface Error {
  error: string;
}

export type SuccessResponse = AxiosResponse<FetchResponse<string>>;
export type ErrorResponse = AxiosError<Error>;
export type TokenResponse = AxiosResponse<Token>;
