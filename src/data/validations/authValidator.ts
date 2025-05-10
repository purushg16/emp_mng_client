import * as Yup from "yup";

export default Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

export const changePasswordSchema = Yup.object({
  oldPassword: Yup.string().required("Old Password is required"),
  newPassword: Yup.string()
    .required("New Password is required")
    .min(8, "New Password must be at least 8 characters")
    .matches(/[a-z]/, "New Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "New Password must contain at least one uppercase letter")
    .matches(/\d/, "New Password must contain at least one number")
    .matches(
      /[@$!%*?&]/,
      "New Password must contain at least one special character"
    ),
});
