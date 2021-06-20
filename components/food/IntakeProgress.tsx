import { Box, BoxProps, Grid, HStack, Text, VStack } from '@chakra-ui/layout';
import React from 'react';

interface IntakeProgressProps {
  label: string;
  alreadyEaten: number;
  selected: number;
  goal: number;
}

const ProgressBox: React.FC<BoxProps> = ({ children, ...props }) => (
  <HStack
    spacing="0"
    height="6"
    shadow="lg"
    rounded="full"
    overflow="hidden"
    {...props}
  >
    {children}
  </HStack>
);

export const IntakeProgress: React.FC<IntakeProgressProps> = ({
  label,
  alreadyEaten,
  selected,
  goal,
}) => {
  const eatenProgress = Math.round((alreadyEaten / goal) * 100);
  const selectedProgress = Math.round((selected / goal) * 100);
  const isOverLimit = alreadyEaten > goal;
  return (
    <Grid templateColumns="1fr 2fr" gap={2}>
      <Text>{label}</Text>
      <Box textColor="black">
        {isOverLimit ? (
          <ProgressBox bg="red.400">
            <Text>{alreadyEaten - goal} Calories over limit</Text>
          </ProgressBox>
        ) : (
          <ProgressBox bg="teal.100">
            <Box height="100%" width={`${eatenProgress}%`} bg="green.400">
              <Text>{alreadyEaten}</Text>
            </Box>
            <Box height="100%" width={`${selectedProgress}%`} bg="green.300">
              <Text>{selected}</Text>
            </Box>
            <Text>{goal - alreadyEaten} Calories left</Text>
          </ProgressBox>
        )}
      </Box>
    </Grid>
  );
};
