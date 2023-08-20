import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const stocksApiHeaders = {
  "X-RapidAPI-Host": "twelve-data1.p.rapidapi.com",
  "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
};

const baseUrl = "https://twelve-data1.p.rapidapi.com/";

type CreateRequestProps = {
  url: string;
}

type CreateTimeSeriesRequestProps = {
  url: string;
  params: {
    symbol: string;
    interval: string;
    format: string;
    exchange: string;
  }
}

const createRequest = ({url} : CreateRequestProps) => ({
  url,
  headers: stocksApiHeaders,
  params: {
    exchange: "NASDAQ",
    format: "json",
  },
});

const createTimeSeriesRequest = ({url, params}: CreateTimeSeriesRequestProps) => ({
  url,
  headers: stocksApiHeaders,
  params,
});



export const stocksApi = createApi({
  reducerPath: "stocksApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    fetchStocks: builder.query({
      query: () => createRequest({ url: "/stocks" }), 
    }),
    fetchTimeSeries: builder.query({
      query: ({symbol, timePeriod }) => createTimeSeriesRequest({ 
        url: "/time_series",
        params: {
          symbol,
          interval: timePeriod,
          format: "json",
          exchange: "NASDAQ",
        },
      }),
    })
  }),
});

export const { useFetchStocksQuery, useFetchTimeSeriesQuery } = stocksApi;

