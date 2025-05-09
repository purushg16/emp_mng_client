import { LeaveType } from "../../entities/leaveType";

export default [
  {
    id: "1",
    type: "Causal Leave",
    description: "This is a causal leave test entry",
    createdAt: new Date("2025-05-05T09:20:39.000Z"),
  },
  {
    id: "3",
    type: "Medical Leave",
    description: "This is a medical leave updated test entry.",
    createdAt: new Date("2025-05-06T03:35:11.000Z"),
  },
] as LeaveType[];
