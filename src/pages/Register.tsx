import { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import useAuthStore from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { RegisterUserData } from "@/types/schema/user";
import { isValidEmail, isValidPhoneNumber } from "@/utils/validation";
import { AxiosError } from "axios";
import { useAlert } from "@/hooks/useAlert";

const Register = () => {
  const navigate = useNavigate();
  const { showAlert } = useAlert();
  // Consolidated form state
  const [formState, setFormState] = useState<RegisterUserData>({
    email: "",
    password: "",
    name: "",
    address: "",
    phoneNumber: "",
  });

  // Auth store
  const { registerUser, isLoading } = useAuthStore();

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRegister = async () => {
    try {
      await registerUser(formState);
      setFormState({ email: "", password: "", name: "", address: "", phoneNumber: "" });
      showAlert("Đăng ký thành công ! Vui lòng đăng nhập", "success");
      navigate("/dang-nhap");
    } catch (error) {
      if (error instanceof AxiosError) {
        showAlert("Đăng ký thất bại ! Hãy thử lại", "error");
      }
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "90vh" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          boxShadow: 3,
          p: 4,
        }}
      >
        <Box sx={{ flex: 1, pr: 2 }}>
          <Typography variant="h4" gutterBottom>
            Đăng ký
          </Typography>
          <TextField
            label="Tên"
            variant="outlined"
            fullWidth
            required
            value={formState.name}
            onChange={handleInputChange}
            name="name"
            sx={{ mb: 2 }}
            disabled={isLoading}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            required
            value={formState.email}
            onChange={handleInputChange}
            name="email"
            sx={{ mb: 2 }}
            disabled={isLoading}
            error={formState.email.length > 0 && !isValidEmail(formState.email)}
            helperText={
              formState.email.length > 0 && !isValidEmail(formState.email)
                ? "Vui lòng nhập email hợp lệ"
                : ""
            }
          />
          <TextField
            label="Mật khẩu"
            type="password"
            variant="outlined"
            fullWidth
            required
            value={formState.password}
            onChange={handleInputChange}
            name="password"
            sx={{ mb: 2 }}
            disabled={isLoading}
          />
          <TextField
            label="Địa chỉ"
            variant="outlined"
            fullWidth
            required
            value={formState.address}
            onChange={handleInputChange}
            name="address"
            sx={{ mb: 2 }}
            disabled={isLoading}
          />
          <TextField
            label="Số điện thoại"
            variant="outlined"
            fullWidth
            required
            value={formState.phoneNumber}
            onChange={handleInputChange}
            name="phoneNumber"
            sx={{ mb: 2 }}
            disabled={isLoading}
            error={formState.phoneNumber.length > 0 && !isValidPhoneNumber(formState.phoneNumber)}
            helperText={
              formState.phoneNumber.length > 0 && !isValidPhoneNumber(formState.phoneNumber)
                ? "Vui lòng nhập số điện thoại hợp lệ"
                : ""
            }
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mb: 2 }}
            onClick={handleRegister}
            disabled={
              isLoading ||
              !formState.email ||
              !formState.password ||
              !formState.name ||
              !formState.address ||
              !formState.phoneNumber ||
              !isValidEmail(formState.email) ||
              !isValidPhoneNumber(formState.phoneNumber)
            }
          >
            {isLoading ? "Đang đăng ký..." : "Đăng ký"}
          </Button>
        </Box>
        <Box sx={{ flex: 1, pl: 2, textAlign: "center", alignContent: "center" }}>
          <Typography variant="h4" gutterBottom>
            ĐĂNG NHẬP
          </Typography>
          <Typography variant="body1" gutterBottom color="primary">
            Vui lòng đăng nhập để truy cập vào tài khoản và sử dụng các dịch vụ chăm sóc da chuyên
            nghiệp từ Bác sĩ Diễm Hương.
          </Typography>
          <Button onClick={() => navigate("/dang-nhap")} variant="contained" color="inherit">
            Đăng nhập
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
