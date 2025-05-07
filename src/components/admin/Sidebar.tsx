import { Box, Drawer, List, Toolbar } from "@mui/material";
import { useState } from "react";
import SidebarButton from "./SidebarButton";
import { adminMenus } from "../../data/admin/adminMenus";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState<string>("Department");

  return (
    <Drawer
      variant="permanent"
      sx={{
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
          {adminMenus.map((menu) => (
            <SidebarButton
              key={menu.label}
              menu={menu}
              active={activeTab === menu.label}
              onClick={() => setActiveTab(menu.label)}
            />
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
