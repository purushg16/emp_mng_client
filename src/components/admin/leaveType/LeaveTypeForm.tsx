import { TextField, Button, Stack, Typography } from "@mui/material";
import { useFormik } from "formik";
import leaveTypeSchema from "../../../data/validations/leaveTypeSchema";
import { initialLeaveTypeValues } from "../../../data/admin/initialFormValues";
import { LeaveTypeFields } from "../../../entities/leaveType";

type NewLeaveTypeModalProps = {
  onClose: () => void;
  onSubmit: (values: LeaveTypeFields) => void;
  loading?: boolean;
  isEditing?: boolean;
  initialValues?: LeaveTypeFields;
};

const NewLeaveTypeModal = ({
  onClose,
  onSubmit,
  loading = false,
  isEditing = false,
  initialValues = initialLeaveTypeValues,
}: NewLeaveTypeModalProps) => {
  const formik = useFormik<LeaveTypeFields>({
    initialValues: initialValues,
    validationSchema: leaveTypeSchema,
    onSubmit: (values) => {
      onSubmit(values);
      formik.resetForm();
      onClose();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack mb={0}>
        <Typography variant="subtitle1" gutterBottom>
          Name
        </Typography>
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          id="type"
          name="type"
          label="Leave Type Name"
          value={formik.values.type}
          onChange={formik.handleChange}
          error={formik.touched.type && Boolean(formik.errors.type)}
          helperText={formik.touched.type && formik.errors.type}
          slotProps={{
            formHelperText: {
              sx: {
                textTransform: "capitalize",
              },
            },
          }}
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
        <Stack gap={2} direction="row" justifyContent="end" mt={4}>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained" loading={loading}>
            {isEditing ? "Create Leave Type" : "Update"}
            {loading && "..."}
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};

export default NewLeaveTypeModal;
