import { useState } from "react";
import {
  Button,
  Box,
  Typography,
  Divider,
  IconButton,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import { MdDelete } from "react-icons/md";

interface Props {
  onDelete: () => void;
  loading?: boolean;
  size?: "small" | "medium" | "large";
  buttonVariant?: "icon" | "text" | "contained" | "outlined";
  title?: string;
  message?: string;
  disabled?: boolean;
  loadingText?: string;
  tooltip?: string;
}

const DeleteButton = ({
  onDelete,
  size = "small",
  loading = false,
  buttonVariant = "icon",
  title = "Confirm Deletion",
  message = "Are you sure you want to delete this item? This action cannot be undone.",
  disabled = false,
  loadingText = "Deleting...",
  tooltip = "Delete",
}: Props) => {
  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    onDelete();
    setOpen(false);
  };

  return (
    <>
      {buttonVariant === "icon" ? (
        <Tooltip title={tooltip}>
          <span>
            <IconButton
              size={size}
              onClick={() => setOpen(true)}
              disabled={disabled || loading}
              color="error"
            >
              <MdDelete />
            </IconButton>
          </span>
        </Tooltip>
      ) : (
        <Button
          variant={buttonVariant}
          color="error"
          size={size}
          startIcon={<MdDelete size={18} />}
          onClick={() => setOpen(true)}
          disabled={disabled || loading}
        >
          {tooltip}
        </Button>
      )}

      <Dialog maxWidth="md" open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{title}</DialogTitle>
        <Divider />

        <Box px={4} pt={0} pb={4} display="flex" flexDirection="column" gap={2}>
          <Typography variant="h6" color="error" fontWeight={600}></Typography>
          <Typography variant="body2">{message}</Typography>
        </Box>
        <DialogActions>
          <Button onClick={() => setOpen(false)} disabled={loading}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={handleConfirm}
            disabled={loading}
          >
            {loading ? loadingText : "Delete"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteButton;
