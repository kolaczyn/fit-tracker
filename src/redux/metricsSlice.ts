import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Gender, Metrics, Units } from '../customTypes';

type State = Metrics;

const initialState: State = {
  activityLevel: null,
  age: null,
  height: null,
  waist: null,
  weight: null,
  gender: Gender.Male,
  units: Units.Metric,
};

const metricsSlice = createSlice({
  name: 'metrics',
  initialState,
  reducers: {
    updateMetrics: (
      state: State,
      // action shouldn't accept Units, because we should handle them differently (reset all cm and kg based units or convert them to other measurement)
      action: PayloadAction<Partial<Omit<Metrics, Units>>>
    ) => {
      action.payload.units;
      return { ...state, ...action.payload };
    },
    // for now I'm just gonna reset all the values if the user changes units
    setUnits: (state: State, action: PayloadAction<Units>) => {
      console.log('resttings')
      return { ...initialState, units: action.payload };
    },
  },
});

export const { updateMetrics, setUnits } = metricsSlice.actions;

export default metricsSlice.reducer;
