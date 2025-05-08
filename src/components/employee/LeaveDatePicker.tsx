import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { ApplyLeaveFormValues } from "../../entities/formValues";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import React from "react";
import { MobileDatePicker } from "@mui/x-date-pickers";
import { useField, useFormikContext } from "formik";

const LeaveDatePicker = ({
  name,
  label,
  disabled = false,
}: {
  name: "from" | "to";
  label: string;
  disabled?: boolean;
}) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext<ApplyLeaveFormValues>();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MobileDatePicker
        label={label}
        disabled={disabled}
        value={field.value}
        minDate={new Date()}
        onChange={(date) => setFieldValue(name, date)}
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

export default React.memo(LeaveDatePicker);
