// src/reducers/user.js
import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchProductStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductSuccess: (state, action) => {
      console.log(state, action.payload);
      state.products = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchProductFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addProductSuccess: (state, action) => {
      state.products.push(action.payload);
      state.loading = false;
      state.error = null;
    },
    deleteProductSuccess: (state, action) => {
      console.log(state, action.payload);
      state.products = state.products.filter(
        (item) => item._id !== action.payload._id
      );
      state.loading = false;
      state.error = null;
    },
    stopLoading: (state) => {
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  fetchProductFailure,
  fetchProductStart,
  fetchProductSuccess,
  addProductSuccess,
  deleteProductSuccess,
  stopLoading
} = ProductSlice.actions;
export default ProductSlice.reducer;
