import * as Yup from "yup";

export default Yup.object({
  type: Yup.string().min(2).required("Leave type name is required"),
  description: Yup.string().required("Leave type description is required"),
});
