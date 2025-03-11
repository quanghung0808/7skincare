import React from "react";
import { Card, CardMedia, CardContent, Typography, Button, Box } from "@mui/material";
import useCartStore from "@/hooks/useCart";

interface Product {
  id: string;
  name: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  image: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addItem } = useCartStore();

  const parsePrice = (priceString: string): number => {
    return parseInt(priceString.replace(/[₫,]/g, ""), 10);
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: parsePrice(product.price),
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
      <CardMedia component="img" height="140" image={product.image} alt={product.name} />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="body1" component="div">
          {product.name}
        </Typography>
        {product.oldPrice && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textDecoration: "line-through" }}
          >
            {product.oldPrice}
          </Typography>
        )}
        <Typography variant="h6" color="text.primary">
          {product.price}
        </Typography>
        {product.discount && (
          <Typography variant="body2" color="error">
            {product.discount}
          </Typography>
        )}
      </CardContent>
      <Box sx={{ p: 2 }}>
        <Button variant="contained" fullWidth onClick={handleAddToCart}>
          ADD TO CART
        </Button>
      </Box>
    </Card>
  );
};

export default ProductCard;
