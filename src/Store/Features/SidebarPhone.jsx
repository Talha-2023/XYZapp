import { createSlice } from "@reduxjs/toolkit";

export const SidebarPhone = createSlice({
  name: "SidebarPhone",
  initialState: { value: false },
  reducers: {
    ToggleSidebar: (state) => {
      state.value = !state.value;
    },
  },
});
export const { ToggleSidebar } = SidebarPhone.actions;
export default SidebarPhone.reducer;
