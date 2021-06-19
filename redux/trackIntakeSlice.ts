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
  foodEaten: NormalizedIndex<Food>;
  intakeGoal: Nutrients<number>;
};

const initialState: State = {
  foodList: createNormalizedIndex<Food>(),
  foodEaten: createNormalizedIndex<Food>(),
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
    addtoFoodEaten: (state: State, action: PayloadAction<Food>) => {
      const id = action.payload.id;
      state.foodEaten.allIds.push(id);
      state.foodEaten.byId[id] = action.payload;
    },
  },
});

export const { addtoFoodList } = nutrientsSlice.actions;

export default nutrientsSlice.reducer;
