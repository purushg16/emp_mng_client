import { Stack, InputAdornment, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import EmployeeTextInput from "../admin/employee/EmployeeTextInput";

const ChangePasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <Stack width="100%">
      <Typography gutterBottom> Old Password </Typography>
      <EmployeeTextInput
        name="oldPassword"
        label="Old Password"
        type={showPassword ? "text" : "password"}
        inputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword((v) => !v)}>
                {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Typography mt={2} gutterBottom>
        New Password
      </Typography>
      <EmployeeTextInput
        name="newPassword"
        label="New Password"
        type={showConfirmPassword ? "text" : "password"}
        inputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowConfirmPassword((v) => !v)}>
                {showConfirmPassword ? <MdVisibility /> : <MdVisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
};

export default ChangePasswordForm;
