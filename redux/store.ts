import { configureStore } from '@reduxjs/toolkit';
import nutrientsSlice from './nutrientsSlice';

const store = configureStore({
  reducer: {
    nutrients: nutrientsSlice,
  },
});
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;
export default store;
