import { useState } from "react";
import Button from "@mui/material/Button";
import DepartmentForm from "./DeptForm";
import FormDialog from "../FormDialog";
import { Department, DepartmentFields } from "../../../entities/department";
import {
  useCreateDepartment,
  useEditDepartment,
} from "../../../hooks/admin/useDepartment";

interface Props {
  action: "add" | "edit";
  data?: Department;
}

const DeptActionModal = ({ action, data }: Props) => {
  const editMode = action === "edit";
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { mutate: add, isPending: isAdding } = useCreateDepartment(handleClose);
  const { mutate: edit, isPending: isEditing } = useEditDepartment(
    data?.id.toString(),
    handleClose
  );

  const handleSubmit = (values: DepartmentFields) => {
    if (editMode) {
      edit({
        code: values.code,
        name: values.name,
        shortName: values.shortName,
      });
    } else {
      add(values);
    }
  };

  return (
    <>
      <Button
        variant={editMode ? "text" : "contained"}
        onClick={handleClickOpen}
      >
        {editMode ? "Edit" : "New Department"}
      </Button>
      <FormDialog
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        title="Department"
        description='Enter the valid details and click on "Create" to create a new department with given details.'
      >
        <DepartmentForm
          onClose={handleClose}
          onSubmit={handleSubmit}
          initialValues={data}
          loading={isAdding || isEditing}
          isEditing={editMode}
        />
      </FormDialog>
    </>
  );
};

export default DeptActionModal;
