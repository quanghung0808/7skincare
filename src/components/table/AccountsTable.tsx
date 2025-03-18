import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  TablePagination,
  Tabs,
  Tab,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  SelectChangeEvent,
  IconButton,
} from "@mui/material";
import { Roles, Statuses } from "@/constants/status";
import { Account } from "@/types/schema/user";
import { Visibility } from "@mui/icons-material";
import AccountDialog from "../dialog/AccountDialog";

interface AccountsTableProps {
  accounts: Account[];
  page: number;
  setPage: (page: number) => void;
}

const AccountsTable: React.FC<AccountsTableProps> = ({ accounts, page, setPage }) => {
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [selectedRole, setSelectedRole] = useState<string>("ALL");
  const [selectedStatus, setSelectedStatus] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);

  // Debounce search input to avoid excessive filtering
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 300); // 300ms debounce delay

    return () => clearTimeout(handler);
  }, [searchQuery]);

  // Handle Role Change
  const handleRoleChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedRole(newValue);
    setPage(0);
  };

  // Handle Status Change
  const handleStatusChange = (event: SelectChangeEvent<string>) => {
    setSelectedStatus(event.target.value as string);
    setPage(0);
  };

  // Handle Pagination
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Handle Dialog Open
  const handleOpenDialog = (account: Account) => {
    setSelectedAccount(account);
    setOpenDialog(true);
  };

  // Handle Dialog Close
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedAccount(null);
  };

  // Handle Activation/Deactivation
  const handleToggleStatus = () => {
    if (selectedAccount) {
      const updatedStatus =
        selectedAccount.status === Statuses.ACTIVATED ? Statuses.DISABLED : Statuses.ACTIVATED;
      setSelectedAccount({ ...selectedAccount, status: updatedStatus });
    }
  };

  // Filter accounts based on role, status, and search query
  const filteredAccounts = accounts.filter(account => {
    const roleMatch = selectedRole === "ALL" || account.roleName === selectedRole;
    const statusMatch = selectedStatus === "ALL" || account.status === selectedStatus;
    const searchMatch =
      debouncedSearch === "" ||
      account.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      account.email.toLowerCase().includes(debouncedSearch.toLowerCase());

    return roleMatch && statusMatch && searchMatch;
  });

  const paginatedAccounts = filteredAccounts.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <>
      {/* Role Filter Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
        <Tabs
          value={selectedRole}
          onChange={handleRoleChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Tất cả" value="ALL" />
          <Tab label="Nhân viên" value={Roles.STAFF} />
          <Tab label="Người dùng" value={Roles.USER} />
          <Tab label="Quản trị viên" value={Roles.ADMIN} />
        </Tabs>
      </Box>
      {/* Search Input & Status Filter */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "end", gap: 2, mb: 2 }}>
        <TextField
          size="small"
          label="Tìm kiếm theo tên hoặc email"
          variant="outlined"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          sx={{ width: "300px" }}
        />
        <FormControl sx={{ width: 150 }}>
          <InputLabel>Trạng thái</InputLabel>
          <Select
            size="small"
            value={selectedStatus}
            onChange={handleStatusChange}
            label="Trạng thái"
          >
            <MenuItem value="ALL">Tất cả</MenuItem>
            <MenuItem value={Statuses.ACTIVATED}>Hoạt động</MenuItem>
            <MenuItem value={Statuses.DISABLED}>Vô hiệu hóa</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {/* Accounts Table */}
      <TableContainer component={Paper} sx={{ marginBottom: "10px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Tên</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Số điện thoại</TableCell>
              <TableCell>Ngày tạo</TableCell>
              <TableCell align="center">Vai trò</TableCell>
              <TableCell align="center">Trạng thái</TableCell>
              <TableCell align="center">Chi tiết</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedAccounts.map(account => (
              <TableRow key={account.id}>
                <TableCell>{account.id}</TableCell>
                <TableCell>{account.name}</TableCell>
                <TableCell>{account.email}</TableCell>
                <TableCell>{account.phoneNumber}</TableCell>
                <TableCell>{new Date(account.createAt).toLocaleDateString("vi-VN")}</TableCell>
                <TableCell align="center">
                  <Chip
                    sx={{ height: "24px", borderRadius: "4px", fontWeight: 600 }}
                    variant="outlined"
                    label={account.roleName}
                    color={
                      account.roleName === Roles.STAFF
                        ? "info"
                        : account.roleName === Roles.ADMIN
                          ? "secondary"
                          : "primary"
                    }
                  />
                </TableCell>
                <TableCell align="center">
                  <Chip
                    label={account.status === Statuses.ACTIVATED ? "Hoạt động" : "Vô hiệu hóa"}
                    color={account.status === Statuses.ACTIVATED ? "success" : "error"}
                  />
                </TableCell>
                <TableCell align="center">
                  <IconButton onClick={() => handleOpenDialog(account)}>
                    <Visibility />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Pagination */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredAccounts.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      {/* Account Detail Dialog */}
      <AccountDialog
        open={openDialog}
        account={selectedAccount}
        onClose={handleCloseDialog}
        onToggleStatus={handleToggleStatus}
      />
    </>
  );
};

export default AccountsTable;
