import { Box, Container } from "@mui/material";
import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, paddingTop: 2, paddingBottom: 2 }}>
        <Container maxWidth="lg">{children}</Container>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Layout;
