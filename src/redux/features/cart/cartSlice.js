import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addTocart: (state, actions) => {
      const existing = state.products.find((product) => product.id === actions.payload.id);
      
      if (existing) {
        existing.quantity = existing.quantity + 1;
      } else {
        state.products.push({...actions.payload, quantity: 1})
      }
      state.total = Number(state.total) + Number(actions.payload.price)
    },
  },
});

export const {addTocart} = cartSlice.actions;
export default cartSlice.reducer;
