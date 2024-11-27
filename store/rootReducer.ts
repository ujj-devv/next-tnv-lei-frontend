import { combineReducers } from "@reduxjs/toolkit";
import { faq } from "./api/faq/faq";
import { product } from "./api/product/product";

const rootReducer = combineReducers({
  [faq.reducerPath]: faq.reducer,
  [product.reducerPath]: product.reducer,
});

export default rootReducer;
