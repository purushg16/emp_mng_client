import * as Yup from "yup";

export const editEmployeeSchema = Yup.object().shape({
  code: Yup.string().optional().required("Code is required"),
  firstName: Yup.string().optional().required("First name is required"),
  lastName: Yup.string().optional().required("Last name is required"),
  gender: Yup.string()
    .optional()
    .oneOf(["male", "female", "other"], "Gender is required"),
  email: Yup.string()
    .optional()

    .email("Invalid email format")
    .required("Email is required"),
  mobile: Yup.string()
    .optional()

    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  status: Yup.string()
    .optional()
    .oneOf(["active", "inactive"], "Status is required"),
  country: Yup.string().optional().required("Country is required"),
  password: Yup.string()
    .optional()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),

  city: Yup.string().optional().required("City/Town is required"),
  address: Yup.string().optional().required("Address is required"),
  departmentId: Yup.string().optional().required("Department is required"),
  birthday: Yup.string()
    .matches(
      /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
      "Birthday must be a valid timestamp"
    )
    .required("Birthday is required"),
});

export default Yup.object().shape({
  code: Yup.string().required("Code is required"),
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  gender: Yup.string().oneOf(["male", "female", "other"], "Gender is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  status: Yup.string().oneOf(["active", "inactive"], "Status is required"),
  country: Yup.string().required("Country is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
  city: Yup.string().required("City/Town is required"),
  address: Yup.string().required("Address is required"),
  departmentId: Yup.string().required("Department is required"),
  birthday: Yup.string()
    .matches(
      /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
      "Birthday must be a valid timestamp"
    )
    .required("Birthday is required"),
});

export const updateEmployeeProfile = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  gender: Yup.string().oneOf(["male", "female", "other"], "Gender is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  country: Yup.string().required("Country is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
  city: Yup.string().required("City/Town is required"),
  address: Yup.string().required("Address is required"),
  birthday: Yup.string()
    .matches(
      /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
      "Birthday must be a valid timestamp"
    )
    .required("Birthday is required"),
});
