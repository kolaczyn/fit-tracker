import { Box, Flex, HStack, Spacer } from '@chakra-ui/react';
import React from 'react';
import { useAppSelector } from '../../redux/hooks';

import { ColorSchemeSwitch } from '../ui/ColorSchemeSwitch';
import { Logo } from '../ui/Logo';
import { AppDrawer } from './AppDrawer';
import { Bar } from './Bar';
import { NavLinks } from './NavLinks';

export const Navbar: React.FC = ({}) => {
  const userEmail = useAppSelector(state => state.auth.user?.email);
  return (
    <Bar top="0" zIndex="sticky" position="sticky">
      <Flex align="center">
        <Logo />
        <Spacer />
        <HStack spacing={2}>
          <Box display={['none', 'none', 'initial']}>
            <NavLinks />
          </Box>
          <ColorSchemeSwitch />
          <AppDrawer />
        </HStack>
      </Flex>
    </Bar>
  );
};
