import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const stockNewsApiHeaders = {
  "X-RapidAPI-Host": "ms-finance.p.rapidapi.com",
  "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
};

const baseUrl = "https://ms-finance.p.rapidapi.com/";

type CreateRequestProps = {
  url: string;
  performanceId: string;
}

const createRequest = ({ url, performanceId }: CreateRequestProps) => ({
  url,
  headers: stockNewsApiHeaders,
  params: {
    performanceId,
  },
});

export const stocksNewsApi = createApi({
  reducerPath: "stocksNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    fetchStocksNews: builder.query({
      query: () => createRequest({ url: "/news/list", performanceId: "0P0000OQN8" }),
    }),
  }),
});

export const { useFetchStocksNewsQuery } = stocksNewsApi;