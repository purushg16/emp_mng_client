import { useState } from "react";
import { useFormik } from "formik";
import authValidator from "../data/validations/authValidator";
import { useAdminLogin } from "./admin/useAuth";
import { useEmployeeLogin } from "./employee/useAuth";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { setRole, setEmployeeData } from "../store/slices/authSlice";

export const useLoginLogic = () => {
  const [user, setUserType] = useState<"admin" | "employee">("employee");
  const dispatch = useDispatch<AppDispatch>();

  const { mutate: adminLogin, isPending } = useAdminLogin();
  const { mutate: employeeLogin, isPending: isLoading } = useEmployeeLogin();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: authValidator,
    onSubmit: (values) => {
      if (user === "admin") {
        adminLogin(values, {
          onSuccess: () => {
            dispatch(setRole("admin"));
          },
        });
      } else {
        employeeLogin(values, {
          onSuccess: (data) => {
            dispatch(setRole("employee"));
            dispatch(setEmployeeData(data.data[0].employee));
          },
        });
      }
    },
  });

  return {
    role: user,
    setRole: setUserType,
    formik,
    isLoading: isPending || isLoading,
  };
};
