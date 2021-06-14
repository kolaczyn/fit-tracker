import { createSlice, Action, PayloadAction } from '@reduxjs/toolkit';
import { Nutrients } from '../customTypes';

type State = Nutrients;

const initialState: State = {
  calories: 0,
  fat: 0,
  carbs: 0,
  protein: 0,
};

const nutrientsSlice = createSlice({
  name: 'nutrients',
  initialState,
  reducers: {
    addNutrients: (state: State, action: PayloadAction<Nutrients>) => {
      const { calories, fat, carbs, protein } = action.payload;
      // I couldn't find a better way of doing this without making TypeScript angry
      state.calories += calories;
      state.fat += fat;
      state.carbs += carbs;
      state.protein += protein;
    },
  },
});

export const { addNutrients } = nutrientsSlice.actions;

export default nutrientsSlice.reducer;
