import { createBrowserRouter, Navigate } from "react-router";
import Layout from "../layouts/Layout";
import { withSuspense } from "../components/common/withSuspense";

// Lazy imports
import { lazy } from "react";
const LoginPage = lazy(() => import("../pages/LoginPage"));
const DashboardPage = lazy(() => import("../pages/admin/DashboardPage"));
const DepartmentPage = lazy(() => import("../pages/admin/DepartmentPage"));
const LeaveTypePage = lazy(() => import("../pages/admin/LeaveTypePage"));
const LeavePage = lazy(() => import("../pages/admin/LeavePage"));
const EmployeePage = lazy(() => import("../pages/admin/EmployeePage"));
const ProfilePage = lazy(() => import("../pages/employee/ProfilePage"));
const EmpLeavePage = lazy(() => import("../pages/employee/LeavePage"));

const router = createBrowserRouter([
  {
    path: "/login",
    element: withSuspense(LoginPage),
  },
  {
    path: "/admin",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="dashboard" /> },
      { path: "dashboard", element: withSuspense(DashboardPage) },
      { path: "department", element: withSuspense(DepartmentPage) },
      { path: "leaveType", element: withSuspense(LeaveTypePage) },
      { path: "leave", element: withSuspense(LeavePage) },
      { path: "employee", element: withSuspense(EmployeePage) },
    ],
  },
  {
    path: "/employee",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="myProfile" /> },
      { path: "myProfile", element: withSuspense(ProfilePage) },
      { path: "myLeaves", element: withSuspense(EmpLeavePage) },
    ],
  },
]);

export default router;
