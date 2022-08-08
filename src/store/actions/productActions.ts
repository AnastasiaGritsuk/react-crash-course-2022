import axios from "../../axios";
import { AppDispatch } from "../index";
import { IProduct } from "../../models/products";
import { productSlice } from "../slices/productSlice";

export const fetchProducts = (limit = 5) => {
  return async(dispatch: AppDispatch) => {
    try {
      dispatch(productSlice.actions.fetching);
      const response = await axios.get<IProduct[]>(`products?limit=${limit}`);
      dispatch(productSlice.actions.fetchSuccess(response.data));
    } catch (e) {
      dispatch(productSlice.actions.fetchError(e as Error));
    }
  }
}
