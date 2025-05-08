export interface LeaveFields {
  from: Date;
  to: Date;
  desc: string;
}

export interface LeaveApproveFields {
  id: string;
  status: "approved" | "declined" | "pending";
  remark: string;
}

export default interface Leave extends LeaveFields, LeaveApproveFields {
  postedAt: string;
  employeeId: string;
  leaveTypeId: string;
}
