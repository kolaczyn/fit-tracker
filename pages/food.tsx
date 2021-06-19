import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import { HStack, Spacer, VStack } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';

import { FoodItem } from '../components/food/FoodItem';
import { AddFoodContainer } from '../components/food/AddFood';
import { Food } from '../customTypes';
import { NextSeo } from 'next-seo';
import { effect } from '@chakra-ui/react';
import { cleanup } from '@testing-library/react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { addtoFoodList } from '../redux/trackIntakeSlice';
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
  id: '3',
  category: 'Fruit',
  nutrients: {
    calories: 318,
    fat: 29,
    carbs: 18,
    protein: 4,
  },
};

export const FoodPage: React.FC = () => {
  const [selectedFoods, setSelectedFoods] = useState<Set<string>>(
    () => new Set<string>()
  );
  const dispatch = useAppDispatch();
  const foodListItems = useAppSelector(state => state.trackIntake.foodList);

  // @ts-ignore
  // const foodListArray: Food[] = Object.keys(foodListItems.allIds).map(key => {foodListItems[key]})
  const foodListArray: Food[] = normalizedToArray(foodListItems);

  useEffect(() => {
    dispatch(addtoFoodList(banana));
    dispatch(addtoFoodList(apple));

    setTimeout(() => {
      dispatch(addtoFoodList(avocado));
    }, 2000);
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();

  // TODO I should put Set's toggle logic into some util function
  // because it look too low level for a part of a page's code
  const toggleFood = (foodId: string) => {
    if (selectedFoods.has(foodId)) {
      setSelectedFoods(old => new Set([...old].filter(num => num !== foodId)));
    } else {
      setSelectedFoods(old => new Set(old.add(foodId)));
    }
  };

  const handleConsoomSelected = () => {
    setSelectedFoods(new Set());
  };

  const isActive = (foodId: string): boolean => selectedFoods.has(foodId);

  return (
    <>
      <NextSeo title="Add Food | Track Fit" />
      <VStack width="100%" alignItems="stretch" spacing="4">
        <HStack>
          <Button onClick={onOpen}>Add Food</Button>
          <AddFoodContainer isOpen={isOpen} onClose={onClose} />
          <Spacer />
          <Button
            onClick={handleConsoomSelected}
            isDisabled={selectedFoods.size === 0}
          >
            Consoom Selected
          </Button>
        </HStack>
        <VStack width="100%" alignItems="stretch" spacing="3">
          {foodListArray.map(food => (
            <FoodItem
              key={food.id}
              food={food}
              isActive={isActive(food.id)}
              toggleFood={toggleFood}
            />
          ))}
        </VStack>
      </VStack>
    </>
  );
};

export default FoodPage;
