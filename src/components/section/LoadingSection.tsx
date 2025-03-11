import React from "react";
import { Box, CircularProgress } from "@mui/material";

const LoadingSection: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{ marginBottom: "10px", alignItems: "center", height: "50vh" }}
    >
      <CircularProgress />
    </Box>
  );
};

export default LoadingSection;
