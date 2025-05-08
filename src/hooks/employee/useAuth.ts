import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { adminLogin, employeeChangePassword } from "../../service/admin-client";
import { EmployeeLogin } from "../../entities/auth";
import Login, { ChangePassword } from "../../entities/credentials";
import { CACHE_PROFILE } from "../../data/employee/cache_key";
import ms from "ms";
import { editProfile, getProfile } from "../../service/employee-client";

const useGetEmployeeProfile = () =>
  useQuery({
    queryKey: CACHE_PROFILE,
    queryFn: () => getProfile(),
    staleTime: ms("24h"),
  });

const useEmployeeLogin = (credentials: Login) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => adminLogin(credentials),
    onSuccess: (_data, variables: EmployeeLogin) => {
      localStorage.setItem(
        import.meta.env.VITE_REACT_APP_EMP_TOKEN,
        variables.token
      );
      navigate("/admin");
    },
  });
};

const useEmployeeChangePassword = (credentials: ChangePassword) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => employeeChangePassword(credentials),
    onSuccess: (_data, variables: EmployeeLogin) => {
      localStorage.setItem(
        import.meta.env.VITE_REACT_APP_EMP_TOKEN,
        variables.token
      );
      navigate("/admin");
    },
  });
};

const useEmployeeEditProfile = (successCb: () => void, errorCb: () => void) => {
  return useMutation({
    mutationFn: editProfile,
    onSuccess: successCb,
    onError: errorCb,
  });
};

export {
  useGetEmployeeProfile,
  useEmployeeLogin,
  useEmployeeChangePassword,
  useEmployeeEditProfile,
};
