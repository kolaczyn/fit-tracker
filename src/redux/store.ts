import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import metricsSlice from './metricsSlice';
import nutrientsSlice from './nutrientsSlice';
import trackIntakeSlice from './trackIntakeSlice';

const store = configureStore({
  reducer: {
    nutrients: nutrientsSlice,
    metrics: metricsSlice,
    trackIntake: trackIntakeSlice,
    auth: authSlice,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
