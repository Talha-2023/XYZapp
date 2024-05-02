import { createSlice } from "@reduxjs/toolkit";

export const TogglePlay = createSlice({
  name: "TogglePlay",
  initialState: { value: false },
  reducers: {
    HandleTogglePlay: (state, action) => {
      if (state.value) {
        action.payload.current.pause();
        action.payload.current.currentTime = 0;
      } else {
        action.payload.current.play();
      }
      state.value = !state.value;
    },
  },
});
export const { HandleTogglePlay } = TogglePlay.actions;
export default TogglePlay.reducer;
