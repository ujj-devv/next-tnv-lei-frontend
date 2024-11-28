import { combineReducers } from "@reduxjs/toolkit";
import { faq } from "./api/faq/faq";
import { product } from "./api/product/product";
import { cdf } from "./api/cdf/cdf";
import { leiRecordsApi } from "./api/glief/lei-records.slice";

const rootReducer = combineReducers({
  [leiRecordsApi.reducerPath]:leiRecordsApi.reducer,
  [faq.reducerPath]: faq.reducer,
  [product.reducerPath]: product.reducer,
  [cdf.reducerPath]: cdf.reducer,
});

export default rootReducer;
