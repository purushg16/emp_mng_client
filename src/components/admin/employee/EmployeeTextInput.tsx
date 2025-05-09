import { useField } from "formik";
import TextField from "@mui/material/TextField";
import React from "react";
import { EmployeeFields } from "../../../entities/employee";

interface Props {
  name: keyof EmployeeFields;
  label: string;
  type?: string;
  disabled?: boolean;
  inputProps?: Partial<React.ComponentProps<typeof TextField>>["InputProps"];
}

const EmployeeTextField = ({
  name,
  label,
  type = "text",
  disabled = false,
  inputProps,
}: Props) => {
  const [field, meta] = useField(name);

  return (
    <TextField
      {...field}
      fullWidth
      size="small"
      type={type}
      label={label}
      disabled={disabled}
      error={Boolean(meta.touched && meta.error)}
      helperText={meta.touched && meta.error}
      InputProps={inputProps}
    />
  );
};

export default React.memo(EmployeeTextField);
