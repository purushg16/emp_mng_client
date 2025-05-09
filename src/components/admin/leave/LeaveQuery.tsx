import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { leaveStatus } from "../../../entities/leave";
import { RootState } from "../../../store";
import { setStatus } from "../../../store/slices/leaveFilterSlice";
import { useSelector, useDispatch } from "react-redux";

const LeaveQuery = () => {
  const dispatch = useDispatch();
  const status = useSelector((state: RootState) => state.leaveFilter.status);

  const handleChange = (event: SelectChangeEvent<"all" | leaveStatus>) => {
    dispatch(setStatus(event.target.value as "all" | leaveStatus));
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth size="small">
        <InputLabel id="leave-status"> Status </InputLabel>
        <Select
          labelId="leave-status"
          id="leave-status"
          value={status}
          label="Status"
          onChange={handleChange}
          sx={{ textTransform: "capitalize" }}
        >
          {["all", "pending", "approved", "declined"].map((st) => (
            <MenuItem value={st} sx={{ textTransform: "capitalize" }}>
              {st}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default LeaveQuery;
