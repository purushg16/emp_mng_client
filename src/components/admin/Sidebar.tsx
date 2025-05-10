import { Box, Drawer, List, Toolbar } from "@mui/material";
import SidebarButton from "./SidebarButton";
import { adminMenus } from "../../data/admin/adminMenus";
import { useLocation } from "react-router";
import { employeeMenus } from "../../data/admin/employeeMenus";

const Sidebar = () => {
  const isEmployee = useLocation().pathname.split("/")[1] === "employee";

  return (
    <Drawer
      variant="permanent"
      sx={{
        display: "flex",
        width: 220,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "inherit",
          boxSizing: "border-box",
          borderRight: "1px solid #eee",
        },
      }}
    >
      <Toolbar />
      <Toolbar />
      <Box sx={{ mt: 2 }}>
        <List>
          {!isEmployee &&
            adminMenus.map((menu) => (
              <SidebarButton key={menu.label} menu={menu} />
            ))}

          {isEmployee &&
            employeeMenus.map((menu) => (
              <SidebarButton key={menu.label} menu={menu} />
            ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
