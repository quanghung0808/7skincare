import React from "react";
import { AppBar, Badge, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";

const Header = () => {
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
            color: theme => theme.palette.primary.main,
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
          <Button color="inherit" href="/trang-chu">
            Trang Chủ
          </Button>
          <Button color="inherit" href="/gioi-thieu">
            Giới Thiệu
          </Button>
          <Button color="inherit" href="/khao-sat-da">
            Khảo sát da
          </Button>
          <Button color="inherit" href="/san-pham">
            Sản Phẩm
          </Button>
          <Button color="inherit" href="/blog">
            Blog
          </Button>
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
            <LoginIcon sx={{ color: theme => theme.palette.primary.main }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
