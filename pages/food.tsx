import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import { HStack, Spacer, VStack } from '@chakra-ui/layout';
import React from 'react';

import { FoodItem } from '../components/food/FoodItem';
import { AddFoodContainer } from '../components/food/AddFood';
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { eatenCalories } = useEatenCalories();

  return (
    <>
      <NextSeo title="Add Food | Track Fit" />
      <VStack width="100%" alignItems="stretch" spacing="4">
        <NutrientsStats nutrients={eatenCalories} />
        <NutrientsStats nutrients={foodIntake} />
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
