import { Flex, HStack, Spacer } from '@chakra-ui/react';
import React from 'react';

import { AppLink } from '../ui/AppLink';
import { ColorSchemeSwitch } from '../ui/ColorSchemeSwitch';
import { Logo } from '../ui/Logo';
import { Bar } from './Bar';

export const Navbar: React.FC = ({}) => {
  return (
    <Bar top="0" zIndex="sticky" position="sticky">
      <Flex align="center">
        <Logo />
        <Spacer />
        <HStack spacing={2}>
          <AppLink href="/" label="Home" />
          <AppLink href="/calories" label="Calories" />
          <AppLink href="/food" label="Food" />
          <AppLink href="/meals" label="Meals" />
          <AppLink href="/calculator" label="Calculator" />
          <ColorSchemeSwitch />
        </HStack>
      </Flex>
    </Bar>
  );
};
