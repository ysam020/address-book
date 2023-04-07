import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Sidebar from "./Sidebar";
import Contacts from "./Contacts";

const drawerWidth = 250;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Sidebar />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { lg: `calc(100% - ${drawerWidth}px)` },
          ml: { lg: `${drawerWidth}px` },
          backgroundColor: "rgba(249, 250, 251, 0.3)",
          backdropFilter: "blur(6px) !important",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            display: {
              xs: "flex",
              lg: "none",
            },
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: "none" } }}
          >
            <MenuIcon sx={{ color: "#000" }} />
          </IconButton>
          <h3 style={{ color: "#000", marginLeft: "20px", overflow: "hidden" }}>
            Address Book
          </h3>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 } }}
        aria-label="mailbox folders"
      >
        {/* Drawer mobile */}
        <Drawer
          PaperProps={{
            sx: {
              backgroundColor: "#252e3e",
              backgroundAttachment: "fixed",
              backgroundPosition: "left 0 bottom 0 !important",
              backgroundSize: "250px !important",
              backgroundRepeat: "no-repeat",
              padding: "0 20px",
            },
          }}
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>

        {/* Drawer desktop */}
        <Drawer
          PaperProps={{
            sx: {
              backgroundColor: "#252e3e",
              backgroundAttachment: "fixed",
              backgroundPosition: "left 0 bottom 0 !important",
              backgroundSize: "250px !important",
              backgroundRepeat: "no-repeat",
              padding: "0 20px",
            },
          }}
          variant="permanent"
          sx={{
            display: { xs: "none", lg: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: {
            lg: `calc(100% - ${drawerWidth}px)`,
            backgroundColor: "rgb(249, 250, 251)",
            // height: "100vh",
          },
          // overflow: "scroll",
        }}
      >
        <Contacts />
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
