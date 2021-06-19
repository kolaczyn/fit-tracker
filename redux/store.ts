import { configureStore } from '@reduxjs/toolkit';
import metricsSlice from './metricsSlice';
import nutrientsSlice from './nutrientsSlice';
import trackIntakeSlice from './trackIntakeSlice';

const store = configureStore({
  reducer: {
    nutrients: nutrientsSlice,
    metrics: metricsSlice,
    trackIntake: trackIntakeSlice,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
