import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";

interface Props {
  title: string;
  actions?: ReactNode;
  children?: ReactNode;
}

const PageWrapper = ({ title, actions, children }: Props) => {
  return (
    <Stack gap={4}>
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <Typography textTransform="capitalize"> Manage {title} </Typography>
        {actions && actions}
      </Stack>
      {children}
    </Stack>
  );
};

export default PageWrapper;
