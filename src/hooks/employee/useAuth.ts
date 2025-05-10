import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { EmployeeLogin } from "../../entities/auth";
import Login, { ChangePassword } from "../../entities/credentials";
import { CACHE_PROFILE } from "../../data/employee/cache_key";
import ms from "ms";
import {
  editProfile,
  employeeLogin,
  getProfile,
  employeeChangePassword,
} from "../../service/employee-client";
import { FetchResponse } from "../../service/api-client";

const useGetEmployeeProfile = () =>
  useQuery({
    queryKey: CACHE_PROFILE,
    queryFn: () => getProfile(),
    staleTime: ms("24h"),
  });

const useEmployeeLogin = () => {
  const navigate = useNavigate();

  return useMutation<FetchResponse<EmployeeLogin>, Error, Login>({
    mutationFn: (credentials) => employeeLogin(credentials),
    onSuccess: (data) => {
      localStorage.setItem(
        import.meta.env.VITE_REACT_APP_EMP_TOKEN,
        data.data[0].token
      );
      navigate("/admin");
    },
  });
};

const useEmployeeChangePassword = () => {
  const navigate = useNavigate();

  return useMutation<FetchResponse<EmployeeLogin>, Error, ChangePassword>({
    mutationFn: (credentials) => employeeChangePassword(credentials),
    onSuccess: (data) => {
      localStorage.setItem(
        import.meta.env.VITE_REACT_APP_EMP_TOKEN,
        data.data[0].token
      );
      navigate("/admin");
    },
  });
};

const useEmployeeEditProfile = (
  successCb?: () => void,
  errorCb?: () => void
) => {
  return useMutation({
    mutationFn: editProfile,
    onSuccess: () => {
      if (successCb) successCb();
    },
    onError: () => {
      if (errorCb) errorCb();
    },
  });
};

export {
  useGetEmployeeProfile,
  useEmployeeLogin,
  useEmployeeChangePassword,
  useEmployeeEditProfile,
};
