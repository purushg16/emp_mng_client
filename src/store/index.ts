import { configureStore } from "@reduxjs/toolkit";
import leaveFilterReducer from "./slices/leaveFilterSlice";
import authReducer from "./slices/authSlice";
import searchFilterReducer from "./slices/searchFilterSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    leaveFilter: leaveFilterReducer,
    searchFilter: searchFilterReducer,
  },
});

store.subscribe(() => {
  const state = store.getState().auth;
  localStorage.setItem("auth", JSON.stringify(state));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
