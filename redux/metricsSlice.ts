import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Gender, Metrics } from '../customTypes';

type State = Metrics;

const initialState: State = {
  activityLevel: null,
  age: null,
  height: null,
  waist: null,
  weight: null,
  gender: Gender.Male,
};

const metricsSlice = createSlice({
  name: 'metrics',
  initialState,
  reducers: {
    updateMetrics: (
      state: State,
      action: PayloadAction<Partial<Metrics>>
    ) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateMetrics } = metricsSlice.actions;

export default metricsSlice.reducer;
