import React from "react";
import { AppBar, Badge, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import { publicRoutes } from "@/routes/config/publicRoutes";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        color: "#000",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h6"
          className="logo"
          sx={{
            fontWeight: "bold",
            marginRight: "20px",
            fontFamily: '"Pacifico", cursive',
            color: "var(--primary-color)",
          }}
        >
          7skincare
        </Typography>

        <Box
          className="nav"
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {publicRoutes.map(route => {
            const isActive = location.pathname === route.path;
            return (
              <Button
                key={route.path}
                color="inherit"
                href={route.path}
                sx={{
                  color: isActive ? "var(--primary-color)" : "inherit",
                  fontWeight: isActive ? "bold" : "normal",
                  "&:hover": {
                    color: "var(--primary-color)",
                  },
                }}
              >
                {route.name}
              </Button>
            );
          })}
        </Box>

        <Box
          className="actions"
          sx={{
            display: "flex",
            gap: "10px",
          }}
        >
          <IconButton color="inherit" href="/cart">
            <Badge badgeContent={1} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit" href="/login">
            <LoginIcon sx={{ color: "var(--primary-color)" }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
