import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { ApplyLeaveFormValues } from "../../entities/formValues";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { FastField, FieldProps } from "formik";
import React, { useMemo } from "react";
import { MobileDatePicker } from "@mui/x-date-pickers";

const LeaveDatePicker = ({
  name,
  label,
  disabled = false,
}: {
  name: "from" | "to";
  label: string;
  disabled?: boolean;
}) => {
  const today = useMemo(() => new Date(), []);

  return (
    <FastField name={name}>
      {({ form, meta }: FieldProps<ApplyLeaveFormValues>) => {
        const dateValue = form.getFieldProps(name).value;
        const minDate = name === "to" ? form.values.from : today;

        return (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MobileDatePicker
              label={label}
              disabled={disabled}
              value={dateValue}
              minDate={minDate}
              onChange={(date) => form.setFieldValue(name, date)}
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
      }}
    </FastField>
  );
};

export default React.memo(LeaveDatePicker);
