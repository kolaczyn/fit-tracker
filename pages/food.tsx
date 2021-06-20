import { Button } from '@chakra-ui/button';
import { HStack, Spacer, VStack } from '@chakra-ui/layout';
import { NextSeo } from 'next-seo';
import React from 'react';

import { AddFood } from '../components/food/AddFood';
import { FoodItem } from '../components/food/FoodItem';
import { IntakeProgress } from '../components/food/IntakeProgress';
import { SetGoal } from '../components/food/SetGoal';
import useSelectedFood from '../hooks/useSelectedFood';

export const FoodPage: React.FC = () => {
  const {
    foodListArray,
    selectedFoods,
    foodIntake,
    handleConsoomSelected,
    isActive,
    toggleFood,
  } = useSelectedFood();

  return (
    <>
      <NextSeo title="Add Food | Track Fit" />
      <VStack width="100%" alignItems="stretch" spacing="4">
        <IntakeProgress selected={foodIntake} />
        <HStack>
          <Button
            onClick={handleConsoomSelected}
            isDisabled={selectedFoods.size === 0}
          >
            Consoom
          </Button>
          <Spacer />
          <AddFood />
          <SetGoal />
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
