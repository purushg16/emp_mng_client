import { employeeStatus } from "./employee";

export type LeaveApproveFormValues = {
  status: "approved" | "declined";
  description?: string;
};

export type ApplyLeaveFormValues = {
  from: Date;
  to: Date;
  leaveTypeId: string;
  desc: string;
};

export type EmployeeProfileFormValues = {
  code: string;
  firstName: string;
  lastName: string;
  gender: "male" | "female" | "others";
  email: string;
  mobile: string;
  country: string;
  password: string;
  status: employeeStatus;
  confirmPassword: string;
  city: string;
  address: string;
  departmentId: string;
  birthday: Date;
};
