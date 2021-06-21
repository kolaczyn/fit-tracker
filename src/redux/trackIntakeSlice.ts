import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { Food, NormalizedIndex, NutrientsI } from '../customTypes';

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
  intakeGoal: NutrientsI<number>;
};

const initialState: State = {
  foodList: createNormalizedIndex<Food>(),
  foodEaten: [],
  intakeGoal: {
    calories: 2525,
    fat: 168,
    carbs: 95,
    protein: 158,
  },
};

const nutrientsSlice = createSlice({
  name: 'trackIntake',
  initialState,
  reducers: {
    addToFoodList: {
      reducer(state: State, action: PayloadAction<Food>) {
        const id = action.payload.id;
        state.foodList.allIds.push(id);
        state.foodList.byId[id] = action.payload;
      },
      prepare(food: Omit<Food, 'id'>) {
        return {
          payload: {
            ...food,
            id: uuidv4(),
          },
        };
      },
    },
    addtoFoodEaten: (state: State, action: PayloadAction<string[]>) => {
      state.foodEaten = [...state.foodEaten, ...action.payload];
    },
    setIntakeGoal: (
      state: State,
      action: PayloadAction<NutrientsI<number>>
    ) => {
      state.intakeGoal = action.payload;
    },
  },
});

export const { addToFoodList, addtoFoodEaten, setIntakeGoal } =
  nutrientsSlice.actions;

export default nutrientsSlice.reducer;
