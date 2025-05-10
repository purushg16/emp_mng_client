import { configureStore } from "@reduxjs/toolkit";
import leaveFilterReducer from "./slices/leaveFilterSlice";
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    leaveFilter: leaveFilterReducer,
    auth: authReducer,
  },
});

store.subscribe(() => {
  const state = store.getState().auth;
  localStorage.setItem("auth", JSON.stringify(state));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
