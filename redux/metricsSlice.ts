import { createSlice, Action, PayloadAction } from '@reduxjs/toolkit';
import { ActivityLevel, Nutrients, Metrics } from '../customTypes';

type State = Metrics;

const initialState: State = {
  activityLevel: null,
  age: null,
  height: null,
  waist: null,
  weight: null,
};

const metricsSlice = createSlice({
  name: 'metrics',
  initialState,
  reducers: {
    updateMetrics: (
      state: State,
      // action: PayloadAction<Partial<PayloadAction<Metrics>>>
      action: PayloadAction<Partial<Metrics>>
    ) => {
      // overwrite the old values
      console.log({...state,...action.payload})
      return { ...state, ...action.payload };
    },
  },
});

export const { updateMetrics } = metricsSlice.actions;

export default metricsSlice.reducer;
