import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import useCartStore from "@/hooks/useCart";
import EmptyCart from "@/components/empty/EmptyCart";
import CartItem from "@/components/card/CartItem";
import CartSummary from "@/components/card/CartSummary";

const Cart = () => {
  const { items, removeItem, updateItem, clearCart } = useCartStore();

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Giỏ hàng
      </Typography>
      {items.length === 0 ? (
        <EmptyCart />
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            {items.map(item => (
              <CartItem
                key={item.id}
                item={item}
                onQuantityChange={(id, quantity) => updateItem(id, { quantity })}
                onRemove={removeItem}
              />
            ))}
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", flexDirection: "row", mt: 2, gap: 2 }}>
                <TextField label="Mã giảm giá" variant="outlined" />
                <Button variant="contained" color="primary">
                  Áp dụng mã
                </Button>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Button variant="outlined" color="warning" onClick={clearCart}>
                  Xóa giỏ hàng
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <CartSummary items={items} />
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Cart;
