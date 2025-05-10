import { useState } from "react";
import { useFormik } from "formik";
import authValidator from "../data/validations/authValidator";
import { useAdminLogin } from "./admin/useAuth";
import { useEmployeeLogin } from "./employee/useAuth";

export const useLoginLogic = () => {
  const [role, setRole] = useState<"admin" | "employee">("employee");

  const { mutate: adminLogin, isPending } = useAdminLogin();
  const { mutate: employeeLogin, isPending: isLoading } = useEmployeeLogin();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: authValidator,
    onSubmit: (values) => {
      if (role === "admin") {
        adminLogin(values);
      } else {
        employeeLogin(values);
      }
    },
  });

  return {
    role,
    setRole,
    formik,
    isLoading: isPending || isLoading,
  };
};
