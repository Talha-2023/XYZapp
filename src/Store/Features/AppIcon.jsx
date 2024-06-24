import { createSlice } from "@reduxjs/toolkit";
const loadState = () => {
  const appIconState = localStorage.getItem("AppIcon");
  return JSON.parse(appIconState);
};

const saveState = (state) => {
  const appIconState = JSON.stringify(state);
  localStorage.setItem("AppIcon", appIconState);
};

export const AppIcon = createSlice({
  name: "AppIcon",
  initialState: loadState() || { value: "" },
  reducers: {
    HandleAppIcon: (state, action) => {
      state.value = action.payload;

      saveState(state);
    },
  },
});
export const { HandleAppIcon } = AppIcon.actions;
export default AppIcon.reducer;
