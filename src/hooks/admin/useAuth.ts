import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { adminLogin, adminChangePassword } from "../../service/admin-client";
import { AdminLogin } from "../../entities/auth";
import Login, { ChangePassword } from "../../entities/credentials";
import { useSnackbar } from "notistack";
import { FetchResponse } from "../../service/api-client";
import token_key from "../../data/token_key";

const useAdminLogin = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation<FetchResponse<AdminLogin>, Error, Login>({
    mutationFn: (data) => adminLogin(data),
    onSuccess: (data) => {
      localStorage.setItem(token_key.admin, data.data[0].token);
      enqueueSnackbar("Login Successfull", { variant: "success" });
      navigate("/admin");
    },
    onError: (error) => enqueueSnackbar(error.message, { variant: "error" }),
  });
};

const useAdminChangePassword = (credentials: ChangePassword) => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: () => adminChangePassword(credentials),
    onSuccess: (data) => {
      localStorage.setItem(token_key.admin, data.data[0].token);
      enqueueSnackbar("Password Changed Successfully", { variant: "success" });
      navigate("/admin");
    },
    onError: (error) => enqueueSnackbar(error.message, { variant: "error" }),
  });
};

export { useAdminLogin, useAdminChangePassword };
