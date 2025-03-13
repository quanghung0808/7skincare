import React from "react";
import { Card, CardMedia, CardContent, Typography, Button, Box } from "@mui/material";
import useCartStore from "@/hooks/useCart";
import { Product } from "@/types/schema/product";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addItem } = useCartStore();

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      image: product.image,
      name: product.name,
      price: product.price,
      quantity: 1,
    };

    addItem(cartItem);
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
        title={product.name}
        sx={{ padding: "2em 2em 0 2em" }}
      />

      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography gutterBottom variant="body1" component="div">
          {product.name}
        </Typography>
        <Typography variant="h6" color="text.primary">
          {product.price.toLocaleString()} đ
        </Typography>
      </CardContent>
      <Box sx={{ px: 2, pb: 2 }}>
        <Button variant="contained" fullWidth onClick={handleAddToCart}>
          Thêm vào giỏ hàng
        </Button>
      </Box>
    </Card>
  );
};

export default ProductCard;
