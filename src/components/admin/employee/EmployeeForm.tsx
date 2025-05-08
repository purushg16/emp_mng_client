import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useFormik } from "formik";
import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import * as Yup from "yup";
import { departments } from "../../../data/admin/deps";
import type { EmployeeFormValues } from "../../../entities/formValues";
import SelectInput from "../SelectInput";
import genders from "../../../data/admin/genders";

type EmployeeFormProps = {
  onClose: () => void;
  onSubmit: (values: EmployeeFormValues) => void;
  initialValues?: EmployeeFormValues;
};

// Validation schema (can be extracted to another file for better modularity)
const validationSchema = Yup.object({
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

const EmployeeForm = ({
  onClose,
  onSubmit,
  initialValues = {
    code: "",
    firstName: "",
    lastName: "",
    gender: "male",
    email: "",
    phone: "",
    country: "",
    password: "",
    confirmPassword: "",
    city: "",
    address: "",
    departmentId: "",
    birthday: null,
  },
}: EmployeeFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const renderTextField = (
    name: keyof EmployeeFormValues,
    label: string,
    type: string = "text"
  ) => (
    <TextField
      size="small"
      fullWidth
      id={name}
      name={name}
      label={label}
      type={type}
      value={formik.values[name]}
      onChange={formik.handleChange}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
    />
  );

  return (
    <form onSubmit={formik.handleSubmit} noValidate>
      <Grid container spacing={0}>
        <Typography variant="subtitle1">Name</Typography>
        <Stack width="100%" direction="row" gap={2}>
          {renderTextField("firstName", "First Name")}
          {renderTextField("lastName", "Last Name")}
        </Stack>

        <Typography variant="subtitle1" mt={1}>
          Security
        </Typography>
        <Stack width="100%" direction="row" gap={2}>
          {renderTextField("code", "Employee Code")}
          <TextField
            {...renderTextField("password", "Password").props}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility}>
                    {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            {...renderTextField("confirmPassword", "Confirm Password").props}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={toggleConfirmPasswordVisibility}>
                    {showConfirmPassword ? (
                      <MdVisibility />
                    ) : (
                      <MdVisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>

        <Typography variant="subtitle1" mt={1}>
          Basics
        </Typography>
        <Stack width="100%" direction="row" gap={2}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date of Birth"
              value={formik.values.birthday}
              onChange={(date) => formik.setFieldValue("birthday", date)}
              slotProps={{
                textField: {
                  size: "small",
                  fullWidth: true,
                  error:
                    formik.touched.birthday && Boolean(formik.errors.birthday),
                  helperText: formik.touched.birthday && formik.errors.birthday,
                },
              }}
            />
          </LocalizationProvider>

          <SelectInput
            label="Gender"
            data={genders}
            value={formik.values.gender}
            onChange={formik.handleChange}
            isError={formik.touched.gender && Boolean(formik.errors.gender)}
            error={formik.errors.gender || ""}
          />

          <SelectInput
            label="Department"
            data={departments.map((dep) => {
              return {
                value: dep.code,
                label: dep.name,
              };
            })}
            value={formik.values.departmentId}
            onChange={formik.handleChange}
            isError={
              formik.touched.departmentId && Boolean(formik.errors.departmentId)
            }
            error={formik.errors.departmentId || ""}
          />
        </Stack>

        <Typography variant="subtitle1" mt={1}>
          Contact
        </Typography>
        <Stack width="100%" direction="row" gap={2}>
          {renderTextField("email", "Email", "email")}
          {renderTextField("phone", "Phone Number")}
        </Stack>

        <Typography variant="subtitle1" mt={1}>
          Address
        </Typography>
        <Stack width="100%" direction="row" gap={2}>
          {renderTextField("address", "Address")}
          {renderTextField("country", "Country")}
          {renderTextField("city", "City/Town")}
        </Stack>

        <Grid size={12} mt={4}>
          <Stack width="100%" direction="row" justifyContent="flex-end" gap={2}>
            <Button onClick={onClose}>Cancel</Button>
            <Button variant="contained" type="submit">
              Create Employee
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </form>
  );
};

export default EmployeeForm;
