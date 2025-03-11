import { useState } from "react";
import {
  Container,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  TablePagination,
  Chip,
  TextField,
} from "@mui/material";
import AddBrandDialog from "@/components/dialog/AddBrandDialog";
import { getBrands } from "@/apis/brand";
import { useQuery } from "@tanstack/react-query";
import LoadingSection from "@/components/section/LoadingSection";
import { Statuses } from "@/constants/status";

const ManageBrands = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { data, isLoading } = useQuery({
    queryKey: ["get-brands"],
    queryFn: () => getBrands(),
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setPage(0);
  };

  const filteredData = data?.filter(brand =>
    brand.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container sx={{ marginTop: "20px" }}>
      <Box display={"flex"} justifyContent={"space-between"} sx={{ marginBottom: "10px" }}>
        <Typography variant="h5" gutterBottom>
          Danh sách thương hiệu
        </Typography>
        <Box display={"flex"} gap={2}>
          <TextField
            label="Tìm kiếm thương hiệu"
            variant="outlined"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Thêm thương hiệu
          </Button>
        </Box>
      </Box>

      {isLoading ? (
        <LoadingSection />
      ) : (
        <>
          <TableContainer component={Paper} sx={{ marginBottom: "10px" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Tên thương hiệu </TableCell>
                  <TableCell>Trạng thái</TableCell>
                  <TableCell>Ngày tạo</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData
                  ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(brand => (
                    <TableRow key={brand.id}>
                      <TableCell>{brand.id}</TableCell>
                      <TableCell>{brand.name}</TableCell>
                      <TableCell>
                        <Chip
                          label={brand.status === Statuses.ACTIVATED ? "Hoạt động" : "Vô hiệu hóa"}
                          color={brand.status === Statuses.ACTIVATED ? "success" : "error"}
                        />
                      </TableCell>
                      <TableCell>{new Date(brand.createdAt).toLocaleString()}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredData?.length || 0}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </>
      )}
      <AddBrandDialog handleClose={handleClose} open={open} />
    </Container>
  );
};

export default ManageBrands;
