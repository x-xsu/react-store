// функции, которые можно вызывать из компонента, чтобы изменять state

import axios from "../../axios";
import { AppDispatch } from "../index";
import { IProduct } from "../../models/models";
import { productSlice } from "../slices/productSlice";

export const fetchProducts = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(productSlice.actions.fetching())
      const response = await axios.get<IProduct[]>("products")
      dispatch(productSlice.actions.fetchSuccess(
        response.data
      ))
    } catch (e) {
      dispatch(productSlice.actions.fetchError(e as Error))
    }
  }
}