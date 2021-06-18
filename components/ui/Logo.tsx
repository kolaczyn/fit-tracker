import { Text } from '@chakra-ui/layout';
import React from 'react';
import NextLink from 'next/link';
import {  HStack } from '@chakra-ui/react';

export const Logo: React.FC = ({}) => {
  return (
    <NextLink href="/">
      <a>
        <HStack fontSize="3xl">
          <Text fontWeight="black">Track</Text>
          <Text fontWeight="medium">Fit</Text>
        </HStack>
      </a>
    </NextLink>
  );
};
