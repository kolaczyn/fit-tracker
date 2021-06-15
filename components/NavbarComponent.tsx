import { Box, Flex, HStack, Spacer } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

import { LogoComponent } from './LogoComponent';


interface NavbarComponentProps {}

export const NavbarComponent: React.FC<NavbarComponentProps> = ({}) => {
  return (
    <Box boxShadow="lg" top="0" zIndex="9001" bg="gray.900" mb="4" px="4" py="2" w="100%" color="white" position="sticky">
      <Flex align="center">
        <LogoComponent />
        <Spacer />
        <HStack spacing={8} >
        <NextLink href="/">Home</NextLink>
        <NextLink href="/">Calories</NextLink>
        <NextLink href="/calculator">Calculator</NextLink>
        </HStack>
      </Flex>
    </Box>
  );
};
