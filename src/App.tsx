import { Routes, Route, Navigate } from "react-router";
import DashboardPage from "./pages/admin/DashboardPage";
import EmployeePage from "./pages/admin/EmployeePage";
import DepartmentPage from "./pages/admin/DepartmentPage";
import LeaveTypePage from "./pages/admin/LeaveTypePage";
import LeavePage from "./pages/admin/LeavePage";
import Layout from "./layouts/Layout";
import ProfilePage from "./pages/employee/ProfilePage";
import EmpLeavePage from "./pages/employee/LeavePage";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/admin">
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="department" element={<DepartmentPage />} />
          <Route path="leaveType" element={<LeaveTypePage />} />
          <Route path="leave" element={<LeavePage />} />
          <Route path="employee" element={<EmployeePage />} />
        </Route>
        <Route path="/employee">
          <Route index element={<Navigate to="profile" />} />
          <Route path="myProfile" element={<ProfilePage />} />
          <Route path="myLeaves" element={<EmpLeavePage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
