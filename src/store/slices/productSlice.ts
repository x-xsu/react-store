import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../models/models";

interface ProductState {
  loading: boolean
  error: string
  products: IProduct[]
}

const initialState: ProductState = {
  loading: false,
  error: '',
  products: []
}

export const productSlice = createSlice({
  name: 'product', // уникальный идентификатор
  initialState,
  reducers: {
    fetching(state) { // начало загрузки
      state.loading = true
    },
    fetchSuccess(state, action: PayloadAction<IProduct[]>) { // успешная загрузка
      state.loading = false
      state.products = action.payload
    },
    fetchError(state, action: PayloadAction<Error>) { // ошибка
      state.loading = false
      state.error = action.payload.message
    }
  }
})

export default productSlice.reducer