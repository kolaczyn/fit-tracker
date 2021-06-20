import React from 'react';
import { Nutrients } from '../../customTypes';
import useEatenCalories from '../../hooks/useEatenCalories';
import { useAppSelector } from '../../redux/hooks';
import { IntakeProgressBar } from './IntakeProgressBar';

interface IntakeProgresProps {
  selected: Nutrients<number>;
}

export const IntakeProgress: React.FC<IntakeProgresProps> = ({ selected }) => {
  const nutrientsGoal = useAppSelector(state => state.trackIntake.intakeGoal);
  const { eatenCalories } = useEatenCalories();
  return (
    <>
      <IntakeProgressBar
        label={`Calories Goal: ${nutrientsGoal.calories}`}
        goal={nutrientsGoal.calories}
        alreadyEaten={eatenCalories.calories}
        selected={selected.calories}
      />
    </>
  );
};
