import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useGetAllLeaveType } from "../../hooks/employee/useLeaveType";

interface Props {
  value: string;
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
  error?: string;
}

const LeaveTypeSelector = ({
  value,
  disabled = false,
  onChange,
  error,
  isError,
}: Props) => {
  const { data, isSuccess } = useGetAllLeaveType();

  if (isSuccess)
    return (
      <Stack mb={2}>
        <Typography gutterBottom> Leave Type </Typography>
        <FormControl size="small" fullWidth error={isError} disabled={disabled}>
          <InputLabel sx={{ textTransform: "capitalize" }}>
            Leave Type
          </InputLabel>
          <Select
            id="leaveTypeId"
            name="leaveTypeId"
            value={value}
            onChange={onChange}
            label="Leave Type"
          >
            {data.data.map((d) => (
              <MenuItem key={d.id} value={d.id}>
                {d.type}
              </MenuItem>
            ))}
          </Select>
          {isError && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
      </Stack>
    );
};

export default LeaveTypeSelector;
