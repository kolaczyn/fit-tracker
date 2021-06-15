import { Box, Flex, HStack, Spacer } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

import { LogoComponent } from './LogoComponent';


interface NavbarComponentProps {}

export const NavbarComponent: React.FC<NavbarComponentProps> = ({}) => {
  return (
    <Box bg="gray.900" p="2" w="100%" color="white" position="sticky">
      <Flex align="center">
        <LogoComponent />
        <Spacer />
        <HStack spacing={8} >
        <NextLink href="/">Home</NextLink>
        <NextLink href="/">Calculate BMI</NextLink>
        <NextLink href="/">Calculate TDEE</NextLink>
        <NextLink href="/">Add Calories</NextLink>
        <a target="_blank" href="https://github.com/kolaczyn/fit-tracker">
          Source Code
        </a>
        </HStack>
      </Flex>
    </Box>
  );
};
