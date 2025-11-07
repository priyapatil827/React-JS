import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialstate = {
  product: [],
  isLoading: true,
  error: null,
};

export const fetchProducts = createAsyncThunk("products/get", async () => {
  const response = await fetch("http://localhost:3000/products");
  const data = await response.json();
  return data;
});

export const insertProducts = createAsyncThunk(
  "products/post",
  async ({title,price}) => {
    const response = await axios.post("http://localhost:3000/products", {
      title: title,
      price: price,
    });
    console.log(response.data);
    return response.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: initialstate,
  reducers: {
    addProduct: (state, action) => {
      state.product.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.product = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = "Can't fetch the data";
        state.isLoading = false;
      })
      .addCase(insertProducts.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(insertProducts.fulfilled, (state, action) => {
        state.product.push(action.payload);
        state.isLoading = false;
      })
      .addCase(insertProducts.rejected, (state, action) => {
        state.error = "Can't insert the data";
        state.isLoading = false;
      });
  },
});

export default productSlice.reducer;
export const { addProduct } = productSlice.actions;
