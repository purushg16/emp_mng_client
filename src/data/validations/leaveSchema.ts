import * as Yup from "yup";
import { startOfToday } from "date-fns";

export default Yup.object({
  status: Yup.string()
    .oneOf(["approved", "declined"])
    .required("Leave name is required"),
  description: Yup.string().required("Leave description is required"),
});

export const leaveApplySchema = Yup.object({
  from: Yup.date()
    .required("Start date is required")
    .min(startOfToday(), "Start date cannot be in the past"),
  to: Yup.date()
    .required("End date is required")
    .min(Yup.ref("from"), "End date cannot be before start date"),
  leaveTypeId: Yup.string().required("Leave description is required"),
  desc: Yup.string().required("Leave description is required"),
});
