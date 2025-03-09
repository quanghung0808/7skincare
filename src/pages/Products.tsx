import { useState } from "react";
import { Box, Container, Grid, Pagination } from "@mui/material";
import ProductCard from "@/components/card/ProductCard";
import { products } from "@/constants/fakeData";

const Products = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handleChange = (event: unknown, value: number) => {
    setPage(value);
  };

  const displayedProducts = products.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <Container>
      <Box sx={{ flexGrow: 1, mt: 4 }}>
        <Grid container spacing={4}>
          {displayedProducts.map((product, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
        <Box display="flex" justifyContent="center" mt={4}>
          <Pagination count={totalPages} page={page} onChange={handleChange} color="primary" />
        </Box>
      </Box>
    </Container>
  );
};

export default Products;
