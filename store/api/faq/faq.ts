import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FaqItem } from "./faq.types";
import { BaseResponse } from "../api.types";

export const faq = createApi({
  reducerPath: "faq",
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
    getFaqs: builder.query<BaseResponse<FaqItem[]>, void>({
      query: () => ({
        url: "api/faqs",
      }),
    }),
  }),
});

export const { useGetFaqsQuery } = faq;