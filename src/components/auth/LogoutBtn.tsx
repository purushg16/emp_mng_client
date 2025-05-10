import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import { RiLogoutCircleLine } from "react-icons/ri";
import useLogout from "../../hooks/useLogout";

const LogoutBtn = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { handleLogout } = useLogout(handleClose);
  return (
    <React.Fragment>
      <Button
        color="error"
        fullWidth
        onClick={handleClickOpen}
        startIcon={<RiLogoutCircleLine size={12} />}
      >
        Logout
      </Button>
      <Dialog
        fullWidth
        maxWidth="xs"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Change Password</DialogTitle>
        <DialogContent>Are you sure you want to logout?</DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            color="error"
            variant="contained"
            onClick={handleLogout}
            startIcon={<RiLogoutCircleLine size={12} />}
          >
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default LogoutBtn;
