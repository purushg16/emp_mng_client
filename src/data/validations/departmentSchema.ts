import * as Yup from "yup";

export default Yup.object({
  code: Yup.string().length(3).required("Department code is required"),
  name: Yup.string().min(6).required("Department name is required"),
  shortName: Yup.string().min(2).required("Short name is required"),
});
