import { VStack } from '@chakra-ui/layout';
import React from 'react';
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

export const FoodPage: React.FC = () => (
  <VStack width="100%" alignItems="stretch" spacing="2">
    {[banana, apple].map(food => (
      <FoodComponent key={food.id} food={food} />
    ))}
  </VStack>
);

export default FoodPage;
