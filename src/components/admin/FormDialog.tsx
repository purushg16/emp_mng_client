import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  type Breakpoint,
} from "@mui/material";
import type { ReactNode } from "react";

type FormDialogProps = {
  title: string;
  description: string;
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  tag?: string;
  maxWidth?: Breakpoint;
};

const FormDialog = ({
  title,
  description,
  open,
  onClose,
  tag = "New",
  children,
  maxWidth = "xs",
}: FormDialogProps) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth={maxWidth}>
      <DialogTitle>
        {tag} {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ fontSize: "14px", mb: 4 }}>
          {description}
        </DialogContentText>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default FormDialog;
