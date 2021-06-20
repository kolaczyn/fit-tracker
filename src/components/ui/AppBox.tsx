import { Box, BoxProps } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/react';
import React from 'react';

/** A Box with sane default - it looks good on dark and light mode */
export const AppBox: React.FC<BoxProps> = ({ children, ...props }) => {
  const bg = useColorModeValue('purple.50', 'gray.800');
  const color = useColorModeValue('gray.900', 'white');
  const borderColor = useColorModeValue('green.100', 'gray.900');
  return (
    <Box rounded="lg" shadow="md" p="4" bg={bg} color={color} borderColor={borderColor} {...props}>
      {children}
    </Box>
  );
};
