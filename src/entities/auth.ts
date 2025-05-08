import Employee from "./employee";

export interface AdminLogin {
  token: string;
  firstLogin: boolean;
}

export interface EmployeeLogin {
  token: string;
  employee: Employee;
  loginCount: number;
}
