import { TextField, Button, Stack, Typography } from "@mui/material";
import { useFormik } from "formik";
import type { LeaveTypeFormValues } from "../../../entities/formValues";
import leaveTypeSchema from "../../../data/validations/leaveTypeSchema";

type NewLeaveTypeModalProps = {
  onClose: () => void;
  onSubmit: (values: LeaveTypeFormValues) => void;
  initialValues?: LeaveTypeFormValues;
};

const NewLeaveTypeModal = ({
  onClose,
  onSubmit,
  initialValues = { name: "", description: "" },
}: NewLeaveTypeModalProps) => {
  const formik = useFormik<LeaveTypeFormValues>({
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
        <Typography variant="subtitle1"> Name </Typography>
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          id="name"
          name="name"
          label="Leave Type Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          slotProps={{
            formHelperText: {
              sx: {
                textTransform: "capitalize",
              },
            },
          }}
        />

        <Typography variant="subtitle1" mt={3}>
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
            Create Leave Type
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};

export default NewLeaveTypeModal;
