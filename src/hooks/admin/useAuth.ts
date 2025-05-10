import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { adminLogin, adminChangePassword } from "../../service/admin-client";
import { AdminLogin } from "../../entities/auth";
import Login, { ChangePassword } from "../../entities/credentials";
import { FetchResponse } from "../../service/api-client";
import token_key from "../../data/token_key";

const useAdminLogin = () => {
  const navigate = useNavigate();

  return useMutation<FetchResponse<AdminLogin>, Error, Login>({
    mutationFn: (data) => adminLogin(data),
    onSuccess: (data) => {
      localStorage.setItem(token_key.admin, data.data[0].token);
      navigate("/admin");
    },
  });
};

const useAdminChangePassword = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (credentials: ChangePassword) =>
      adminChangePassword(credentials),
    onSuccess: (data) => {
      localStorage.setItem(token_key.admin, data.data[0].token);
      navigate("/admin");
    },
  });
};

export { useAdminLogin, useAdminChangePassword };
