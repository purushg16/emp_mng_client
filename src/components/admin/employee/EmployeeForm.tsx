import { Button, Grid, Stack, Typography } from "@mui/material";
import { FormikProvider, useFormik } from "formik";
import React from "react";
import genders from "../../../data/admin/genders";
import { initialEmployeeValues } from "../../../data/admin/initialFormValues";
import { editEmployeeSchema } from "../../../data/validations/employeeSchema";
import { EmployeeFields } from "../../../entities/employee";
import type { EmployeeProfileFormValues } from "../../../entities/formValues";
import SelectInput from "../SelectInput";
import EmpDeptSelector from "./EmpDeptSelector";
import EmployeeDOBPicker from "./EmployeeDOBPicker";
import EmployeePasswordInput from "./EmployeePasswordInput";
import EmployeeTextField from "./EmployeeTextInput";

type EmployeeFormProps = {
  onClose: () => void;
  onSubmit: (values: EmployeeFields | EmployeeProfileFormValues) => void;
  loading?: boolean;
  preview?: boolean;
  action?: "add" | "edit";
  isEmployee?: boolean;
  initialValues?: EmployeeFields | EmployeeProfileFormValues;
};

const EmployeeForm = ({
  action = "add",
  onClose,
  onSubmit,
  loading = false,
  preview = false,
  isEmployee = false,
  initialValues = initialEmployeeValues,
}: EmployeeFormProps) => {
  const formik = useFormik({
    initialValues,
    validationSchema: editEmployeeSchema,
    onSubmit,
  });

  const handleCancel = () => {
    formik.resetForm();
    onClose();
  };

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit} noValidate>
        <Grid container spacing={0}>
          <Typography variant="subtitle1" gutterBottom>
            Name
          </Typography>
          <Stack width="100%" direction="row" gap={2}>
            <EmployeeTextField
              label="First Name"
              name="firstName"
              type="text"
              disabled={preview}
            />
            <EmployeeTextField
              label="Last Name"
              name="lastName"
              type="text"
              disabled={preview}
            />
          </Stack>
          {(!isEmployee || action === "add") && (
            <>
              <Typography variant="subtitle1" mt={1} gutterBottom>
                Security
              </Typography>
              <EmployeePasswordInput />
            </>
          )}

          <Typography variant="subtitle1" mt={1} gutterBottom>
            Basics
          </Typography>

          <Stack width="100%" direction="row" gap={2}>
            <EmployeeDOBPicker disabled={preview} />
            <SelectInput
              label="gender"
              data={genders}
              value={formik.values.gender}
              onChange={formik.handleChange}
              isError={formik.touched.gender && Boolean(formik.errors.gender)}
              error={formik.errors.gender || ""}
              disabled={preview}
            />

            {!isEmployee && (
              <EmpDeptSelector
                label="department"
                name="departmentId"
                value={formik.values.departmentId}
                onChange={formik.handleChange}
                isError={
                  formik.touched.departmentId &&
                  Boolean(formik.errors.departmentId)
                }
                error={formik.errors.departmentId || ""}
                disabled={preview}
              />
            )}
          </Stack>

          <Typography variant="subtitle1" mt={1} gutterBottom>
            Contact
          </Typography>
          <Stack width="100%" direction="row" gap={2}>
            <EmployeeTextField name="email" label="Email" disabled={preview} />
            <EmployeeTextField
              name="mobile"
              label="Phone Number"
              disabled={preview}
            />
          </Stack>

          <Typography variant="subtitle1" mt={1} gutterBottom>
            Address
          </Typography>
          <Stack width="100%" direction="row" gap={2}>
            <EmployeeTextField
              name="address"
              label="Address"
              disabled={preview}
            />
            <EmployeeTextField
              name="country"
              label="Country"
              disabled={preview}
            />
            <EmployeeTextField
              name="city"
              label="City/Town"
              disabled={preview}
            />
          </Stack>

          <Grid size={12} mt={4}>
            <Stack
              width="100%"
              direction="row"
              justifyContent={isEmployee ? "center" : "flex-end"}
              gap={2}
            >
              {(!isEmployee || !preview) && (
                <>
                  <Button
                    onClick={handleCancel}
                    color={isEmployee ? "success" : "primary"}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    type="submit"
                    color={isEmployee ? "success" : "primary"}
                    loading={loading}
                    sx={{ textTransform: "capitalize" }}
                  >
                    {isEmployee && "Update Profile"}
                    {!isEmployee && action.toUpperCase() + " Employee"}
                  </Button>
                </>
              )}
            </Stack>
          </Grid>
        </Grid>
      </form>
    </FormikProvider>
  );
};

export default React.memo(EmployeeForm);
