import { Button } from '@chakra-ui/button';
import { HStack, Spacer, VStack } from '@chakra-ui/layout';
import React from 'react';

import { FoodItem } from '../components/food/FoodItem';
import {AddFood } from '../components/food/AddFood';
import { NextSeo } from 'next-seo';
import useSelectedFood from '../hooks/useSelectedFood';
import { NutrientsStats } from '../components/food/NutrientsStats';
import useEatenCalories from '../hooks/useEatenCalories';

export const FoodPage: React.FC = () => {
  const {
    foodListArray,
    selectedFoods,
    foodIntake,
    handleConsoomSelected,
    isActive,
    toggleFood,
  } = useSelectedFood();
  const { eatenCalories } = useEatenCalories();

  return (
    <>
      <NextSeo title="Add Food | Track Fit" />
      <VStack width="100%" alignItems="stretch" spacing="4">
        <NutrientsStats nutrients={eatenCalories} />
        <NutrientsStats nutrients={foodIntake} />
        <HStack>
          <Button
            onClick={handleConsoomSelected}
            isDisabled={selectedFoods.size === 0}
          >
            Consoom
          </Button>
          <Spacer />
          <AddFood />
          <Button>Change goal</Button>
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
