import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useField, useFormikContext } from "formik";
import React from "react";
import { EmployeeFields } from "../../../entities/employee";

const EmployeeDOBPicker = ({ disabled = false }: { disabled?: boolean }) => {
  const [field, meta] = useField("birthday");
  const { setFieldValue } = useFormikContext<EmployeeFields>();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        disabled={disabled}
        label="Date of Birth"
        value={new Date(field.value)}
        onChange={(date) => {
          setFieldValue("birthday", date?.toISOString());
        }}
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
  );
};

export default React.memo(EmployeeDOBPicker);
