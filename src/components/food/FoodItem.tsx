import { Checkbox } from '@chakra-ui/checkbox';
import { EditIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, HStack, Spacer, Text, VStack } from '@chakra-ui/layout';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu';
import { IconButton, Stack, Tag, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import { Food } from '../../customTypes';
import prettyPrintGrams from '../../utils/prettyPrintGrams';
import { AppBox } from '../ui/AppBox';

interface FoodItemProps {
  food: Food;
  toggleFood: (id: string) => void;
  isActive: boolean;
}

export const FoodItem: React.FC<FoodItemProps> = ({
  food,
  toggleFood,
  isActive,
}) => {
  return (
    <AppBox
      data-testid="food-component"
      cursor="pointer"
      onClick={() => toggleFood(food.id)}
    >
      <Flex>
        <VStack align="left">
          <HStack>
            <Text as="b">{food.name}</Text>
            <Tag size="sm" colorScheme="cyan">
              {food.category}
            </Tag>
          </HStack>
          <HStack>
            <Stack direction={['column', 'column', 'row']}>
              <Text as="i">{food.nutrients.calories} Calories</Text>
              <HStack>
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
            </Stack>
          </HStack>
        </VStack>
        <Spacer />
        <VStack>
          {/* the way I implement this checkbox may not be the most accessable */}
          <Checkbox data-testid="food-toggle-checkbox" isChecked={isActive} />
          {/* we stop the propagation, so clicking the menu doesn't toggle selection of the food */}
          {/* Had to get rid of this for now, because it was causing some weird mobile layout issues */}
          {/* <Menu>
            <MenuButton
              as={IconButton}
              aira-label="More"
              icon={<HamburgerIcon />}
              variant="ghost"
              onClick={e => e.stopPropagation()}
            />
            <MenuList>
              <MenuItem>
                <EditIcon />
                Edit
              </MenuItem>
              <MenuItem>Delete</MenuItem>
            </MenuList>
          </Menu> */}
        </VStack>
      </Flex>
    </AppBox>
  );
};
