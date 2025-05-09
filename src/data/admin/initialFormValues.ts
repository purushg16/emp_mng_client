import {
  DepartmentFormValues,
  EmployeeFormValues,
  LeaveApproveFormValues,
} from "../../entities/formValues";
import { LeaveTypeFields } from "../../entities/leaveType";

export const initialEmployeeValues = {
  code: "",
  firstName: "",
  lastName: "",
  gender: "male",
  email: "",
  phone: "",
  country: "",
  password: "",
  confirmPassword: "",
  city: "",
  address: "",
  departmentId: "",
  birthday: new Date(),
} as EmployeeFormValues;

export const initialLeaveTypeValues = {
  type: "",
  description: "",
} as LeaveTypeFields;

export const initialLeaveApproveValues = {
  status: "approved",
  description: "",
} as LeaveApproveFormValues;

export const initialDepartmentValues = {
  code: "",
  name: "",
  shortName: "",
} as DepartmentFormValues;
