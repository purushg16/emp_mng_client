import APIClient from "./api-client";
import {
  EmployeeAuthEndpoints,
  LeaveEmployeeEndpoints,
  leaveTypeEmployeeEndpoints,
  ProfileEmployeeEndpoints,
} from "./employee-endpoints";
import Employee, {
  EmployeeFields,
  EmployeeProfile,
} from "../entities/employee";
import { LeaveType } from "../entities/leaveType";
import Leave, { LeaveFields } from "../entities/leave";
import Login, { ChangePassword } from "../entities/credentials";
import { EmployeeLogin } from "../entities/auth";

// Profile
export const getProfile = new APIClient<EmployeeProfile>(
  ProfileEmployeeEndpoints.get
).get;
export const editProfile = new APIClient<Partial<EmployeeFields>, Employee>(
  ProfileEmployeeEndpoints.update
).put;

// Leave Type
export const getAllLeaveType = new APIClient<LeaveType>(
  leaveTypeEmployeeEndpoints.getAll
).getAll;

// Leave
export const getAllLeave = new APIClient<Leave>(LeaveEmployeeEndpoints.getAll)
  .getAll;
export const requestLeave = new APIClient<LeaveFields, Leave>(
  LeaveEmployeeEndpoints.post
).post;
export const getSingleLeave = new APIClient<Leave>(LeaveEmployeeEndpoints.get)
  .get;

// Auth
export const employeeLogin = new APIClient<Login, EmployeeLogin>(
  EmployeeAuthEndpoints.login
).post;
export const employeeChangePassword = new APIClient<
  ChangePassword,
  EmployeeLogin
>(EmployeeAuthEndpoints.changePassword).put;
