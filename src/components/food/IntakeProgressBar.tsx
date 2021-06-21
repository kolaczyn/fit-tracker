import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, BoxProps, Grid, HStack, Text } from '@chakra-ui/layout';
import { Tag } from '@chakra-ui/tag';
import React from 'react';

interface IntakeProgressBarProps {
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

export const IntakeProgressBar: React.FC<IntakeProgressBarProps> = ({
  label,
  alreadyEaten,
  selected,
  goal,
}) => {
  const bg = useColorModeValue('purple.50', 'gray.800');
  const eatenProgress = Math.round((alreadyEaten / goal) * 100);
  const selectedProgress = Math.round((selected / goal) * 100);
  const progressLeft = 100 - eatenProgress - selectedProgress;
  const isOverLimit = alreadyEaten + selected > goal;
  return (
    <Grid templateColumns="3fr 1fr" gap="4">
      <Box>
        {isOverLimit ? (
          <ProgressBox bg="red.400"></ProgressBox>
        ) : (
          <ProgressBox bg={bg}>
            <Box height="100%" width={`${eatenProgress}%`} bg="green.300" />
            <Box height="100%" width={`${selectedProgress}%`} bg="green.100" />
            <Box height="100%" width={`${progressLeft}%`} />
          </ProgressBox>
        )}
      </Box>
      <Tag justifySelf="flex-start">
        <Text fontSize={['md', 'lg']} fontWeight="bold">
          {label}
        </Text>
      </Tag>
    </Grid>
  );
};
