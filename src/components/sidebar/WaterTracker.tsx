import { Box, Button, Heading, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { AppBox } from '../ui/AppBox';

interface WaterTrackerProps {}

// 8 glasses per day (about 2 liters)
const WATER_GOAL = 8;

export const WaterTracker: React.FC<WaterTrackerProps> = ({}) => {
  const [glassesDrank, setGlassesDrank] = useState(0);

  const hitGoalMessage = glassesDrank >= 8 ? 'Good job! 👍' : 'Try to hit 8.';
  const incrementGlasses = () => setGlassesDrank(old => old + 1);
  return (
    <AppBox>
      <Heading fontSize="3xl" borderBottomWidth="1px">
        Water Tracker
      </Heading>
      <Text my="2">
        You drank {glassesDrank} glasses of water today. {hitGoalMessage}
      </Text>
      <Button colorScheme="blue" onClick={incrementGlasses}>
        Drink a glass of water
      </Button>
    </AppBox>
  );
};
