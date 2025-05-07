export type DepartmentFormValues = {
  code: string;
  name: string;
  shortName: string;
};

export type LeaveTypeFormValues = {
  name: string;
  description: string;
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
