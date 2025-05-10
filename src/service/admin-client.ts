import { AdminLogin } from "../entities/auth";
import Login, { ChangePassword } from "../entities/credentials";
import { DashboardStats } from "../entities/dashboard";
import { Department, DepartmentFields } from "../entities/department";
import Employee, { EmployeeFields } from "../entities/employee";
import Leave, { AdminLeave, LeaveApproveFields } from "../entities/leave";
import { LeaveType, LeaveTypeFields } from "../entities/leaveType";
import {
  AdminAuthEndpoints,
  dashboardAdminEndpoints,
  departmentAdminEndpoints,
  EmployeeAdminEndpoints,
  LeaveAdminEndpoints,
  leaveTypeAdminEndpoints,
} from "./admin-endpoints";
import APIClient from "./api-client";

// dashboard
export const getDashboardStats = new APIClient<DashboardStats>(
  dashboardAdminEndpoints.get,
  "admin"
).getAll;

// Department
export const getAllDepartments = new APIClient<Department>(
  departmentAdminEndpoints.getAll,
  "admin"
).getAll;
export const createDepartment = new APIClient<Department, Department>(
  departmentAdminEndpoints.create,
  "admin"
).post;
export const getSingleDepartment = new APIClient<Department>(
  departmentAdminEndpoints.get,
  "admin"
).get;
export const updateDepartment = new APIClient<
  Partial<DepartmentFields>,
  Department
>(departmentAdminEndpoints.update, "admin").put;
export const deleteDepartment = new APIClient<string, string>(
  departmentAdminEndpoints.delete
).delete;

// Leave Type
export const getAllLeaveType = new APIClient<LeaveType>(
  leaveTypeAdminEndpoints.getAll,
  "admin"
).getAll;
export const createLeaveType = new APIClient<LeaveType, LeaveType>(
  leaveTypeAdminEndpoints.create,
  "admin"
).post;
export const getSingleLeaveType = new APIClient<LeaveType>(
  leaveTypeAdminEndpoints.get,
  "admin"
).get;
export const updateLeaveType = new APIClient<
  Partial<LeaveTypeFields>,
  LeaveType
>(leaveTypeAdminEndpoints.update, "admin").put;
export const deleteLeaveType = new APIClient<string, string>(
  leaveTypeAdminEndpoints.delete,
  "admin"
).delete;

// Employee
export const getAllEmployee = new APIClient<Employee>(
  EmployeeAdminEndpoints.getAll,
  "admin"
).getAll;
export const createEmployee = new APIClient<Employee, Employee>(
  EmployeeAdminEndpoints.create,
  "admin"
).post;
export const getSingleEmployee = new APIClient<Employee>(
  EmployeeAdminEndpoints.get,
  "admin"
).get;
export const updateEmployee = new APIClient<Partial<EmployeeFields>, Employee>(
  EmployeeAdminEndpoints.update,
  "admin"
).put;
export const deleteEmployee = new APIClient<string, string>(
  EmployeeAdminEndpoints.delete,
  "admin"
).delete;

// Leave
export const getSingleLeave = new APIClient<AdminLeave>(
  LeaveAdminEndpoints.get,
  "admin"
).get;
export const getAllLeave = new APIClient<AdminLeave>(
  LeaveAdminEndpoints.getAll,
  "admin"
).getAll;
export const updateLeave = new APIClient<Partial<LeaveApproveFields>, Leave>(
  LeaveAdminEndpoints.update,
  "admin"
).put;

// Auth
export const adminLogin = new APIClient<Login, AdminLogin>(
  AdminAuthEndpoints.login,
  "admin"
).post;
export const adminChangePassword = new APIClient<ChangePassword, AdminLogin>(
  AdminAuthEndpoints.changePassword,
  "admin"
).post;
