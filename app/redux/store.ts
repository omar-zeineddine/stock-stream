import { configureStore, } from "@reduxjs/toolkit";

import { stocksApi } from "./features/stockPerformanceApi";
import { stocksNewsApi } from "./features/stockNewsApi";

export const store = configureStore({
  reducer: {
    [stocksApi.reducerPath]: stocksApi.reducer,
    [stocksNewsApi.reducerPath]: stocksNewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(stocksApi.middleware)
      .concat(stocksNewsApi.middleware),
});
