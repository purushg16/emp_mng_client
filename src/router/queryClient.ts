import { QueryClient } from "@tanstack/react-query";
import token_key, { CurrentClient } from "../data/token_key";
import { ErrorResponse, SuccessResponse } from "../entities/response";
import { enqueueSnackbar } from "notistack";

const cl = window.location.pathname.split("/")[1] as CurrentClient;
const url = window.location.origin + "/login/";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError(error) {
        const err = error as ErrorResponse;
        if (err.response?.status === 401) {
          localStorage.removeItem(token_key[cl]);
          window.location.href = url;
        }
        return false;
      },
      retry(failureCount, error) {
        const err = error as ErrorResponse;
        const max = 2;
        const isNetworkError = err.code === "ERR_NETWORK";
        return isNetworkError && failureCount < max;
      },
    },
    mutations: {
      onSettled: (data, error) => {
        if (error) {
          console.log(error);
          const err = error as ErrorResponse;
          const msg = err.response?.data.error || error.message;
          enqueueSnackbar(msg, { variant: "error" });
          if (err.response?.status === 401) {
            localStorage.removeItem(token_key[cl]);
            if (window.location.href !== url) window.location.href = url;
          }
        } else if (data) {
          const res = data as SuccessResponse;
          enqueueSnackbar(res.data.message, {
            variant: "success",
          });
        }
      },
    },
  },
});

export default client;
