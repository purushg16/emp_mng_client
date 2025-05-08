import { TextField, Button, Stack, Typography } from "@mui/material";
import { useFormik } from "formik";
import type { LeaveApproveFormValues } from "../../../entities/formValues";
import { initialLeaveApproveValues } from "../../../data/admin/initialFormValues";
import leaveSchema from "../../../data/validations/leaveSchema";
import SelectInput from "../SelectInput";

type NewLeaveTypeModalProps = {
  onClose: () => void;
  onSubmit: (values: LeaveApproveFormValues) => void;
  initialValues?: LeaveApproveFormValues;
};

const LeaveApproveForm = ({
  onClose,
  onSubmit,
  initialValues = initialLeaveApproveValues,
}: NewLeaveTypeModalProps) => {
  const formik = useFormik<LeaveApproveFormValues>({
    initialValues: initialValues,
    validationSchema: leaveSchema,
    onSubmit: (values) => {
      onSubmit(values);
      formik.resetForm();
      onClose();
    },
  });

  console.log(formik.values.status);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack mb={0}>
        <Typography variant="subtitle1" gutterBottom>
          Action
        </Typography>
        <SelectInput
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
          Description
        </Typography>
        <TextField
          fullWidth
          id="description"
          name="description"
          label="Description"
          value={formik.values.description}
          onChange={formik.handleChange}
          multiline
          rows={3}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
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
            Create Leave
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};

export default LeaveApproveForm;
