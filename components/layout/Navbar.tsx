import { Box, Flex, HStack, Spacer } from '@chakra-ui/react';
import React from 'react';

import { AppLink } from '../ui/AppLink';
import { Logo } from '../ui/Logo';

export const Navbar: React.FC = ({}) => {
  return (
    <Box
      boxShadow="lg"
      top="0"
      zIndex="docked"
      bg="gray.900"
      mb="4"
      px="4"
      py="2"
      w="100%"
      position="sticky"
    >
      <Flex align="center">
        <Logo />
        <Spacer />
        <HStack spacing={2}>
          <AppLink href="/" label="Home" />
          <AppLink href="/calories" label="Calories" />
          <AppLink href="/food" label="Food" />
          <AppLink href="/meals" label="Meals" />
          <AppLink href="/calculator" label="Calculator" />
        </HStack>
      </Flex>
    </Box>
  );
};
