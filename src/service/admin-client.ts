import APIClient from "./api-client";
import {
  DeleteDepartment,
  Department,
  DepartmentFields,
} from "../entities/department";
import {
  AdminAuthEndpoints,
  departmentAdminEndpoints,
  EmployeeAdminEndpoints,
  LeaveAdminEndpoints,
  leaveTypeAdminEndpoints,
} from "./admin-endpoints";
import {
  DeleteLeaveType,
  LeaveType,
  LeaveTypeFields,
} from "../entities/leaveType";
import Leave, { LeaveApproveFields } from "../entities/leave";
import Employee, { DeleteEmployee, EmployeeFields } from "../entities/employee";
import Login, { ChangePassword } from "../entities/credentials";

// Department
export const getAllDepartments = new APIClient<Department>(
  departmentAdminEndpoints.getAll
).getAll;
export const createDepartment = new APIClient<DepartmentFields>(
  departmentAdminEndpoints.create
).post;
export const getSingleDepartment = new APIClient<Department>(
  departmentAdminEndpoints.get
).get;
export const updateDepartment = new APIClient<Partial<DepartmentFields>>(
  departmentAdminEndpoints.update
).put;
export const deleteDepartment = new APIClient<DeleteDepartment>(
  departmentAdminEndpoints.delete
).delete;

// Leave Type
export const getAllLeaveType = new APIClient<LeaveType>(
  leaveTypeAdminEndpoints.getAll
).getAll;
export const createLeaveType = new APIClient<LeaveTypeFields>(
  leaveTypeAdminEndpoints.create
).post;
export const getSingleLeaveType = new APIClient<LeaveType>(
  leaveTypeAdminEndpoints.get
).get;
export const updateLeaveType = new APIClient<Partial<LeaveTypeFields>>(
  leaveTypeAdminEndpoints.update
).put;
export const deleteLeaveType = new APIClient<DeleteLeaveType>(
  leaveTypeAdminEndpoints.delete
).delete;

// Employee
export const getAllEmployee = new APIClient<Employee>(
  EmployeeAdminEndpoints.getAll
).getAll;
export const createEmployee = new APIClient<EmployeeFields>(
  EmployeeAdminEndpoints.create
).post;
export const getSingleEmployee = new APIClient<Employee>(
  EmployeeAdminEndpoints.get
).get;
export const updateEmployee = new APIClient<Partial<Employee>>(
  EmployeeAdminEndpoints.update
).put;
export const deleteEmployee = new APIClient<DeleteEmployee>(
  EmployeeAdminEndpoints.delete
).delete;

// Leave
export const getSingleLeave = new APIClient<Leave>(LeaveAdminEndpoints.get).get;
export const getAllLeave = new APIClient<Leave>(LeaveAdminEndpoints.getAll)
  .getAll;
export const updateLeave = new APIClient<LeaveApproveFields>(
  LeaveAdminEndpoints.update
).put;

// Auth
export const adminLogin = new APIClient<Login>(AdminAuthEndpoints.login).post;
export const employeeChangePassword = new APIClient<ChangePassword>(
  AdminAuthEndpoints.changePassword
).post;
