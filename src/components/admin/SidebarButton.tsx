import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import type { NavigationMenu } from "../../entities/NavigationMenu";
import { Link, useLocation } from "react-router";
import toCamelCase from "../../helpers/convertToCamelCase";

interface SidebarButtonProps {
  menu: NavigationMenu;
}

const SidebarButton = ({ menu }: SidebarButtonProps) => {
  const label = toCamelCase(menu.label);
  const isEmployee = useLocation().pathname.split("/")[1] == "employee";
  const active = useLocation().pathname.split("/")[2] == label;

  const path =
    window.location.origin + `${isEmployee ? "/employee" : "/admin"}/${label}`;

  return (
    <ListItemButton
      component={Link}
      to={path}
      sx={{
        textTransform: "capitalize",
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
