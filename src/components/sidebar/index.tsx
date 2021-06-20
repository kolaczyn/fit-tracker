import { BoxProps, Heading, Text, VStack } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';
import React from 'react';
import { WaterTracker } from './WaterTracker';

export const Sidebar: React.FC = () => {
  return (
    <Box>
      {/* the top is hardcoded to offset the sticky navbar */}
      <VStack position="sticky" top="80px">
        <WaterTracker />
      </VStack>
    </Box>
  );
};
