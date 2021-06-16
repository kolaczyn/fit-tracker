import React, { useState } from 'react';
import { Checkbox } from '@chakra-ui/checkbox';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, HStack, Spacer, Text, VStack } from '@chakra-ui/layout';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu';

import { Food } from '../customTypes';
import { Button, Tag } from '@chakra-ui/react';
import prettyPrintGrams from '../utils/prettyPrintGrams';

interface FoodComponentProps {
  food: Food;
  toggleFood: (id: number) => void;
  isActive: boolean;
}

const HamburgerButton: React.ComponentType = ({ ...props }) => (
  <Button {...props} backgroundColor="transparent">
    <HamburgerIcon />
  </Button>
);

export const FoodComponent: React.FC<FoodComponentProps> = ({
  food,
  toggleFood,
  isActive,
}) => {
  return (
    <Flex
      bg="gray.900"
      p="3"
      cursor="pointer"
      onClick={() => toggleFood(food.id)}
      rounded="lg"
      shadow="md"
    >
      <VStack align="left">
        <HStack>
          <Text as="b">{food.name}</Text>
          <Tag size="sm" colorScheme="cyan">
            {food.category}
          </Tag>
        </HStack>
        <HStack>
          <Text as="i">{food.nutrients.calories} Calories</Text>
          <Tag size="sm" colorScheme="red">
            Fat: {prettyPrintGrams(food.nutrients.fat)}
          </Tag>
          <Tag size="sm" colorScheme="yellow">
            Carbs: {prettyPrintGrams(food.nutrients.carbs)}
          </Tag>
          <Tag size="sm" colorScheme="green">
            Protein: {prettyPrintGrams(food.nutrients.protein)}
          </Tag>
        </HStack>
      </VStack>
      <Spacer />
      <HStack>
        {/* the way I implement this checkbox may not be the most accessable */}
        <Checkbox isChecked={isActive}/>
        {/* we stop the propagation, so clicking the menu doesn't toggle selection of the food */}
        <Box onClick={e => e.stopPropagation()}>
          <Menu>
            <MenuButton as={HamburgerButton} />
            <MenuList>
              <MenuItem>Edit</MenuItem>
              <MenuItem>Delete</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </HStack>
    </Flex>
  );
};