import { Button } from '@chakra-ui/button';
import { HStack, Spacer, VStack } from '@chakra-ui/layout';
import React, { useState } from 'react';
import { FoodComponent } from '../components/FoodComponent';
import { Food } from '../customTypes';

const banana: Food = {
  name: 'Banana',
  portion: 118,
  id: 0,
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
  id: 1,
  category: 'Fruit',
  nutrients: {
    calories: 91,
    fat: 0.273,
    carbs: 24,
    protein: 0.482,
  },
};

export const FoodPage: React.FC = () => {
  const [selectedFoods, setSelectedFoods] = useState<Set<number>>(
    () => new Set<number>()
  );

  // TODO I should put Set's toggle logic into some util function
  // because it look too low level for a part of a page's code
  const toggleFood = (foodId: number) => {
    if (selectedFoods.has(foodId)) {
      setSelectedFoods(old => new Set([...old].filter(num => num !== foodId)));
    } else {
      setSelectedFoods(old => new Set(old.add(foodId)));
    }
  };

  const handleConsoomSelected = () => {
    setSelectedFoods(new Set())
  }

  const isActive = (foodId: number): boolean => selectedFoods.has(foodId);

  return (
    <VStack width="100%" alignItems="stretch" spacing="4">
      <HStack>
        <Button>Add Food</Button>
        <Spacer />
        <Button onClick={handleConsoomSelected} isDisabled={selectedFoods.size === 0}>Consoom Selected</Button>
      </HStack>
      <VStack width="100%" alignItems="stretch" spacing="2">
        {[banana, apple].map(food => (
          <FoodComponent
            key={food.id}
            food={food}
            isActive={isActive(food.id)}
            toggleFood={toggleFood}
          />
        ))}
      </VStack>
    </VStack>
  );
};

export default FoodPage;
