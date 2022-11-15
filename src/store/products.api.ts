import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const storeApi = createApi({
  reducerPath: "fakestoreapi/products",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/"
  }),
  endpoints: build => ({
    searchProducts: build.query({
      query: () => ({
        url: `search/products`
      })
    })
  })
})