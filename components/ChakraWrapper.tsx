import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import theme from '../theme';

export const ChakraWrapper: React.FC = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
