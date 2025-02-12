import cartslice from "./slice/Cart_slice";
import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
const stripe = require("stripe")(
  "sk_test_51PrPeUIORr6RhpiSgrHdFP9tDsyc4DabwNJIFGceP5DmrgqEt3UzyaYr4Es1OqVYd1uzfp2KJHABHlqrB6Z79GeX00goC0MyzY"
);

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartslice);

export const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export let persistor = persistStore(store);
