import { configureStore } from "@reduxjs/toolkit";
import DisToggle from "./Features/DisToggle";
import TogglePlay from "./Features/TogglePlay";
import SidebarCategories from "./Features/SidebarCategories";
import Heading from "./Features/Heading";

export const store = configureStore({
  reducer: {
    DisToggle: DisToggle,
    TogglePlay: TogglePlay,
    SidebarCategories: SidebarCategories,
    Heading: Heading,
  },
});
