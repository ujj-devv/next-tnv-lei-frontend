import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CdfItem } from "./cdf.types";
import { BaseResponse } from "../api.types";

export const cdf = createApi({
  reducerPath: "cdf",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_STRAPI_BASE_UR,
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCdfs: builder.query<BaseResponse<CdfItem[]>, void>({
      query: () => ({
        url: "api/cdfs",
      }),
    }),
  }),
});

export const { useGetCdfsQuery } = cdf;