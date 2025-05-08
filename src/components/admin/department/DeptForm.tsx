import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import type { DepartmentFormValues } from "../../../entities/formValues";
import departmentSchema from "../../../data/validations/departmentSchema";
import { initialDepartmentValues } from "../../../data/admin/initialFormValues";

type DepartmentFormProps = {
  initialValues?: DepartmentFormValues;
  onClose: () => void;
  onSubmit: (values: DepartmentFormValues) => void;
};

const DepartmentForm = ({
  onClose,
  onSubmit,
  initialValues = initialDepartmentValues,
}: DepartmentFormProps) => {
  const formik = useFormik<DepartmentFormValues>({
    initialValues,
    validationSchema: departmentSchema,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit} noValidate>
      <Grid container spacing={4} mb={2}>
        <Grid size={12} borderBottom="1px solid #d8d8d8" pb={4}>
          <Stack gap={4} direction="row">
            <Typography variant="subtitle2" whiteSpace="nowrap">
              Department Code
            </Typography>
            <TextField
              size="small"
              variant="outlined"
              fullWidth
              id="code"
              name="code"
              label="Department Code"
              value={formik.values.code}
              onChange={formik.handleChange}
              error={formik.touched.code && Boolean(formik.errors.code)}
              helperText={formik.touched.code && formik.errors.code}
              slotProps={{
                formHelperText: {
                  sx: {
                    textTransform: "capitalize",
                  },
                },
              }}
            />
          </Stack>
        </Grid>

        <Grid size={12}>
          <Stack gap={4} direction="row">
            <Typography variant="subtitle2" whiteSpace="nowrap">
              Department Name
            </Typography>
            <Stack width="100%" gap={3}>
              <TextField
                size="small"
                variant="outlined"
                fullWidth
                id="name"
                name="name"
                label="Department Name"
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
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                id="shortName"
                name="shortName"
                label="Short Name"
                value={formik.values.shortName}
                onChange={formik.handleChange}
                error={
                  formik.touched.shortName && Boolean(formik.errors.shortName)
                }
                helperText={formik.touched.shortName && formik.errors.shortName}
                slotProps={{
                  formHelperText: {
                    sx: {
                      textTransform: "capitalize",
                    },
                  },
                }}
              />
            </Stack>
          </Stack>
        </Grid>

        <Grid size={12}>
          <Stack direction="row" justifyContent="end" gap={2}>
            <Button onClick={onClose}> Cancel </Button>
            <Button variant="contained" type="submit">
              Create Department
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </form>
  );
};

export default DepartmentForm;
