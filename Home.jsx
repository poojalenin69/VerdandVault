import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Button,
  Grid,
  AppBar,
  Toolbar,
  Box,
} from "@mui/material";
import "./Home.css";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#FFFDD0", // Light gray background color
        minHeight: "200vh", // Ensure the background covers the entire page
      }}
    >
      {/* AppBar */}
      <AppBar position="static" sx={{ backgroundColor: "White" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "#000080" }}>
            EcoFriendly Hub
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "50vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518081653050-1112ed6e1e1f')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 4,
        }}
      >
        <Typography variant="h3" gutterBottom>
          Welcome to EcoFriendly Hub
        </Typography>
        <Typography variant="h6" gutterBottom>
          Your go-to destination for sustainable and eco-conscious products.
        </Typography>
        <Button
          variant="contained"
          color="success"
          size="large"
          onClick={() => handleNavigate("/Signup")}
          sx={{ mt: 3 }}
        >
          Join Us Today
        </Button>
      </Box>

      {/* Promotional Banners */}
      <Container sx={{ mt: 6 }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Special Offers
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {/* Banner 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1596392027653-4c96cb7d906b')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "200px",
                borderRadius: "8px",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: 2,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                20% Off on Skincare Products
              </Typography>
            </Box>
          </Grid>
          {/* Banner 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1611944219268-4d949b643f37')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "200px",
                borderRadius: "8px",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: 2,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                New Arrivals: Eco-Friendly Clothing
              </Typography>
            </Box>
          </Grid>
          {/* Banner 3 */}
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1584467747668-5a2461bda6e1')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "200px",
                borderRadius: "8px",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: 2,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                Up to 30% Off on Kitchen Essentials
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Product Categories */}
      <Container sx={{ mt: 6 }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Explore Our Categories
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {/* Category 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Button
              variant="contained"
              onClick={() => handleNavigate("/category/kitchen")}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                height: "200px",
                width: "100%",
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1598515210731-f1e5f63f91d6')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "white",
              }}
            >
              <Typography variant="h5" gutterBottom>
                Kitchen
              </Typography>
              <Typography variant="body2">
                Sustainable kitchenware and essentials.
              </Typography>
            </Button>
          </Grid>
          {/* Category 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <Button
              variant="contained"
              onClick={() => handleNavigate("/category/skincare")}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                height: "200px",
                width: "100%",
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1522337660859-02fbefca4702')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "white",
              }}
            >
              <Typography variant="h5" gutterBottom>
                Skincare
              </Typography>
              <Typography variant="body2">
                Eco-friendly skincare products for your routine.
              </Typography>
            </Button>
          </Grid>
          {/* Category 3 */}
          <Grid item xs={12} sm={6} md={4}>
            <Button
              variant="contained"
              onClick={() => handleNavigate("/category/clothing")}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                height: "200px",
                width: "100%",
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1552345386-185baed30c96')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "white",
              }}
            >
              <Typography variant="h5" gutterBottom>
                Clothing
              </Typography>
              <Typography variant="body2">
                Comfortable and stylish eco-friendly clothing.
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Box
        sx={{
          mt: 6,
          py: 4,
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} EcoFriendly Hub. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
