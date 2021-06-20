import { effect } from '@chakra-ui/react';
import { cleanup } from '@testing-library/react';
import { useState, useEffect } from 'react';
import { Food, Nutrients } from '../customTypes';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { addtoFoodList, addtoFoodEaten } from '../redux/trackIntakeSlice';
import normalizedToArray from '../utils/normalizedToArray';

const banana: Food = {
  name: 'Banana',
  portion: 118,
  id: '0',
  category: 'Fruit',
  nutrients: {
    calories: 105,
    fat: 0.389,
    carbs: 27,
    protein: 1,
  },
};

const apple: Food = {
  name: 'Apple',
  portion: 91,
  id: '1',
  category: 'Fruit',
  nutrients: {
    calories: 91,
    fat: 0.273,
    carbs: 24,
    protein: 0.482,
  },
};

const avocado: Food = {
  name: 'Avocado',
  portion: 214,
  id: '30',
  category: 'Fruit',
  nutrients: {
    calories: 318,
    fat: 29,
    carbs: 18,
    protein: 4,
  },
};

const hamburger: Food = {
  name: 'Hamburger',
  portion: 100,
  id: '69',
  category: 'Junk Food',
  nutrients: {
    calories: 250,
    fat: 9,
    carbs: 31,
    protein: 12,
  },
};


const useSelectedFood = () => {
  const [selectedFoodIds, setSelectedFoodIds] = useState(
    () => new Set<string>()
  );
  const dispatch = useAppDispatch();
  const [foodIntake, setFoodIntake] = useState<Nutrients<number>>({
    calories: 0,
    carbs: 0,
    fat: 0,
    protein: 0,
  });
  const foodListItems = useAppSelector(state => state.trackIntake.foodList);

  const foodListArray: Food[] = normalizedToArray(foodListItems);

  useEffect(() => {
    dispatch(addtoFoodList(banana));
    dispatch(addtoFoodList(apple));
    dispatch(addtoFoodList(hamburger));

    setTimeout(() => {
      dispatch(addtoFoodList(avocado));
    }, 2000);
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
