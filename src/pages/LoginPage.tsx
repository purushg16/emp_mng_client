import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useLoginLogic } from "../hooks/useLoginLogic";

const LoginPage = () => {
  const { formik, role, setRole, isLoading } = useLoginLogic();

  return (
    <Stack direction="row" width="100%" height="100vh" minHeight="100dvh">
      <Box
        display="flex"
        width="100%"
        flexGrow={1}
        alignItems="center"
        justifyContent="center"
      >
        <Box maxWidth="400px" component="form" onSubmit={formik.handleSubmit}>
          <Typography variant="h4" fontWeight={700} mb={1} textAlign="center">
            Welcome Back
          </Typography>
          <Typography variant="body1" mb={3} textAlign="center" color="gray">
            Lets do the work. Enter you details
          </Typography>
          <FormControl fullWidth size="small" sx={{ mb: 2 }}>
            <InputLabel id="role-label">Role</InputLabel>
            <Select
              labelId="role-label"
              id="role"
              value={role}
              label="Role"
              onChange={(e) => setRole(e.target.value as "admin" | "employee")}
            >
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="employee">Employee</MenuItem>
            </Select>
          </FormControl>

          <TextField
            fullWidth
            size="small"
            label={role === "admin" ? "Username" : "Email or Emp. Code"}
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            size="small"
            label="Password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            sx={{ mb: 2 }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            loading={isLoading}
          >
            Login
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1504202765451-e04e08e0fe58?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </Stack>
  );
};

export default LoginPage;
