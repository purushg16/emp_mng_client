import { TextField, Button, Stack, Typography, Alert } from "@mui/material";
import { useFormik } from "formik";
import { initialLeaveApproveValues } from "../../../data/admin/initialFormValues";
import leaveSchema from "../../../data/validations/leaveSchema";
import SelectInput from "../SelectInput";
import { LeaveApproveFields } from "../../../entities/leave";

type NewLeaveTypeModalProps = {
  onClose: () => void;
  onSubmit: (values: LeaveApproveFields) => void;
  preview?: boolean;
  loading?: boolean;
  initialValues?: LeaveApproveFields;
};

const LeaveApproveForm = ({
  onClose,
  onSubmit,
  preview = false,
  loading = false,
  initialValues = initialLeaveApproveValues,
}: NewLeaveTypeModalProps) => {
  const formik = useFormik<LeaveApproveFields>({
    initialValues: initialValues,
    validationSchema: leaveSchema,
    onSubmit: (values) => {
      if (!preview) {
        onSubmit(values);
        formik.resetForm();
        onClose();
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack mb={0}>
        <Typography variant="subtitle1" gutterBottom>
          Action
        </Typography>
        <SelectInput
          disabled={preview}
          data={[
            { label: "Approved", value: "approved" },
            { label: "Declined", value: "declined" },
          ]}
          label="status"
          value={formik.values.status}
          onChange={formik.handleChange}
          isError={formik.touched.status && Boolean(formik.errors.status)}
          error={formik.errors.status || ""}
        />

        <Typography variant="subtitle1" mt={3} gutterBottom>
          Remark
        </Typography>
        <TextField
          fullWidth
          id="remark"
          name="remark"
          label="Remark"
          disabled={preview}
          value={formik.values.remark}
          onChange={formik.handleChange}
          multiline
          rows={3}
          error={formik.touched.remark && Boolean(formik.errors.remark)}
          helperText={formik.touched.remark && formik.errors.remark}
          slotProps={{
            formHelperText: {
              sx: {
                textTransform: "capitalize",
              },
            },
          }}
        />
        <Stack gap={2} direction="row" justifyContent="end" mt={4}>
          <Button onClick={onClose}>{preview ? "Close" : "Cancel"}</Button>
          {!preview && (
            <Button variant="contained" type="submit" loading={loading}>
              Submit
            </Button>
          )}
          {preview && initialValues && (
            <Alert
              severity={
                initialValues.status === "approved" ? "success" : "error"
              }
              sx={{ py: 0, px: 1.5 }}
            >
              {initialValues.status === "approved" ? "Approved" : "Declined"}
            </Alert>
          )}
        </Stack>
      </Stack>
    </form>
  );
};

export default LeaveApproveForm;
