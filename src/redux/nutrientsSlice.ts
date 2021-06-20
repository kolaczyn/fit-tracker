import { createSlice, Action, PayloadAction } from '@reduxjs/toolkit';
import { Nutrients } from '../customTypes';

type State = Nutrients<number>;

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
    addNutrients: (
      state: State,
      action: PayloadAction<Nutrients<number | string>>
    ) => {
      const { calories, fat, carbs, protein } = action.payload;
      // I couldn't find a better way of doing this without making TypeScript angry
      state.calories += Number(calories);
      state.fat += Number(fat);
      state.carbs += Number(carbs);
      state.protein += Number(protein);
    },
  },
});

export const { addNutrients } = nutrientsSlice.actions;

export default nutrientsSlice.reducer;
