export interface LeaveFields {
  from: Date;
  to: Date;
  desc: string;
}

export type leaveStatus = "approved" | "declined" | "pending";

export interface LeaveApproveFields {
  id: string;
  status: leaveStatus;
  remark: string;
}

export default interface Leave extends LeaveFields, LeaveApproveFields {
  postedAt: Date;
  employeeId: string;
  leaveTypeId: string;
  leaveTypeName: string;
}

export interface AdminLeave extends Leave {
  firstName: string;
  lastName: string;
  desc: string;
}
