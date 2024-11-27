import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseResponse } from "../api.types";
import { ProductPackage } from "./product.types";

export const product = createApi({
  reducerPath: "product",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_STRAPI_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<BaseResponse<ProductPackage[]>, void>({
      query: () => ({
        url: "api/products",
      }),
    }),
  }),
});

export const { useGetProductsQuery } = product;
