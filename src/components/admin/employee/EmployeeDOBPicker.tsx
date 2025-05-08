import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useField, useFormikContext } from "formik";
import React from "react";
import { EmployeeFormValues } from "../../../entities/formValues";

const EmployeeDOBPicker = ({ disabled = false }: { disabled?: boolean }) => {
  const [field, meta] = useField("birthday");
  const { setFieldValue } = useFormikContext<EmployeeFormValues>();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        disabled={disabled}
        label="Date of Birth"
        value={field.value}
        onChange={(date) => setFieldValue("birthday", date)}
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
