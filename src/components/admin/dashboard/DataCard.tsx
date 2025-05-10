import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { red, orange, green, cyan, grey } from "@mui/material/colors";

interface Props {
  title: string;
  data: string | number;
  color?: "error" | "info" | "warning" | "gray" | "success";
  actionText?: string;
  onClick?: () => void;
}

const DataCard = ({
  title,
  data,
  actionText,
  onClick,
  color = "gray",
}: Props) => {
  const bg =
    color === "error"
      ? red
      : color === "warning"
      ? orange
      : color === "info"
      ? cyan
      : color === "gray"
      ? grey
      : green;

  return (
    <Stack width={230} gap={3} p={2.5} borderRadius={2} bgcolor={bg[50]}>
      <Stack>
        <Typography color={bg[800]} variant="body2">
          {title}
        </Typography>
      </Stack>
      <Stack gap={1}>
        <Typography variant="h4" fontWeight={500} color={bg[800]}>
          {data}
        </Typography>
        <Box
          fontWeight={400}
          fontSize="13px"
          sx={{ cursor: "pointer" }}
          color={bg[800]}
          onClick={onClick}
        >
          {actionText}
        </Box>
      </Stack>
    </Stack>
  );
};

export default React.memo(DataCard);
