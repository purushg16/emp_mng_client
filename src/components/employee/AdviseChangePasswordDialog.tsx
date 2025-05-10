import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ChangePasswordModal from "../auth/ChangePasswordModal";
import { Box } from "@mui/material";

const AdviseChangePasswordDialog = ({
  loginCount,
}: {
  loginCount: Date | null;
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    if (loginCount === null) handleClickOpen();
  }, [loginCount]);

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Dear User,</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This is your first time, here. So, Let's update your password with
            the accessible by yourself!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Box>
            <ChangePasswordModal variant="contained" />
          </Box>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
export default AdviseChangePasswordDialog;
