import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
import { AppDispatch } from "../../store";
import { setRole } from "../../store/slices/authSlice";
import { useDispatch } from "react-redux";

const useGetEmployeeProfile = () =>
  useQuery({
    queryKey: CACHE_PROFILE,
    queryFn: () => getProfile(),
    staleTime: ms("24h"),
  });

const useEmployeeLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  return useMutation<FetchResponse<EmployeeLogin>, Error, Login>({
    mutationFn: (credentials) => employeeLogin(credentials),
    onSuccess: (data) => {
      dispatch(
        setRole({
          role: "employee",
          token: data.data[0].token,
        })
      );
      navigate("/employee");
    },
  });
};

const useEmployeeChangePassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  return useMutation<FetchResponse<EmployeeLogin>, Error, ChangePassword>({
    mutationFn: (credentials) => employeeChangePassword(credentials),
    onSuccess: (data) => {
      dispatch(
        setRole({
          role: "employee",
          token: data.data[0].token,
        })
      );
      navigate("/employee");
    },
  });
};

const useEmployeeEditProfile = (
  successCb?: () => void,
  errorCb?: () => void
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CACHE_PROFILE });
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
