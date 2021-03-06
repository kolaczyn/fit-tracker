import { Grid, GridItem, Stat, StatLabel, StatNumber } from '@chakra-ui/react';
import React from 'react';
import { NutrientsI } from '../../customTypes';
import prettyPrintGrams from '../../utils/stringUtils/prettyPrintGrams';

interface NutrientsStatsProps {
  nutrients: NutrientsI<number>;
}

// I'm using this in order to make TypeScript happy
const keysOfNutrients: Array<keyof NutrientsI<number>> = [
  'calories',
  'fat',
  'carbs',
  'protein',
];

export const NutrientsStats: React.FC<NutrientsStatsProps> = ({
  nutrients,
}) => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={4}>
      {keysOfNutrients.map(nutrientName => (
        <GridItem key={nutrientName}>
          <Stat>
            <StatLabel>{nutrientName}</StatLabel>
            {/* don't show the g or mg in calories */}
            {/* i don't like this long code, might want to do something about it */}
            <StatNumber>{nutrientName === 'calories' ? nutrients[nutrientName] : prettyPrintGrams(nutrients[nutrientName])}</StatNumber>
          </Stat>
        </GridItem>
      ))}
    </Grid>
  );
};
