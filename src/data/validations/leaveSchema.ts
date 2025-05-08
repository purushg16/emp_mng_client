import * as Yup from "yup";

export default Yup.object({
  status: Yup.string()
    .oneOf(["approved", "declined"])
    .required("Leave name is required"),
  description: Yup.string().required("Leave description is required"),
});
