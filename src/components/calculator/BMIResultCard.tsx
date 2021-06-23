import { Heading, Text } from '@chakra-ui/layout';
import React, { useEffect } from 'react';
import { useAppSelector } from '../../redux/hooks';
import calculateBMIStatsMetric, { BMICategory } from '../../utils/bmiToStats';

interface BMIResultCardProps {}

export const BMIResultCard: React.FC<BMIResultCardProps> = ({}) => {
  const metrics = useAppSelector(state => state.metrics);
  if (metrics.height === null || metrics.weight === null) return null;

  const bmiStats = calculateBMIStatsMetric({
    heightInCm: metrics.height,
    weightInKg: metrics.weight,
  });

  return (
    <>
      <Text>
        Your BMI is {bmiStats.currentBMI.toFixed(1)}, you are in the{' '}
        {bmiStats?.category} category
      </Text>
      {bmiStats.targetWeight !== null ? (
        <Text>
          You need to reached the weight {bmiStats.targetWeight.toFixed(1)}
          to be in a better category
        </Text>
      ) : null}
      <Heading fontSize="xl" my={1} as="h3">What is BMI?</Heading>
      <Text>
        Is stands for Body Mass Index. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Deserunt laboriosam veniam, alias ipsam nesciunt
        temporibus modi quos deleniti mollitia quidem.
      </Text>
    </>
  );
};
