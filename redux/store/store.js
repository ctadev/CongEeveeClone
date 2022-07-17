import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "../slices/modalSlice";
import cartSlice from "../slices/cart";

const store = configureStore({
  reducer: {
    modalSlice: modalSlice,
    cartSlice: cartSlice,
  },
});

export default store;
