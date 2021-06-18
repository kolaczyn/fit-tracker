import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';

export const ChakraWrapper: React.FC = ({ children }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};
