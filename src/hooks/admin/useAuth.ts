import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { adminLogin, employeeChangePassword } from "../../service/admin-client";
import { AdminLogin } from "../../entities/auth";
import Login, { ChangePassword } from "../../entities/credentials";
import { useSnackbar } from "notistack";
import { FetchResponse } from "../../service/api-client";

const useAdminLogin = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation<FetchResponse<AdminLogin>, Error, Login>({
    mutationFn: (data) => adminLogin(data),
    onSuccess: (data) => {
      localStorage.setItem(
        import.meta.env.VITE_REACT_APP_ADMIN_TOKEN,
        data.data[0].token
      );
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
    mutationFn: () => employeeChangePassword(credentials),
    onSuccess: (data) => {
      localStorage.setItem(
        import.meta.env.VITE_REACT_APP_ADMIN_TOKEN,
        data.data[0].token
      );
      enqueueSnackbar("Password Changed Successfully", { variant: "success" });
      navigate("/admin");
    },
    onError: (error) => enqueueSnackbar(error.message, { variant: "error" }),
  });
};

export { useAdminLogin, useAdminChangePassword };
