import { configureStore } from "@reduxjs/toolkit";
import leaveFilterReducer from "./slices/leaveFilterSlice";

export const store = configureStore({
  reducer: {
    leaveFilter: leaveFilterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
