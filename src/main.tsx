import { ThemeProvider, createTheme } from "@mui/material/styles";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import { CssBaseline } from "@mui/material";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import router from "./router/router.tsx";
import { SnackbarProvider } from "notistack";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <SnackbarProvider>
        <RouterProvider router={router} />
      </SnackbarProvider>
      <CssBaseline />
    </ThemeProvider>
  </StrictMode>
);
