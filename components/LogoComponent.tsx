import { Text } from '@chakra-ui/layout';
import React from 'react';
import NextLink from 'next/link';
import { HStack } from '@chakra-ui/react';

interface LogoComponentProps {}

export const LogoComponent: React.FC<LogoComponentProps> = ({}) => {
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
