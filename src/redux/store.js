import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./features/api/apiSlice";
import productSlice from "./features/products/productSlice";
import cartSlice from "./features/cart/cartSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;