import { createSlice } from "@reduxjs/toolkit";

export const Heading = createSlice({
  name: "Heading",
  initialState: { value: "" },
  reducers: {
    HandleHeading: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { HandleHeading, HomeHeading } = Heading.actions;
export default Heading.reducer;
