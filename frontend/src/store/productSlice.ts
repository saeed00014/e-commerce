import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
  },
  reducers: {
    addCard: (state, action) => {},
    deleteCard: (state, action) => {},
    quantitySet: (state, action) => {},
    sizeSet: (state, action) => {},
    colorSet: (state, action) => {},
  },
});

export const { addCard, deleteCard, quantitySet, sizeSet, colorSet } =
  productSlice.actions;

export default productSlice.reducer;
