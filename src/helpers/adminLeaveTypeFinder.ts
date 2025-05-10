import Leave, { AdminLeave } from "../entities/leave";

const isAdminLeave = (item: AdminLeave | Leave): item is AdminLeave => {
  return "firstName" in item && "lastName" in item && "leaveTypeName" in item;
};

export default isAdminLeave;
