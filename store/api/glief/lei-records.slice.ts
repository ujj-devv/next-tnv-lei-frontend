import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LeiMain, LeiRecordParamsType } from "./LeiRecords.types";


export const leiRecordsApi = createApi({
  reducerPath: "leiRecordsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL, 
  }),
  endpoints: (builder) => ({
    getLeiRecords: builder.query<LeiMain, LeiRecordParamsType>({
      query: ({searchTerm, countryCode}) => ({
        url: "",
        params: {
          "filter[entity.legalName]": searchTerm,
          "filter[entity.legalAddress.country]":countryCode
        },
      }),
    }),
  }),
});

export const { useGetLeiRecordsQuery } = leiRecordsApi;
