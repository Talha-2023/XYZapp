import { configureStore } from "@reduxjs/toolkit";
import DisToggle from "./Features/DisToggle";
import TogglePlay from "./Features/TogglePlay";

export const store = configureStore({
  reducer: { DisToggle: DisToggle, TogglePlay: TogglePlay },
});
