import { Button, Grid, Stack, Typography } from "@mui/material";
import { FormikProvider, useFormik } from "formik";
import React from "react";
import { departments } from "../../../data/admin/deps";
import genders from "../../../data/admin/genders";
import { initialEmployeeValues } from "../../../data/admin/initialFormValues";
import employeeSchema from "../../../data/validations/employeeSchema";
import type {
  EmployeeFormValues,
  EmployeeProfileFormValues,
} from "../../../entities/formValues";
import SelectInput from "../SelectInput";
import EmployeeDOBPicker from "./EmployeeDOBPicker";
import EmployeePasswordInput from "./EmployeePasswordInput";
import EmployeeTextField from "./EmployeeTextInput";

type EmployeeFormProps = {
  onClose: () => void;
  onSubmit: (values: EmployeeFormValues | EmployeeProfileFormValues) => void;
  preview?: boolean;
  action?: "create" | "edit";
  isEmployee?: boolean;
  initialValues?: EmployeeFormValues | EmployeeProfileFormValues;
};

const EmployeeForm = ({
  action = "create",
  onClose,
  onSubmit,
  preview = false,
  isEmployee = false,
  initialValues = initialEmployeeValues,
}: EmployeeFormProps) => {
  const formik = useFormik({
    initialValues,
    validationSchema: employeeSchema,
    onSubmit,
    validateOnChange: false,
    validateOnBlur: true,
  });

  const handleCancel = () => {
    formik.resetForm();
    onClose();
  };

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit} noValidate>
        <Grid container spacing={0}>
          <Typography variant="subtitle1">Name</Typography>
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
          {!isEmployee && (
            <>
              <Typography variant="subtitle1" mt={1}>
                Security
              </Typography>
              <EmployeePasswordInput />
            </>
          )}

          <Typography variant="subtitle1" mt={1}>
            Basics
          </Typography>

          <Stack width="100%" direction="row" gap={2}>
            <EmployeeDOBPicker />
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
              <SelectInput
                label="department"
                name="departmentId"
                data={departments.map((dep) => {
                  return {
                    value: dep.code,
                    label: dep.name,
                  };
                })}
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

          <Typography variant="subtitle1" mt={1}>
            Contact
          </Typography>
          <Stack width="100%" direction="row" gap={2}>
            <EmployeeTextField name="email" label="Email" disabled={preview} />
            <EmployeeTextField
              name="phone"
              label="Phone Number"
              disabled={preview}
            />
          </Stack>

          <Typography variant="subtitle1" mt={1}>
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
                  >
                    {isEmployee && "Update Profile"}
                    {!isEmployee && action + "Employee"}
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
