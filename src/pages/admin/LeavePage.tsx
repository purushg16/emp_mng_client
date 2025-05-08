import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import LeaveActionModal from "../../components/admin/leave/LeaveActionModal";

const LeavePage = () => {
  return (
    <Stack gap={4}>
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <Typography> Manage Leaves </Typography>
        <LeaveActionModal />
      </Stack>
    </Stack>
  );
};

export default LeavePage;
