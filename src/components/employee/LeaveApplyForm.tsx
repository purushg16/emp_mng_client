import { TextField, Button, Stack, Typography } from "@mui/material";
import { FormikProvider, useFormik } from "formik";
import { ApplyLeaveFormValues } from "../../entities/formValues";
import { initialLeaveFormValues } from "../../data/employee/initialFormValues";
import { leaveApplySchema } from "../../data/validations/leaveSchema";
import LeaveDatePicker from "./LeaveDatePicker";

type ApplyLeaveModalProps = {
  onClose: () => void;
  onSubmit: (values: ApplyLeaveFormValues) => void;
  initialValues?: ApplyLeaveFormValues;
};

const LeaveApplyForm = ({
  onClose,
  onSubmit,
  initialValues = initialLeaveFormValues,
}: ApplyLeaveModalProps) => {
  const formik = useFormik<ApplyLeaveFormValues>({
    initialValues: initialValues,
    validationSchema: leaveApplySchema,
    onSubmit: (values) => {
      onSubmit(values);
      formik.resetForm();
      onClose();
    },
  });

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit}>
        <Stack mb={0}>
          <Typography variant="subtitle1" gutterBottom>
            Duration
          </Typography>
          <Stack width="100%" direction="row" gap={2} mb={2}>
            <LeaveDatePicker label="From Date" name="from" />
            <LeaveDatePicker
              label="To Date"
              name="to"
              disabled={formik.values.from === null}
            />
          </Stack>

          <Typography variant="subtitle1" gutterBottom>
            Description
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={3}
            size="small"
            variant="outlined"
            id="desc"
            name="desc"
            label="Reason For Leave"
            value={formik.values.desc}
            onChange={formik.handleChange}
            error={formik.touched.desc && Boolean(formik.errors.desc)}
            helperText={formik.touched.desc && formik.errors.desc}
            slotProps={{
              formHelperText: {
                sx: {
                  textTransform: "capitalize",
                },
              },
            }}
          />

          <Stack gap={4} direction="row" justifyContent="end" mt={4}>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="submit" variant="contained">
              Request Leave
            </Button>
          </Stack>
        </Stack>
      </form>
    </FormikProvider>
  );
};

export default LeaveApplyForm;
