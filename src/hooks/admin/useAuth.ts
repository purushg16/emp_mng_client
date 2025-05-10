import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { AdminLogin } from "../../entities/auth";
import Login, { ChangePassword } from "../../entities/credentials";
import { adminChangePassword, adminLogin } from "../../service/admin-client";
import { FetchResponse } from "../../service/api-client";
import { AppDispatch } from "../../store";
import { setRole } from "../../store/slices/authSlice";

const useAdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  return useMutation<FetchResponse<AdminLogin>, Error, Login>({
    mutationFn: (data) => adminLogin(data),
    onSuccess: (data) => {
      dispatch(
        setRole({
          role: "admin",
          token: data.data[0].token,
        })
      );
      navigate("/admin");
    },
  });
};

const useAdminChangePassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  return useMutation({
    mutationFn: (credentials: ChangePassword) =>
      adminChangePassword(credentials),
    onSuccess: (data) => {
      dispatch(
        setRole({
          role: "admin",
          token: data.data[0].token,
        })
      );
      navigate("/admin");
    },
  });
};

export { useAdminChangePassword, useAdminLogin };
