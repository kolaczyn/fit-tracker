import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, BoxProps } from '@chakra-ui/layout';
import React from 'react';

export const Bar: React.FC<BoxProps> = ({ children, ...props }) => {
  const bg = useColorModeValue('purple.50', 'gray.800');
  const color = useColorModeValue('gray.900', 'white');
  const borderColor = useColorModeValue('green.100', 'gray.900');
  return (
    <Box borderTop="1px" borderBottom="1px" borderColor={borderColor} opacity="95%" boxShadow="lg" bg={bg} color={color} px="4" py="2" w="100%" {...props}>
      {children}
    </Box>
  );
};
