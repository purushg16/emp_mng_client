import {
  DepartmentFormValues,
  EmployeeFormValues,
  LeaveTypeFormValues,
} from "../../entities/formValues";

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
  name: "",
  description: "",
} as LeaveTypeFormValues;

export const initialDepartmentValues = {
  code: "",
  name: "",
  shortName: "",
} as DepartmentFormValues;
