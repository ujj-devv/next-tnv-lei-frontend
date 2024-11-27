import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { faq } from './api/faq/faq';
import { product } from './api/product/product';


const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(faq.middleware, product.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
