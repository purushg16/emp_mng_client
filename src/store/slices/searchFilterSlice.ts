import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SearchFilterState {
  department: string;
  employee: string;
}

const initialState: SearchFilterState = {
  department: "",
  employee: "",
};

const leaveFilterSlice = createSlice({
  name: "leaveFilter",
  initialState,
  reducers: {
    setStatus(
      state,
      action: PayloadAction<{
        key: keyof SearchFilterState;
        value: string;
      }>
    ) {
      state[action.payload.key] = action.payload.value;
    },
  },
});

export const { setStatus } = leaveFilterSlice.actions;
export default leaveFilterSlice.reducer;
