export interface LeaveTypeFields {
  type: string;
  description: string;
}

export interface LeaveType {
  id: string;
  type: string;
  description: string;
  createdAt: Date;
}

export interface DeleteLeaveType {
  id: string;
}
