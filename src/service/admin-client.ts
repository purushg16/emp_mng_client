import { AdminLogin } from "../entities/auth";
import Login, { ChangePassword } from "../entities/credentials";
import { Department, DepartmentFields } from "../entities/department";
import Employee, { EmployeeFields } from "../entities/employee";
import Leave, { LeaveApproveFields } from "../entities/leave";
import { LeaveType, LeaveTypeFields } from "../entities/leaveType";
import {
  AdminAuthEndpoints,
  departmentAdminEndpoints,
  EmployeeAdminEndpoints,
  LeaveAdminEndpoints,
  leaveTypeAdminEndpoints,
} from "./admin-endpoints";
import APIClient from "./api-client";

// Department
export const getAllDepartments = new APIClient<Department, Department>(
  departmentAdminEndpoints.getAll
).getAll;
export const createDepartment = new APIClient<Department, Department>(
  departmentAdminEndpoints.create
).post;
export const getSingleDepartment = new APIClient<Department, Department>(
  departmentAdminEndpoints.get
).get;
export const updateDepartment = new APIClient<
  Partial<DepartmentFields>,
  Department
>(departmentAdminEndpoints.update).put;
export const deleteDepartment = new APIClient<string, string>(
  departmentAdminEndpoints.delete
).delete;

// Leave Type
export const getAllLeaveType = new APIClient<LeaveType, LeaveType>(
  leaveTypeAdminEndpoints.getAll
).getAll;
export const createLeaveType = new APIClient<LeaveType, LeaveType>(
  leaveTypeAdminEndpoints.create
).post;
export const getSingleLeaveType = new APIClient<LeaveType, LeaveType>(
  leaveTypeAdminEndpoints.get
).get;
export const updateLeaveType = new APIClient<
  Partial<LeaveTypeFields>,
  LeaveType
>(leaveTypeAdminEndpoints.update).put;
export const deleteLeaveType = new APIClient<string, string>(
  leaveTypeAdminEndpoints.delete
).delete;

// Employee
export const getAllEmployee = new APIClient<Employee, Employee>(
  EmployeeAdminEndpoints.getAll
).getAll;
export const createEmployee = new APIClient<Employee, Employee>(
  EmployeeAdminEndpoints.create
).post;
export const getSingleEmployee = new APIClient<Employee, Employee>(
  EmployeeAdminEndpoints.get
).get;
export const updateEmployee = new APIClient<Partial<EmployeeFields>, Employee>(
  EmployeeAdminEndpoints.update
).put;
export const deleteEmployee = new APIClient<string, string>(
  EmployeeAdminEndpoints.delete
).delete;

// Leave
export const getSingleLeave = new APIClient<Leave, Leave>(
  LeaveAdminEndpoints.get
).get;
export const getAllLeave = new APIClient<Leave, Leave>(
  LeaveAdminEndpoints.getAll
).getAll;
export const updateLeave = new APIClient<Partial<LeaveApproveFields>, Leave>(
  LeaveAdminEndpoints.update
).put;

// Auth
export const adminLogin = new APIClient<Login, AdminLogin>(
  AdminAuthEndpoints.login
).post;
export const employeeChangePassword = new APIClient<ChangePassword, AdminLogin>(
  AdminAuthEndpoints.changePassword
).post;
