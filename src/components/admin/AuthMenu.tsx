import { Button, Menu } from "@mui/material";
import React from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import ChangePasswordModal from "../auth/ChangePasswordModal";
import LogoutBtn from "../auth/LogoutBtn";

const AuthMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="menu-button"
        aria-controls={open ? "menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="outlined"
        size="large"
        startIcon={<RiAccountCircleFill />}
      >
        Profile
      </Button>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
      >
        <ChangePasswordModal />
        <LogoutBtn />
      </Menu>
    </div>
  );
};

export default AuthMenu;
