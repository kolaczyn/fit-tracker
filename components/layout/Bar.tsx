import { Box, BoxProps } from '@chakra-ui/layout';
import React from 'react';

export const Bar: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box boxShadow="lg" px="4" py="2" w="100%" {...props}>
      {children}
    </Box>
  );
};
