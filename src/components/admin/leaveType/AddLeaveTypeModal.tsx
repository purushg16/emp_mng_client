import Button from "@mui/material/Button";
import { useState } from "react";
import FormDialog from "../FormDialog";
import LeaveTypeForm from "./LeaveTypeForm";
import {
  useCreateLeaveType,
  useEditLeaveType,
} from "../../../hooks/admin/useLeaveType";
import { LeaveType, LeaveTypeFields } from "../../../entities/leaveType";

interface Props {
  action: "add" | "edit";
  data?: LeaveType;
}

const LeaveTypeActionModal = ({ action, data }: Props) => {
  const editMode = action === "edit";
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { mutate: add, isPending: isAdding } = useCreateLeaveType(handleClose);
  const { mutate: edit, isPending: isEditing } = useEditLeaveType(
    data?.id,
    handleClose
  );

  const handleSubmit = (value: LeaveTypeFields) => {
    if (editMode) {
      edit(value);
    } else {
      add(value);
    }
  };

  return (
    <>
      <Button
        variant={!editMode ? "contained" : "text"}
        onClick={handleClickOpen}
      >
        {!editMode ? "New Leave Type" : "Edit"}
      </Button>
      <FormDialog
        open={open}
        onClose={handleClose}
        title="Leave Type"
        description='Enter the valid details and click on "Create" to create a new Leave Type with the given details.'
      >
        <LeaveTypeForm
          onClose={handleClose}
          onSubmit={handleSubmit}
          initialValues={data}
          loading={isAdding || isEditing}
        />
      </FormDialog>
    </>
  );
};

export default LeaveTypeActionModal;
