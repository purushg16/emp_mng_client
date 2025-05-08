import Button from "@mui/material/Button";
import { useState } from "react";
import type { LeaveApproveFormValues } from "../../../entities/formValues";
import FormDialog from "../FormDialog";
import LeaveApproveForm from "./LeaveApproveForm";

const LeaveActionModal = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (value: LeaveApproveFormValues) => {
    console.log(value);
  };

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        Approve/Decline
      </Button>
      <FormDialog
        open={open}
        onClose={handleClose}
        title="Leave Type"
        description='Enter the valid details and click on "Create" to create a new Leave Type with the given details.'
      >
        <LeaveApproveForm onClose={handleClose} onSubmit={handleSubmit} />
      </FormDialog>
    </>
  );
};

export default LeaveActionModal;
