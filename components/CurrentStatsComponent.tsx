import { Grid, GridItem, StatLabel, StatNumber } from '@chakra-ui/react';
import { Stat } from '@chakra-ui/stat';
import React from 'react';
import { Nutrients } from '../customTypes';

interface CurrentStatsComponentProps {
  nutrients: Nutrients<number>;
}

// I'm using this in order to make TypeScript happy
const keysOfNutrients: Array<keyof Nutrients<number>> = [
  'calories',
  'fat',
  'carbs',
  'protein',
];

export const CurrentStatsComponent: React.FC<CurrentStatsComponentProps> = ({
  nutrients,
}) => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={4}>
      {keysOfNutrients.map(nutrientName => (
        <GridItem key={nutrientName}>
          <Stat>
            <StatLabel>{nutrientName}</StatLabel>
            <StatNumber>{nutrients[nutrientName]}</StatNumber>
          </Stat>
        </GridItem>
      ))}
    </Grid>
  );
};
