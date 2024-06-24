import { createSlice } from "@reduxjs/toolkit";
const loadState = () => {
  const serializedState = localStorage.getItem("SidebarCategories");
  return JSON.parse(serializedState);
};

const saveState = (state) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem("SidebarCategories", serializedState);
};

export const SidebarCategories = createSlice({
  name: "SidebarCategories",
  initialState: loadState() || { value: false },
  reducers: {
    HomeHeading: (state, action) => {
      state.value = action.payload;
      saveState(state);
    },
    HandletoggleDropdown: (state, action) => {
      state.value = state.value === action.payload ? false : action.payload;
      saveState(state);
    },
  },
});

export const { HandletoggleDropdown, HomeHeading } = SidebarCategories.actions;
export default SidebarCategories.reducer;
