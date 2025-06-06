import { Button } from "@mui/material";
import EmployeeForm from "../../components/admin/employee/EmployeeForm";
import PageWrapper from "../../layouts/PageWrapper";
import { useState } from "react";
import { EmployeeProfileFormValues } from "../../entities/formValues";
import {
  useEmployeeEditProfile,
  useGetEmployeeProfile,
} from "../../hooks/employee/useAuth";
import AdviseChangePasswordDialog from "../../components/employee/AdviseChangePasswordDialog";

const ProfilePage = () => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const { data, status, fetchStatus } = useGetEmployeeProfile();

  const handleExit = () => {
    setEditMode(false);
  };

  const { mutate, isPending } = useEmployeeEditProfile(handleExit);

  const handleSubmit = (value: EmployeeProfileFormValues) => {
    mutate(value);
  };

  return (
    <PageWrapper title="Profile">
      {status === "success" && fetchStatus === "idle" && (
        <EmployeeForm
          onClose={handleExit}
          onSubmit={handleSubmit}
          action="edit"
          isEmployee
          initialValues={data.data[0]}
          preview={!editMode}
        />
      )}

      {!editMode && (
        <Button
          variant="contained"
          onClick={() => setEditMode(!editMode)}
          sx={{ width: "max-content", mx: "auto" }}
          loading={isPending}
        >
          Edit Profile
        </Button>
      )}
      {status === "success" && (
        <AdviseChangePasswordDialog loginCount={data.data[0].lastLogin} />
      )}
    </PageWrapper>
  );
};

export default ProfilePage;
