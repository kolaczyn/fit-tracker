import { BoxProps, Heading, Text, VStack } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';
import React from 'react';
import { WaterTracker } from './WaterTracker';
import { WeightProgress } from './WeightProgress';

export const Sidebar: React.FC<BoxProps> = ({ ...props }: BoxProps) => {
  return (
    <Box {...props}>
      {/* the top is hardcoded to offset the sticky navbar */}
      <VStack alignItems="stretch" position="sticky" spacing="4" top="80px">
        <WaterTracker />
        <WeightProgress />
      </VStack>
    </Box>
  );
};
