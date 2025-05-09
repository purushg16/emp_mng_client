import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { adminLogin, employeeChangePassword } from "../../service/admin-client";
import { EmployeeLogin } from "../../entities/auth";
import Login, { ChangePassword } from "../../entities/credentials";
import { CACHE_PROFILE } from "../../data/employee/cache_key";
import ms from "ms";
import { editProfile, getProfile } from "../../service/employee-client";
import { useSnackbar } from "notistack";

const useGetEmployeeProfile = () =>
  useQuery({
    queryKey: CACHE_PROFILE,
    queryFn: () => getProfile(),
    staleTime: ms("24h"),
  });

const useEmployeeLogin = (credentials: Login) => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: () => adminLogin(credentials),
    onSuccess: (_data, variables: EmployeeLogin) => {
      enqueueSnackbar("Login Successfull", { variant: "success" });

      localStorage.setItem(
        import.meta.env.VITE_REACT_APP_EMP_TOKEN,
        variables.token
      );
      navigate("/admin");
    },
    onError: (error) => enqueueSnackbar(error.message, { variant: "error" }),
  });
};

const useEmployeeChangePassword = (credentials: ChangePassword) => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: () => employeeChangePassword(credentials),
    onSuccess: (_data, variables: EmployeeLogin) => {
      enqueueSnackbar("Password Changed Successfully", { variant: "success" });
      localStorage.setItem(
        import.meta.env.VITE_REACT_APP_EMP_TOKEN,
        variables.token
      );
      navigate("/admin");
    },
    onError: (error) => enqueueSnackbar(error.message, { variant: "error" }),
  });
};

const useEmployeeEditProfile = (
  successCb?: () => void,
  errorCb?: () => void
) => {
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: editProfile,
    onSuccess: (data) => {
      if (successCb) successCb();
      enqueueSnackbar(data.message, { variant: "success" });
    },
    onError: (err) => {
      if (errorCb) errorCb();
      enqueueSnackbar(err.message, { variant: "error" });
    },
  });
};

export {
  useGetEmployeeProfile,
  useEmployeeLogin,
  useEmployeeChangePassword,
  useEmployeeEditProfile,
};
