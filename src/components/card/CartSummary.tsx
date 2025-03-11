import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";

interface CartSummaryProps {
  items: { price: number; quantity: number }[];
}

const CartSummary: React.FC<CartSummaryProps> = ({ items }) => {
  const theme = useTheme();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Box sx={{ p: 2, border: `1px solid ${theme.palette.divider}` }}>
      <Typography variant="h6" gutterBottom>
        Tổng giỏ hàng
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="body1">Tạm tính</Typography>
        <Typography variant="body1">{total.toLocaleString()}₫</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="body1">Giao hàng</Typography>
        <Typography variant="body1"> Thành phố Hồ Chí Minh</Typography>
      </Box>
      <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
        Phí vận chuyển sẽ báo sau.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="body1">Total</Typography>
        <Typography variant="body1">{total.toLocaleString()}₫</Typography>
      </Box>
      <Button variant="contained" color="primary" fullWidth>
        Thanh toán
      </Button>
    </Box>
  );
};

export default CartSummary;
