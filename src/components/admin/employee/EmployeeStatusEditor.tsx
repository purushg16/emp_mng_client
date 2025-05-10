import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FaBan } from "react-icons/fa";
import { useEditEmployee } from "../../../hooks/admin/useEmployee";
import { employeeStatus } from "../../../entities/employee";
import { IoIosReturnLeft } from "react-icons/io";

interface Props {
  id: string;
  status: employeeStatus;
}

export default function EmployeeStatusEditor({ id, status }: Props) {
  const active = status === "active";
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log(id);
  const { mutate, isPending } = useEditEmployee(id, handleClose);

  const handleSubmit = () => {
    mutate({ status: active ? "inactive" : "active" });
  };

  return (
    <React.Fragment>
      <Button
        startIcon={active ? <FaBan size={12} /> : <IoIosReturnLeft size={12} />}
        onClick={handleClickOpen}
        size="small"
        color={active ? "error" : "success"}
        sx={{ px: 1 }}
      >
        {active ? `Deactivate` : "Activate"}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Confirm Action</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you can't undo this action.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ gap: 2 }}>
          <Button onClick={handleClose}>Disagree</Button>
          <Button
            onClick={handleSubmit}
            loading={isPending}
            color={active ? "error" : "success"}
            variant="contained"
          >
            Proceed
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
