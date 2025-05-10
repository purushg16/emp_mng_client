import { JSX, Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";

const LoadFallback = (
  <Box
    height="100vh"
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    <CircularProgress />
  </Box>
);

export const withSuspense = (
  Component: React.LazyExoticComponent<() => JSX.Element>
) => {
  return (
    <Suspense fallback={LoadFallback}>
      <Component />
    </Suspense>
  );
};
