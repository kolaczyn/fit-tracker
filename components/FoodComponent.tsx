import React, { useState } from 'react';
import { Checkbox } from '@chakra-ui/checkbox';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, HStack, Spacer, Text, VStack } from '@chakra-ui/layout';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu';

import { Food } from '../customTypes';
import { Button, Tag } from '@chakra-ui/react';

interface FoodComponentProps {
  food: Food;
}

const HamburgerButton: React.ComponentType = ({ ...props }) => (
  <Button {...props} backgroundColor="transparent">
    <HamburgerIcon />
  </Button>
);

export const FoodComponent: React.FC<FoodComponentProps> = ({ food }) => {
  const [isOn, setIsOn] = useState(false);
  return (
    <Flex
      bg="gray.900"
      p="3"
      cursor="pointer"
      onClick={() => setIsOn(old => !old)}
      rounded="lg"
      shadow="md"
    >
      <VStack align="left">
        <HStack>
          <Text as="b">{food.name}</Text>
          <Tag size="sm" colorScheme="cyan">{food.category}</Tag>
        </HStack>
        <HStack>
        <Text as="i">{food.nutrients.calories} Calories</Text>
          <Tag size="sm" colorScheme="red">Fat: {food.nutrients.fat}</Tag>
          <Tag size="sm" colorScheme="yellow">Carbs: {food.nutrients.carbs}</Tag>
          <Tag size="sm" colorScheme="green">Protein: {food.nutrients.protein}</Tag>


        </HStack>
      </VStack>
      <Spacer />
      <HStack>
        <Checkbox isChecked={isOn} />
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
