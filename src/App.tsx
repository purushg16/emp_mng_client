import { Box } from "@mui/material";
import Appbar from "./components/admin/Appbar";
import Sidebar from "./components/admin/Sidebar";
import { Routes, Route } from "react-router";
import DashboardPage from "./pages/admin/DashboardPage";
import EmployeePage from "./pages/admin/EmployeePage";
import DepartmentPage from "./pages/admin/DepartmentPage";
import LeaveTypePage from "./pages/admin/LeaveTypePage";

const App = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          flexGrow: 1,
          overflow: "clip",
        }}
      >
        <Appbar />
        <Box sx={{ p: 3, minHeight: "100%", overflow: "auto", flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/department" element={<DepartmentPage />} />
            <Route path="/leaveType" element={<LeaveTypePage />} />
            <Route path="/employee" element={<EmployeePage />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
