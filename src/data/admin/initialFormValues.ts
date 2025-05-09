import { DepartmentFields } from "../../entities/department";
import { EmployeeFields } from "../../entities/employee";
import { LeaveApproveFields } from "../../entities/leave";
import { LeaveTypeFields } from "../../entities/leaveType";

export const initialEmployeeValues = {
  code: "",
  firstName: "",
  lastName: "",
  gender: "male",
  email: "",
  mobile: "",
  country: "",
  password: "",
  confirmPassword: "",
  city: "",
  address: "",
  departmentId: "",
  birthday: new Date(),
} as EmployeeFields;

export const initialLeaveTypeValues = {
  type: "",
  description: "",
} as LeaveTypeFields;

export const initialLeaveApproveValues = {
  status: "approved",
  remark: "",
} as LeaveApproveFields;

export const initialDepartmentValues = {
  code: "",
  name: "",
  shortName: "",
} as DepartmentFields;
