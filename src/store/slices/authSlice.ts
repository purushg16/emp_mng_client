import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserRole = "admin" | "employee";

interface EmployeeData {
  id: string;
  firstName: string;
  lastName: string;
}

interface AuthState {
  role: UserRole | null;
  employeeData: EmployeeData | null;
}

const initialState: AuthState = {
  role: null,
  employeeData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setRole(state, action: PayloadAction<UserRole>) {
      state.role = action.payload;
    },
    setEmployeeData(state, action: PayloadAction<EmployeeData>) {
      state.employeeData = action.payload;
    },
    logout(state) {
      localStorage.removeItem(state.role || "");
      state.employeeData = null;
      state.role = null;
    },
  },
});

export const { setRole, setEmployeeData, logout } = authSlice.actions;
export default authSlice.reducer;
