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
import Leave, { LeaveApproveFields, LeaveFields } from "../entities/leave";
import Employee, { DeleteEmployee, EmployeeFields } from "../entities/employee";
import Login, { ChangePassword } from "../entities/credentials";

// Department
export const getAllDepartments = new APIClient<Department>(
  departmentAdminEndpoints.getAll
).getAll;
export const createDepartment = new APIClient<DepartmentFields>(
  departmentAdminEndpoints.create
).post;
export const getSingleDepartment = (id: string) =>
  new APIClient<Department>(departmentAdminEndpoints.get(id)).get();
export const updateDepartment = (id: string) =>
  new APIClient<Partial<DepartmentFields>>(departmentAdminEndpoints.update(id))
    .put;
export const deleteDepartment = (id: string) =>
  new APIClient<DeleteDepartment>(departmentAdminEndpoints.delete(id)).delete;

// Leave Type
export const getAllLeaveType = new APIClient<LeaveType>(
  leaveTypeAdminEndpoints.getAll
).getAll;
export const createLeaveType = new APIClient<LeaveFields>(
  leaveTypeAdminEndpoints.create
).post;
export const getSingleLeaveType = (id: string) =>
  new APIClient<LeaveType>(leaveTypeAdminEndpoints.get(id)).get();
export const updateLeaveType = (id: string) =>
  new APIClient<Partial<LeaveTypeFields>>(leaveTypeAdminEndpoints.update(id))
    .put;
export const deleteLeaveType = (id: string) =>
  new APIClient<DeleteLeaveType>(leaveTypeAdminEndpoints.delete(id)).delete;

// Employee
export const getAllEmployee = new APIClient<Employee>(
  EmployeeAdminEndpoints.getAll
).getAll;
export const createEmployee = new APIClient<EmployeeFields>(
  EmployeeAdminEndpoints.create
).post;
export const getSingleEmployee = (id: string) =>
  new APIClient<Employee>(EmployeeAdminEndpoints.get(id)).get();
export const updateEmployee = (id: string) =>
  new APIClient<Partial<Employee>>(EmployeeAdminEndpoints.update(id)).put;
export const deleteEmployee = (id: string) =>
  new APIClient<DeleteEmployee>(EmployeeAdminEndpoints.delete(id)).delete;

// Leave
export const getSingleLeave = (id: string) =>
  new APIClient<Leave>(LeaveAdminEndpoints.get(id)).get();
export const getAllLeave = new APIClient<Leave>(LeaveAdminEndpoints.getAll)
  .getAll;
export const updateLeave = (id: string) =>
  new APIClient<LeaveApproveFields>(LeaveAdminEndpoints.update(id)).put;

// Auth
export const employeeLogin = new APIClient<Login>(AdminAuthEndpoints.login)
  .post;
export const employeeChangePassword = new APIClient<ChangePassword>(
  AdminAuthEndpoints.changePassword
).post;
