import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
// import { useLocation } from "react-router";

const Appbar = () => {
  // const pathName = useLocation().pathname.split("/")[1];

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

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton>{/* <AccountCircleIcon /> */}</IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
