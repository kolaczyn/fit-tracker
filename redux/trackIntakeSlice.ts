import { createSlice, Action, PayloadAction } from '@reduxjs/toolkit';
import { Food, NormalizedIndex, Nutrients } from '../customTypes';

// I might change this to classes
// and move this to util/ folder,
// or even use a package for managing my normalized state
function createNormalizedIndex<T>(): NormalizedIndex<T> {
  return {
    byId: {},
    allIds: [],
  };
}

type State = {
  // add categories
  foodList: NormalizedIndex<Food>;
  // this should be just a reference to foodList, e.g. ids
  foodEaten: string[];
  intakeGoal: Nutrients<number>;
};

const initialState: State = {
  foodList: createNormalizedIndex<Food>(),
  foodEaten: [],
  intakeGoal: {
    calories: 2000,
    fat: 0,
    carbs: 0,
    protein: 0,
  },
};

const nutrientsSlice = createSlice({
  name: 'trackIntake',
  initialState,
  reducers: {
    // `addToFoodList` and `addToFoodEaten` are extremely similar, I might want to merge them
    addtoFoodList: (state: State, action: PayloadAction<Food>) => {
      const id = action.payload.id;
      state.foodList.allIds.push(id);
      state.foodList.byId[id] = action.payload;
    },
    addtoFoodEaten: (state: State, action: PayloadAction<string[]>) => {
      state.foodEaten = [...state.foodEaten, ...action.payload];
    },
  },
});

export const { addtoFoodList, addtoFoodEaten } = nutrientsSlice.actions;

export default nutrientsSlice.reducer;
