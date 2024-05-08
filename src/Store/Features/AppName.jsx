import { createSlice } from "@reduxjs/toolkit";

export const AppName = createSlice({
  name: "AppName",
  initialState: { value: "" },
  reducers: {
    HandleAppName: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { HandleAppName } = AppName.actions;
export default AppName.reducer;
