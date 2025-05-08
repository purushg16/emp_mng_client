/* eslint-disable @typescript-eslint/no-explicit-any */
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

type SelectItem = {
  value: string;
  label: string;
};

interface Props {
  label: string;
  data: SelectItem[];
  value: string;
  onChange: {
    (e: React.ChangeEvent<any>): void;
    <T_1 = string | React.ChangeEvent<any>>(
      field: T_1
    ): T_1 extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  isError: boolean | undefined;
  error: string;
}

const SelectInput = ({
  label,
  data,
  value,
  onChange,
  error,
  isError,
}: Props) => {
  return (
    <FormControl size="small" fullWidth error={isError}>
      <InputLabel>label</InputLabel>
      <Select
        id={label}
        name={label}
        value={value}
        onChange={onChange}
        label="Department"
      >
        {data.map((d) => (
          <MenuItem key={d.value} value={d.value}>
            {d.label}
          </MenuItem>
        ))}
      </Select>
      {isError && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default SelectInput;
