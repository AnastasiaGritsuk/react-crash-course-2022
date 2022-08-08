import { IProduct } from "../../models/products";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  loading: boolean;
  error: string;
  products: IProduct[];
  count: number;
}

const initialState: ProductState = {
  loading: false,
  error: '',
  products: [],
  count: 5
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetching: (state)=> {
      state.loading = true;
    },
    fetchSuccess: (state, action: PayloadAction<IProduct[]>) => {
      state.loading = false;
      state.products = action.payload;
      state.count = action.payload.length;
    },
    fetchError: (state, action: PayloadAction<Error>) => {
      state.loading = false;
      state.error = action.payload.message;
    }
  }
})

export default productSlice.reducer;
