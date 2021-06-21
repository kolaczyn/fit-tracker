import { Button, IconButton } from '@chakra-ui/button';
import { CloseIcon, SearchIcon } from '@chakra-ui/icons';
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/input';
import { HStack, Spacer, VStack } from '@chakra-ui/layout';
import { useBreakpointValue } from '@chakra-ui/media-query';
import { NextSeo } from 'next-seo';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';

import { AddFood } from '../components/food/AddFood';
import { Food } from '../customTypes';
import { FoodItem } from '../components/food/FoodItem';
import { IntakeProgress } from '../components/food/IntakeProgress';
import { SetGoal } from '../components/food/SetGoal';
import useSelectedFood from '../hooks/useSelectedFood';
import { SearchBar } from '../components/ui/SearchBar';
import FuzzySearch from 'fuzzy-search';

export const FoodPage: React.FC = () => {
  const {
    foodListArray,
    selectedFoods,
    foodIntake,
    handleConsoomSelected,
    isActive,
    toggleFood,
  } = useSelectedFood();
  const btnSize = useBreakpointValue(['sm', 'md']);

  // yeah, I'm using `useState` to store computed state. I couldn't figure out a better way to do this
  const [searchResult, setSearchResult] = useState(() => foodListArray);
  const [fuzzySearch, setFuzzySearch] = useState(
    () => new FuzzySearch(foodListArray, ['name', 'category'])
  );

  const fuzzySearchRef = useRef(fuzzySearch);
  fuzzySearchRef.current = fuzzySearch;
  const handleSearch = (inputValue: string) => {
    const result = fuzzySearchRef.current.search(inputValue);
    setSearchResult(result);
  };

  return (
    <>
      <NextSeo title="Add Food | Track Fit" />
      <VStack width="100%" alignItems="stretch" spacing="4">
        <IntakeProgress selected={foodIntake} />
        <HStack>
          <Button
            size={btnSize}
            onClick={handleConsoomSelected}
            isDisabled={selectedFoods.size === 0}
          >
            Consoom
          </Button>
          <Spacer />
          <AddFood />
          <SetGoal />
        </HStack>
        <SearchBar handleSearch={handleSearch} />
        <VStack width="100%" alignItems="stretch" spacing="3">
          {searchResult.map(food => (
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
