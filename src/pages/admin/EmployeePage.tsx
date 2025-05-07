import { Stack, Typography } from "@mui/material";
import EmployeeTable from "../../components/admin/employee/EmployeeTable";
import AddEmployeeModal from "../../components/admin/employee/AddEmployeeModal";

const EmployeePage = () => {
  return (
    <Stack gap={4}>
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <Typography> Manage Employees </Typography>
        <AddEmployeeModal />
      </Stack>
      <EmployeeTable />
    </Stack>
  );
};

export default EmployeePage;
