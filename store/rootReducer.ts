import { combineReducers } from "@reduxjs/toolkit";
import { faq } from "./api/faq/faq";
import { product } from "./api/product/product";
import { cdf } from "./api/cdf/cdf";

const rootReducer = combineReducers({
  [faq.reducerPath]: faq.reducer,
  [product.reducerPath]: product.reducer,
  [cdf.reducerPath]: cdf.reducer,
});

export default rootReducer;
