import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import token_key, { CurrentClient } from "../../data/token_key";

interface EmployeeData {
  id: string;
  firstName: string;
  lastName: string;
}

interface AuthState {
  role: CurrentClient | null;
  token: string | null;
  employeeData: EmployeeData | null;
}

const initialState: AuthState = {
  role: null,
  token: null,
  employeeData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setRole(
      state,
      action: PayloadAction<{ role: "admin" | "employee"; token: string }>
    ) {
      state.role = action.payload.role;
      state.token = action.payload.token;
      localStorage.setItem(token_key[state.role], action.payload.token);
    },
    setEmployeeData(state, action: PayloadAction<EmployeeData>) {
      state.employeeData = action.payload;
    },
    logout(state) {
      if (state.role) localStorage.removeItem(token_key[state.role]);
      state.employeeData = null;
      state.role = null;
    },
  },
});

export const { setRole, setEmployeeData, logout } = authSlice.actions;
export default authSlice.reducer;
