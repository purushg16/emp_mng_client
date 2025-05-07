import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AddLeaveModal from "../../components/admin/leaveType/AddLeaveTypeModal";

const LeaveTypePage = () => {
  return (
    <Stack gap={4}>
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <Typography> Manage Leave Types </Typography>
        <AddLeaveModal />
      </Stack>
    </Stack>
  );
};

export default LeaveTypePage;
