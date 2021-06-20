import { Box, Heading } from '@chakra-ui/layout';
import React from 'react';
import { WeightChart } from '../charts/WeightChart';
import { AppBox } from '../ui/AppBox';

export const WeightProgress: React.FC = ({}) => {
  return (
      <AppBox width="100%">
        <Heading fontSize="3xl" borderBottomWidth="1px">Weight</Heading>
        <Box my="2" />
        <WeightChart />
      </AppBox>
  );
};
