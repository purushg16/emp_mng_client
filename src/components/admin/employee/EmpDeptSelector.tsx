import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React from "react";
import { useGetAllDepartment } from "../../../hooks/admin/useDepartment";

interface Props {
  label: string;
  value: string;
  name?: string;
  disabled?: boolean;
  onChange: {
    (e: React.ChangeEvent<string>): void;
    <T_1 = string | React.ChangeEvent<string>>(
      field: T_1
    ): T_1 extends React.ChangeEvent<string>
      ? void
      : (e: string | React.ChangeEvent<string>) => void;
  };
  isError: boolean | undefined;
  error: string;
}

const EmpDeptSelector = ({
  label,
  name,
  value,
  disabled = false,
  onChange,
  error,
  isError,
}: Props) => {
  const { data, isSuccess } = useGetAllDepartment();

  if (isSuccess)
    return (
      <FormControl size="small" fullWidth error={isError} disabled={disabled}>
        <InputLabel sx={{ textTransform: "capitalize" }}>{label}</InputLabel>
        <Select
          id={label}
          name={name || label}
          value={value}
          onChange={onChange}
          label={label}
        >
          {data.data.map((d) => (
            <MenuItem key={d.id} value={d.id}>
              {d.name}
            </MenuItem>
          ))}
        </Select>
        {isError && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    );
};

export default React.memo(EmpDeptSelector);
