import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { FormikProvider, useFormik } from "formik";
import * as React from "react";
import { changePasswordSchema } from "../../data/validations/authValidator";
import { ChangePassword } from "../../entities/credentials";
import ChangePasswordForm from "./ChangePasswordForm";
import { LuKey } from "react-icons/lu";
import { useAdminChangePassword } from "../../hooks/admin/useAuth";
import { useEmployeeChangePassword } from "../../hooks/employee/useAuth";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

interface Props {
  variant?: "text" | "contained" | "outlined";
}

const ChangePasswordModal = ({ variant = "text" }: Props) => {
  const role = useSelector((state: RootState) => state.auth.role);

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { mutate: adminChange, isPending: isLoading } =
    useAdminChangePassword();
  const { mutate: employeeChange, isPending } = useEmployeeChangePassword();

  const onSubmit = (values: ChangePassword) => {
    if (role === "admin") {
      adminChange(values);
    } else employeeChange(values);
  };

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
    },
    validationSchema: changePasswordSchema,
    onSubmit,
  });

  return (
    <React.Fragment>
      <Button
        variant={variant}
        fullWidth
        onClick={handleClickOpen}
        startIcon={<LuKey size={12} />}
      >
        Change Password
      </Button>
      <Dialog
        fullWidth
        maxWidth="xs"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit} noValidate>
            <DialogTitle id="alert-dialog-title">Change Password</DialogTitle>
            <DialogContent>
              <ChangePasswordForm />
            </DialogContent>
            <DialogActions sx={{ mt: 2 }}>
              <Button onClick={handleClose}>Close</Button>
              <Button
                type="submit"
                variant="contained"
                loading={isLoading || isPending}
              >
                Update Password
              </Button>
            </DialogActions>
          </form>
        </FormikProvider>
      </Dialog>
    </React.Fragment>
  );
};

export default ChangePasswordModal;
