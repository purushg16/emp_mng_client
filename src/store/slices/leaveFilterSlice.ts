import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { leaveStatus } from "../../entities/leave";

type StatusFilter = "all" | leaveStatus;

interface LeaveFilterState {
  status: StatusFilter;
}

const initialState: LeaveFilterState = {
  status: "all",
};

const leaveFilterSlice = createSlice({
  name: "leaveFilter",
  initialState,
  reducers: {
    setStatus(state, action: PayloadAction<StatusFilter>) {
      state.status = action.payload;
    },
  },
});

export const { setStatus } = leaveFilterSlice.actions;
export default leaveFilterSlice.reducer;
