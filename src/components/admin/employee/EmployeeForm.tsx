import { Button, Grid, Stack, Typography } from "@mui/material";
import { FormikProvider, useFormik } from "formik";
import React from "react";
import { departments } from "../../../data/admin/deps";
import genders from "../../../data/admin/genders";
import { initialEmployeeValues } from "../../../data/admin/initialFormValues";
import employeeSchema from "../../../data/validations/employeeSchema";
import type { EmployeeFormValues } from "../../../entities/formValues";
import SelectInput from "../SelectInput";
import EmployeeDOBPicker from "./EmployeeDOBPicker";
import EmployeePasswordInput from "./EmployeePasswordInput";
import EmployeeTextField from "./EmployeeTextInput";

type EmployeeFormProps = {
  onClose: () => void;
  onSubmit: (values: EmployeeFormValues) => void;
  initialValues?: EmployeeFormValues;
};

const EmployeeForm = ({
  onClose,
  onSubmit,
  initialValues = initialEmployeeValues,
}: EmployeeFormProps) => {
  const formik = useFormik({
    initialValues,
    validationSchema: employeeSchema,
    onSubmit,
    validateOnChange: false,
    validateOnBlur: true,
  });

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
            />
            <EmployeeTextField label="Last Name" name="lastName" type="text" />
          </Stack>
          <Typography variant="subtitle1" mt={1}>
            Security
          </Typography>
          <EmployeePasswordInput />

          <Typography variant="subtitle1" mt={1}>
            Basics
          </Typography>

          <Stack width="100%" direction="row" gap={2}>
            <EmployeeDOBPicker />
            <SelectInput
              label="Gender"
              data={genders}
              value={formik.values.gender}
              onChange={formik.handleChange}
              isError={formik.touched.gender && Boolean(formik.errors.gender)}
              error={formik.errors.gender || ""}
            />

            <SelectInput
              label="Department"
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
            />
          </Stack>

          <Typography variant="subtitle1" mt={1}>
            Contact
          </Typography>
          <Stack width="100%" direction="row" gap={2}>
            <EmployeeTextField name="email" label="Email" />
            <EmployeeTextField name="phone" label="Phone Number" />
          </Stack>

          <Typography variant="subtitle1" mt={1}>
            Address
          </Typography>
          <Stack width="100%" direction="row" gap={2}>
            <EmployeeTextField name="address" label="Address" />
            <EmployeeTextField name="country" label="Country" />
            <EmployeeTextField name="city" label="City/Town" />
          </Stack>

          <Grid size={12} mt={4}>
            <Stack
              width="100%"
              direction="row"
              justifyContent="flex-end"
              gap={2}
            >
              <Button onClick={onClose}>Cancel</Button>
              <Button variant="contained" type="submit">
                Create Employee
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </form>
    </FormikProvider>
  );
};

export default React.memo(EmployeeForm);
