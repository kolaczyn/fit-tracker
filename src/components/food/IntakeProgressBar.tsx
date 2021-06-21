import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, BoxProps, Grid, HStack, Text } from '@chakra-ui/layout';
import { Tag } from '@chakra-ui/tag';
import { Tooltip } from '@chakra-ui/tooltip';
import React from 'react';
import { NutrientsI } from '../../customTypes';
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter';
import nutrientToColorScheme from '../../utils/nutrientToColorScheme';
import prettyPrintGrams from '../../utils/prettyPrintGrams';

interface IntakeProgressBarProps {
  nutrientName: keyof NutrientsI<number>;
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
  nutrientName,
  alreadyEaten,
  selected,
  goal,
}) => {
  const bg = useColorModeValue('purple.50', 'gray.800');
  const darkGreen = useColorModeValue('green.300', 'green.600');
  const lightGreen = useColorModeValue('green.100', 'green.400');
  const red = useColorModeValue('red.300', 'red.400');
  const eatenProgress = Math.round((alreadyEaten / goal) * 100);
  const selectedProgress = Math.round((selected / goal) * 100);
  const progressLeft = 100 - eatenProgress - selectedProgress;
  const isOverLimit = alreadyEaten + selected > goal;
  return (
    <Grid templateColumns="3fr 1fr" gap="4">
      <Box fontWeight="bold">
        {isOverLimit ? (
          <ProgressBox bg={red}>
            <Box width="100%">
              {/* grams don't really apply for Calories, but whatever for now */}
              <Text textAlign="center">
                {prettyPrintGrams(alreadyEaten + selected - goal)} over limit
              </Text>
            </Box>
          </ProgressBox>
        ) : (
          <ProgressBox position="relative" bg={bg}>
            <Tooltip
              placement="bottom"
              label={`${Math.round(alreadyEaten)} Eaten`}
            >
              <Box height="100%" width={`${eatenProgress}%`} bg={darkGreen} />
            </Tooltip>
            <Tooltip
              placement="bottom"
              label={`${Math.round(selected)} Selected`}
            >
              <Box
                height="100%"
                width={`${selectedProgress}%`}
                bg={lightGreen}
              />
            </Tooltip>
            <Tooltip
              placement="bottom"
              label={`${Math.round(goal - alreadyEaten - selected)} Left`}
            >
              <Box height="100%" width={`${progressLeft}%`} />
            </Tooltip>
          </ProgressBox>
        )}
      </Box>

      <Tag
        colorScheme={nutrientToColorScheme[nutrientName]}
        justifySelf="flex-start"
      >
        <Text fontSize={['md', 'lg']} fontWeight="bold">
          {capitalizeFirstLetter(nutrientName)}
        </Text>
      </Tag>
    </Grid>
  );
};
