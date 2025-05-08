import { FastField, FieldProps } from "formik";
import TextField from "@mui/material/TextField";
import React from "react";
import { EmployeeFormValues } from "../../../entities/formValues";

interface Props {
  name: keyof EmployeeFormValues;
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
  return (
    <FastField name={name}>
      {({ field, meta }: FieldProps) => (
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
      )}
    </FastField>
  );
};

export default React.memo(EmployeeTextField);
