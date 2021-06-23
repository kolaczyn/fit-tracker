import { Box, Heading } from '@chakra-ui/layout';
import React from 'react';
import { WeightChart } from '../charts/WeightChart';
import { AppBox } from '../ui/AppBox';

export const WeightProgress: React.FC = ({}) => {
  return (
    <AppBox width="100%">
      <Heading fontSize="3xl">Weight</Heading>
      <Box marginY="2">
        <hr />
      </Box>
      <WeightChart />
    </AppBox>
  );
};
