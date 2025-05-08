import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { FastField, FieldProps } from "formik";
import React from "react";
import { EmployeeFormValues } from "../../../entities/formValues";

const EmployeeDOBPicker = ({ disabled = false }: { disabled?: boolean }) => {
  return (
    <FastField name="birthday">
      {({ field, form, meta }: FieldProps<EmployeeFormValues>) => (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            disabled={disabled}
            label="Date of Birth"
            value={field.value.birthday}
            onChange={(date) => form.setFieldValue("birthday", date)}
            slotProps={{
              textField: {
                size: "small",
                fullWidth: true,
                error: Boolean(meta.touched && meta.error),
                helperText: meta.touched && meta.error,
              },
            }}
          />
        </LocalizationProvider>
      )}
    </FastField>
  );
};

export default React.memo(EmployeeDOBPicker);
