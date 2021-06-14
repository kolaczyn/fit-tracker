import { StatLabel, StatNumber } from '@chakra-ui/react';
import { Stat } from '@chakra-ui/stat';
import React from 'react';
import { Nutrients } from '../customTypes';

interface CurrentStatsComponentProps {
  nutrients: Nutrients;
}

export const CurrentStatsComponent: React.FC<CurrentStatsComponentProps> = ({
  nutrients,
}) => {
  return (
    <Stat>
      <StatLabel>Calories</StatLabel>
      <StatNumber>{nutrients.calories}</StatNumber>
    </Stat>
  );
};
