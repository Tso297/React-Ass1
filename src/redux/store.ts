// Store is like a mini temporary in-the-middle database

import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./slices/RootSlice.ts";

export const store = configureStore({
    reducer,
    devTools: true,
})