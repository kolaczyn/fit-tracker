import { useAppSelector } from '../redux/hooks';

const useEatenCalories = () => {
  const foodListItems = useAppSelector(state => state.trackIntake.foodList);
  const foodEaten = useAppSelector(state => state.trackIntake.foodEaten);
  const eatenCalories = {
    calories: 0,
    carbs: 0,
    fat: 0,
    protein: 0,
  };
  foodEaten.forEach(foodId => {
    eatenCalories.calories += foodListItems.byId[foodId].nutrients.calories;
    eatenCalories.carbs += foodListItems.byId[foodId].nutrients.carbs;
    eatenCalories.fat += foodListItems.byId[foodId].nutrients.fat;
    eatenCalories.protein += foodListItems.byId[foodId].nutrients.protein;
  });

  return { eatenCalories };
};
export default useEatenCalories;
