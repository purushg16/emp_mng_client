import { Button } from "@mui/material";
import EmployeeForm from "../../components/admin/employee/EmployeeForm";
import PageWrapper from "../../layouts/PageWrapper";
import { useState } from "react";
import { EmployeeProfileFormValues } from "../../entities/formValues";

const ProfilePage = () => {
  const [editMode, setEditMode] = useState<boolean>(false);

  const handleExit = () => {
    setEditMode(false);
  };

  const handleSubmit = (value: EmployeeProfileFormValues) => {
    console.log(value);
  };

  return (
    <PageWrapper title="Profile">
      <EmployeeForm
        onClose={handleExit}
        onSubmit={handleSubmit}
        action="edit"
        isEmployee
        preview={!editMode}
      />

      {!editMode && (
        <Button
          variant="contained"
          onClick={() => setEditMode(!editMode)}
          sx={{ width: "max-content", mx: "auto" }}
        >
          Edit Profile
        </Button>
      )}
    </PageWrapper>
  );
};

export default ProfilePage;
