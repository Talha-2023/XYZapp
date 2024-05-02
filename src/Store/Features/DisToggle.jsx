import { createSlice } from "@reduxjs/toolkit";

export const DisToggle = createSlice({
  name: "DisToggle",
  initialState: { value: false },
  reducers: {
    HandleDisplay: (state) => {
      state.value = !state.value;
    },
  },
});
export const { HandleDisplay } = DisToggle.actions;
export default DisToggle.reducer;
