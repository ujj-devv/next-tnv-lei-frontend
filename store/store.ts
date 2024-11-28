import { leiRecordsApi } from './api/glief/lei-records.slice';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { faq } from './api/faq/faq';
import { product } from './api/product/product';
import { cdf } from './api/cdf/cdf';


const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(leiRecordsApi.middleware, faq.middleware, product.middleware, cdf.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
