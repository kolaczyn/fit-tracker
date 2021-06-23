import React from 'react';
import { NutrientsI } from '../../customTypes';
import useEatenCalories from '../../hooks/useEatenCalories';
import { useAppSelector } from '../../redux/hooks';
import capitalizeFirstLetter from '../../utils/stringUtils/capitalizeFirstLetter';
import { IntakeProgressBar } from './IntakeProgressBar';

interface IntakeProgresProps {
  selected: NutrientsI<number>;
}

const nutrientsNames: (keyof NutrientsI<number>)[] = [
  'calories',
  'fat',
  'carbs',
  'protein',
];

export const IntakeProgress: React.FC<IntakeProgresProps> = ({ selected }) => {
  const nutrientsGoal = useAppSelector(state => state.trackIntake.intakeGoal);
  const { eatenCalories } = useEatenCalories();
  return (
    <>
      {nutrientsNames.map(nutrientName => (
        <IntakeProgressBar
          key={nutrientName}
          nutrientName={nutrientName}
          goal={nutrientsGoal[nutrientName]}
          alreadyEaten={eatenCalories[nutrientName]}
          selected={selected[nutrientName]}
        />
      ))}
    </>
  );
};
