export interface DashboardStats {
  totalEmployees: number;
  activeEmployees: number;
  newEmployees: number;
  totalDepartments: number;
  totalLeaves: number;
  pendingLeaves: number;
  approvedLeaves: number;
  rejectedLeaves: number;
  employeesOnLeaveToday: number;
  approvedLeaveDates: string[];
}
