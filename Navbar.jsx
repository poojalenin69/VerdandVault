import React from "react";
import { AppBar, Typography, Toolbar, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleSettings = () => {
    const userLoggedIn = false; // Replace with actual login logic
    if (userLoggedIn) {
      navigate("/settings"); // Navigate to settings if logged in
    } else {
      navigate("/login"); // Redirect to login if not logged in
    }
  };

  const buttonStyle = {
    marginRight: "20px",
    fontSize: "1.2rem",
    fontWeight: "700",
    padding: "0.5rem 1rem",
    textTransform: "none",
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#000080", padding: "0.5rem" }}>
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://dynamic.brandcrowd.com/asset/logo/02caffab-2edb-4caf-a328-72a4ec8e8a7b/logo-search-grid-1x?logoTemplateVersion=1&v=638136903066100000&text=dogs+&colorpalette=grayscale"
            style={{ height: "100px", marginRight: "1px" }}
          />
        </Box>

        <Typography
          variant="h4"
          sx={{
            flexGrow: 90,
            fontFamily: "'Courier new', Monospace",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          VerdantVault
        </Typography>

        <Box>
          <Button component="a" href="/login" style={buttonStyle} color="success" variant="contained">
            Login
          </Button>
          <Button component="a" href="/signup" style={buttonStyle} color="success" variant="contained">
            Signup
          </Button>
          <Button onClick={handleSettings} style={buttonStyle} color="success" variant="contained">
            Settings
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
