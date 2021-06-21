import { effect } from '@chakra-ui/react';
import { cleanup } from '@testing-library/react';
import { useState, useEffect } from 'react';
import { Food, NutrientsI } from '../customTypes';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { addtoFoodList, addtoFoodEaten } from '../redux/trackIntakeSlice';
import initialFoods from '../static/initialFoods';
import normalizedToArray from '../utils/normalizedToArray';

const useSelectedFood = () => {
  const [selectedFoodIds, setSelectedFoodIds] = useState(
    () => new Set<string>()
  );
  const dispatch = useAppDispatch();
  const [foodIntake, setFoodIntake] = useState<NutrientsI<number>>({
    calories: 0,
    carbs: 0,
    fat: 0,
    protein: 0,
  });
  const foodListItems = useAppSelector(state => state.trackIntake.foodList);

  const foodListArray: Food[] = normalizedToArray(foodListItems);

  useEffect(() => {
    initialFoods.forEach(food => dispatch(addtoFoodList(food)));
  }, []);

  const handleConsoomSelected = () => {
    dispatch(addtoFoodEaten([...selectedFoodIds]));
    setSelectedFoodIds(new Set());
  };
  const isActive = (foodId: string): boolean => selectedFoodIds.has(foodId);
  const toggleFood = (foodId: string) => {
    if (selectedFoodIds.has(foodId)) {
      setSelectedFoodIds(
        old => new Set([...old].filter(num => num !== foodId))
      );
    } else {
      setSelectedFoodIds(old => new Set(old.add(foodId)));
    }
  };

  useEffect(() => {
    const nutrients = {
      calories: 0,
      carbs: 0,
      fat: 0,
      protein: 0,
    };
    for (let foodId of selectedFoodIds) {
      // TODO this is where classes would be extremely useful
      nutrients.calories += foodListItems.byId[foodId].nutrients.calories;
      nutrients.carbs += foodListItems.byId[foodId].nutrients.carbs;
      nutrients.fat += foodListItems.byId[foodId].nutrients.fat;
      nutrients.protein += foodListItems.byId[foodId].nutrients.protein;
    }
    setFoodIntake(nutrients);
  }, [selectedFoodIds]);

  return {
    foodListArray,
    selectedFoods: selectedFoodIds,
    handleConsoomSelected,
    isActive,
    toggleFood,
    foodIntake,
  };
};
export default useSelectedFood;
