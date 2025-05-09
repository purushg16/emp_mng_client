import Button from "@mui/material/Button";
import React, { useState } from "react";
import FormDialog from "../FormDialog";
import LeaveApproveForm from "./LeaveApproveForm";
import { AdminLeave, LeaveApproveFields } from "../../../entities/leave";
import { format } from "date-fns";
import { Alert, Stack, Typography } from "@mui/material";
import { useUpdateLeave } from "../../../hooks/admin/useLeave";

interface Props {
  leave: AdminLeave;
}

const LeaveActionModal = ({ leave }: Props) => {
  const [open, setOpen] = useState(false);
  const approved = leave.status === "approved";
  const declined = leave.status === "declined";
  const inactive = !(approved || declined);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { mutate, isPending } = useUpdateLeave(leave.id, handleClose);
  const handleSubmit = (value: LeaveApproveFields) => {
    if (inactive) mutate(value);
  };

  return (
    <React.Fragment>
      {!inactive && (
        <Alert
          onClick={handleClickOpen}
          severity={approved ? "success" : "error"}
          sx={{ py: 0, px: 1.5 }}
        >
          {approved ? "Approved" : "Declined"}
        </Alert>
      )}

      {inactive && (
        <Button variant="contained" onClick={handleClickOpen} disableElevation>
          Take Action
        </Button>
      )}

      <FormDialog
        tag=""
        maxWidth="xl"
        open={open}
        onClose={handleClose}
        title={leave.firstName + " " + leave.lastName}
        description={leave.desc}
      >
        <Stack direction="row" width="100%" gap={4} mb={2}>
          <Stack>
            <Typography color="gray">From:</Typography>
            {format(leave.from, "dd/MM/yy")}
          </Stack>
          <Stack>
            <Typography color="gray">To:</Typography>
            {format(leave.to, "dd/MM/yy")}
          </Stack>
        </Stack>
        <LeaveApproveForm
          onClose={handleClose}
          onSubmit={handleSubmit}
          loading={isPending}
          preview={!inactive}
          initialValues={leave}
        />
      </FormDialog>
    </React.Fragment>
  );
};

export default LeaveActionModal;
