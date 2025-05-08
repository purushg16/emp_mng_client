import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import React, { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import EmployeeTextInput from "./EmployeeTextInput";

const EmployeePasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <Stack width="100%" direction="row" gap={2}>
      <EmployeeTextInput
        name="password"
        label="Password"
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

      <EmployeeTextInput
        name="confirmPassword"
        label="Confirm Password"
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

export default React.memo(EmployeePasswordInput);
