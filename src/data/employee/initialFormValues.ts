import { ApplyLeaveFormValues } from "../../entities/formValues";

const from = new Date();
const to = new Date(from);
to.setDate(to.getDate() + 1);

export const initialLeaveFormValues: ApplyLeaveFormValues = {
  from,
  to,
  desc: "",
  leaveTypeId: "",
};
