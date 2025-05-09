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
import { QueryClientProvider } from "@tanstack/react-query";
import client from "./router/queryClient.ts";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <Provider store={store}>
        <SnackbarProvider
          autoHideDuration={5000}
          anchorOrigin={{ horizontal: "center", vertical: "top" }}
        >
          <QueryClientProvider client={client}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </SnackbarProvider>
        <CssBaseline />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
