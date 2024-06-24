import { createSlice } from "@reduxjs/toolkit";
const loadState = () => {
  const appNameState = localStorage.getItem("AppName");
  return JSON.parse(appNameState);
};

const saveState = (state) => {
  const appNameState = JSON.stringify(state);
  localStorage.setItem("AppName", appNameState);
};

export const AppName = createSlice({
  name: "AppName",
  initialState: loadState() || { value: "" },
  reducers: {
    HandleAppName: (state, action) => {
      state.value = action.payload;
      saveState(state);
    },
  },
});
export const { HandleAppName } = AppName.actions;
export default AppName.reducer;
