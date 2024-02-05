import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  total: 0,
  categ: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {

    addCategory: (state, actions) => {
      state.categ = actions.payload;
    },

  },
});

export const { addCategory } = productSlice.actions;
export default productSlice.reducer;
