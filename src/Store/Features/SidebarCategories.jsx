import { createSlice } from "@reduxjs/toolkit";

export const SidebarCategories = createSlice({
  name: "SidebarCategories",
  initialState: { value: false },
  reducers: {
    HomeHeading: (state, action) => {
      state.value = action.payload;
    },
    HandletoggleDropdown: (state, action) => {
      state.value = state.value === action.payload ? false : action.payload;
    },
  },
});

export const { HandletoggleDropdown, HomeHeading } = SidebarCategories.actions;
export default SidebarCategories.reducer;
