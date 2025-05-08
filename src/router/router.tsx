import { createBrowserRouter, Navigate } from "react-router";
import Layout from "../layouts/Layout";
import DashboardPage from "../pages/admin/DashboardPage";
import DepartmentPage from "../pages/admin/DepartmentPage";
import LeaveTypePage from "../pages/admin/LeaveTypePage";
import LeavePage from "../pages/admin/LeavePage";
import EmployeePage from "../pages/admin/EmployeePage";
import ProfilePage from "../pages/employee/ProfilePage";
import EmpLeavePage from "../pages/employee/LeavePage";
import LoginPage from "../pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/admin",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="dashboard" /> },
      { path: "dashboard", element: <DashboardPage /> },
      { path: "department", element: <DepartmentPage /> },
      { path: "leaveType", element: <LeaveTypePage /> },
      { path: "leave", element: <LeavePage /> },
      { path: "employee", element: <EmployeePage /> },
    ],
  },
  {
    path: "/employee",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="myProfile" /> },
      { path: "myProfile", element: <ProfilePage /> },
      { path: "myLeaves", element: <EmpLeavePage /> },
    ],
  },
]);

export default router;
