import { AppBar, Toolbar, Typography } from "@mui/material";
import AuthMenu from "./AuthMenu";

const Appbar = () => {
  return (
    <AppBar
      position="static"
      color="inherit"
      elevation={0}
      sx={{ borderBottom: "1px solid #eee", py: 2 }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, textTransform: "capitalize" }}
        >
          Employee Management
        </Typography>

        <AuthMenu />
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
