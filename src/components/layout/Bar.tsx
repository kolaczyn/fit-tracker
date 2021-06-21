import { BoxProps } from '@chakra-ui/layout';
import React from 'react';
import { AppBox } from '../ui/AppBox';

export const Bar: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <AppBox rounded="none" opacity="95%" boxShadow="lg" w="100%" px="4" py="2" {...props}>
      {children}
    </AppBox>
  );
};
