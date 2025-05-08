import * as Yup from "yup";

export default Yup.object({
  status: Yup.string()
    .oneOf(["approved", "declined"])
    .required("Leave name is required"),
  description: Yup.string().required("Leave description is required"),
});

export const leaveApplySchema = Yup.object({
  from: Yup.date().required("Date of Birth is required"),
  to: Yup.date().required("Date of Birth is required"),
  leaveTypeId: Yup.string().required("Leave description is required"),
  desc: Yup.string().required("Leave description is required"),
});
