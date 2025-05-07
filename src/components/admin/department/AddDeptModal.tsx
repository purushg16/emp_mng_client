import { useState } from "react";
import Button from "@mui/material/Button";
import DepartmentForm from "./DeptForm";
import FormDialog from "../FormDialog";
import type { DepartmentFormValues } from "../../../entities/formValues";

const AddDeptModal = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (values: DepartmentFormValues) => {
    console.log(values);
    handleClose();
  };

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        New Department
      </Button>
      <FormDialog
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        title="Department"
        description='Enter the valid details and click on "Create" to create a new department with given details.'
      >
        <DepartmentForm onClose={handleClose} onSubmit={handleSubmit} />
      </FormDialog>
    </>
  );
};

export default AddDeptModal;
