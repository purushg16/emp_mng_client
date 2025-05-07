import Button from "@mui/material/Button";
import { useState } from "react";
import type { LeaveTypeFormValues } from "../../../entities/formValues";
import FormDialog from "../FormDialog";
import LeaveTypeForm from "./LeaveTypeForm";

const AddDeptModal = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (value: LeaveTypeFormValues) => {
    console.log(value);
  };

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        New Leave Type
      </Button>
      <FormDialog
        open={open}
        onClose={handleClose}
        title="Leave Type"
        description='Enter the valid details and click on "Create" to create a new Leave Type with the given details.'
      >
        <LeaveTypeForm onClose={handleClose} onSubmit={handleSubmit} />
      </FormDialog>
    </>
  );
};

export default AddDeptModal;
