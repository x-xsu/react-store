import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";

const rootReducer = combineReducers({
  product: productReducer
})

export function setupStore() {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer> // типы, которая возвращает функция
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']