import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import type { AdminMenu } from "../../data/admin/adminMenus";
import { Link } from "react-router";
import toCamelCase from "../../helpers/convertToCamelCase";

interface SidebarButtonProps {
  menu: AdminMenu;
  active?: boolean;
  onClick?: () => void;
}

const SidebarButton = ({
  menu,
  active = false,
  onClick,
}: SidebarButtonProps) => {
  return (
    <ListItemButton
      component={Link}
      to={toCamelCase(menu.label)}
      onClick={onClick}
      sx={{
        backgroundColor: active ? "#f0f0f0" : "transparent",
        "&:hover": { backgroundColor: "#f5f5f5" },
        borderLeft: "2px solid",
        borderLeftColor: active ? "#000" : "transparent",
      }}
    >
      <ListItemIcon sx={{ color: active ? "#000" : "#888", minWidth: 36 }}>
        {active ? menu.activeIcon : menu.icon}
      </ListItemIcon>
      <ListItemText
        primary={menu.label}
        slotProps={{
          primary: {
            fontWeight: active ? "600" : "400",
            color: active ? "#000" : "#666",
          },
        }}
      />
    </ListItemButton>
  );
};

export default SidebarButton;
