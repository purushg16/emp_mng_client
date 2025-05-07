import Button from "@mui/material/Button";
import { useState } from "react";
import type { EmployeeFormValues } from "../../../entities/formValues";
import FormDialog from "../FormDialog";
import NewEmployeeModal from "./EmployeeForm";

const AddEmployeeModal = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (value: EmployeeFormValues) => {
    console.log(value);
  };

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        New Employee
      </Button>
      <FormDialog
        open={open}
        maxWidth="md"
        onClose={handleClose}
        title="Employee"
        description='Enter the valid details and click on "Create" to create a new Employee with the given details.'
      >
        <NewEmployeeModal onClose={handleClose} onSubmit={handleSubmit} />
      </FormDialog>
    </>
  );
};

export default AddEmployeeModal;
