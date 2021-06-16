import { configureStore } from '@reduxjs/toolkit';
import metricsSlice from './metricsSlice';
import nutrientsSlice from './nutrientsSlice';

const store = configureStore({
  reducer: {
    nutrients: nutrientsSlice,
    metrics: metricsSlice,
  },
});
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;
export default store;
