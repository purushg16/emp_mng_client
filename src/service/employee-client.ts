import APIClient from "./api-client";
import {
  EmployeeAuthEndpoints,
  LeaveEmployeeEndpoints,
  leaveTypeEmployeeEndpoints,
  ProfileEmployeeEndpoints,
} from "./employee-endpoints";
import Employee, { EmployeeFields } from "../entities/employee";
import { LeaveType } from "../entities/leaveType";
import Leave, { LeaveFields } from "../entities/leave";
import Login, { ChangePassword } from "../entities/credentials";

// Profile
export const getProfile = new APIClient<Employee>(ProfileEmployeeEndpoints.get)
  .get;
export const editProfile = new APIClient<EmployeeFields>(
  ProfileEmployeeEndpoints.update
).put;

// Leave Type
export const getAllLeaveType = new APIClient<LeaveType>(
  leaveTypeEmployeeEndpoints.getAll
).getAll;

// Leave
export const getAllLeave = new APIClient<Leave>(LeaveEmployeeEndpoints.getAll)
  .getAll;
export const requestLeave = new APIClient<LeaveFields>(
  LeaveEmployeeEndpoints.post
).post;
export const getLeave = (id: string) =>
  new APIClient<Leave>(LeaveEmployeeEndpoints.get(id)).get;

// Auth
export const employeeLogin = new APIClient<Login>(EmployeeAuthEndpoints.login)
  .post;
export const employeeChangePassword = new APIClient<ChangePassword>(
  EmployeeAuthEndpoints.changePassword
).post;
