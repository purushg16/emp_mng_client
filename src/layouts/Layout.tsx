import Box from "@mui/material/Box";
import Sidebar from "../components/admin/Sidebar";
import Appbar from "../components/admin/Appbar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          flexGrow: 1,
          overflow: "clip",
        }}
      >
        <Appbar />
        <Box sx={{ p: 3, minHeight: "100%", overflow: "auto", flexGrow: 1 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
