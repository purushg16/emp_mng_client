import Button from "@mui/material/Button";
import { useState } from "react";
import FormDialog from "../FormDialog";
import NewEmployeeModal from "./EmployeeForm";
import Employee, { EmployeeFields } from "../../../entities/employee";
import {
  useCreateEmployee,
  useEditEmployee,
} from "../../../hooks/admin/useEmployee";

interface Props {
  action: "add" | "edit";
  data?: Employee;
}

const EmployeeActionModal = ({ action, data }: Props) => {
  const editMode = action === "edit";
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { mutate: add, isPending: isAdding } = useCreateEmployee(handleClose);
  const { mutate: edit, isPending: isEditing } = useEditEmployee(
    data?.id,
    handleClose
  );

  const handleSubmit = (values: EmployeeFields) => {
    if (editMode) {
      edit(values);
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
        {editMode ? "Edit" : "New Employee"}
      </Button>
      <FormDialog
        open={open}
        maxWidth="md"
        onClose={handleClose}
        title="Employee"
        description={`Enter the valid details and click on "${action.toUpperCase()}" to create a new Employee with the given details`}
      >
        <NewEmployeeModal
          action={action}
          onClose={handleClose}
          onSubmit={handleSubmit}
          loading={isAdding || isEditing}
          initialValues={data}
        />
      </FormDialog>
    </>
  );
};

export default EmployeeActionModal;
