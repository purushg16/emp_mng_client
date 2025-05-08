import * as Yup from "yup";

export default Yup.object().shape({
  code: Yup.string().required("Code is required"),
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  gender: Yup.string().oneOf(["Male", "Female", "Other"], "Gender is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
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
  birthday: Yup.date().nullable().required("Date of Birth is required"),
});

export const updateEmployeeProfile = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  gender: Yup.string().oneOf(["Male", "Female", "Other"], "Gender is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  country: Yup.string().required("Country is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
  city: Yup.string().required("City/Town is required"),
  address: Yup.string().required("Address is required"),
  birthday: Yup.date().nullable().required("Date of Birth is required"),
});
