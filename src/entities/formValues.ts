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

export type EmployeeFormValues = {
  code: string;
  firstName: string;
  lastName: string;
  gender: "male" | "female" | "others";
  email: string;
  phone: string;
  country: string;
  password: string;
  confirmPassword: string;
  city: string;
  address: string;
  departmentId: string;
  birthday: Date | null;
};

export type EmployeeProfileFormValues = {
  code: string;
  firstName: string;
  lastName: string;
  gender: "male" | "female" | "others";
  email: string;
  phone: string;
  country: string;
  password: string;
  confirmPassword: string;
  city: string;
  address: string;
  departmentId: string;
  birthday: Date | null;
};
