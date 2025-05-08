import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { adminLogin, employeeChangePassword } from "../../service/admin-client";
import { AdminLogin } from "../../entities/auth";
import Login, { ChangePassword } from "../../entities/credentials";

const useAdminLogin = (credentials: Login) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => adminLogin(credentials),
    onSuccess: (_data, variables: AdminLogin) => {
      localStorage.setItem(
        import.meta.env.VITE_REACT_APP_ADMIN_TOKEN,
        variables.token
      );
      navigate("/admin");
    },
  });
};

const useAdminChangePassword = (credentials: ChangePassword) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => employeeChangePassword(credentials),
    onSuccess: (_data, variables: AdminLogin) => {
      localStorage.setItem(
        import.meta.env.VITE_REACT_APP_ADMIN_TOKEN,
        variables.token
      );
      navigate("/admin");
    },
  });
};

export { useAdminLogin, useAdminChangePassword };
