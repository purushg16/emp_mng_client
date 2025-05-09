import gender from "./gender";

export type employeeStatus = "active" | "inactive";

export interface EmployeeFields {
  code: string;
  firstName: string;
  lastName: string;
  gender: gender;
  email: string;
  mobile: string;
  status: employeeStatus;
  country: string;
  password: string;
  confirmPassword: string;
  city: string;
  address: string;
  departmentId: string;
  birthday: Date;
}

export interface DeleteEmployee {
  id: string;
}

export default interface Employee extends EmployeeFields {
  id: string;
  createdAt: Date;
}
