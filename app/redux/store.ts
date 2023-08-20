import { configureStore, } from "@reduxjs/toolkit";

import { stocksNewsApi } from "./features/StockNewsApi";

export const store = configureStore({
  reducer: {
    [stocksNewsApi.reducerPath]: stocksNewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(stocksNewsApi.middleware),
});


// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;