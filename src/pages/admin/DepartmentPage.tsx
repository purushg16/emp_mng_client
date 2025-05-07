import { Stack, Typography } from "@mui/material";
import DepartmentTable from "../../components/admin/department/DepartmentTable";
import AddDeptModal from "../../components/admin/department/AddDeptModal";

const DepartmentPage = () => {
  return (
    <Stack gap={4}>
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <Typography> Manage Department </Typography>
        <AddDeptModal />
      </Stack>
      <DepartmentTable />
    </Stack>
  );
};

export default DepartmentPage;
