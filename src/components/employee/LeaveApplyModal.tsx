import Button from "@mui/material/Button";
import { useState } from "react";
import FormDialog from "../admin/FormDialog";
import LeaveApplyForm from "./LeaveApplyForm";
import { ApplyLeaveFormValues } from "../../entities/formValues";
import { usePostLeave } from "../../hooks/employee/useLeave";

const LeaveApplyModal = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { mutate, isPending } = usePostLeave(handleClose);

  const handleSubmit = (value: ApplyLeaveFormValues) => {
    mutate(value);
  };

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        Apply For Leave
      </Button>
      <FormDialog
        open={open}
        onClose={handleClose}
        title="Employee"
        description='Enter the valid details and click on "Create" to create a new Employee with the given details.'
      >
        <LeaveApplyForm
          onClose={handleClose}
          onSubmit={handleSubmit}
          loading={isPending}
        />
      </FormDialog>
    </>
  );
};

export default LeaveApplyModal;
