import React from 'react';
import { Gender } from '../../customTypes';
import { useAppSelector } from '../../redux/hooks';
import { TDEECalculatorForMenComponent } from './TDEECalculatorForMenComponent';
import { TDEECalculatorForWomen } from './TDEECalculatorForWomenComponent';

interface TDEECalculatorComponentProps {}

export const TDEECalculatorComponent: React.FC<TDEECalculatorComponentProps> =
  ({}) => {
    const gender = useAppSelector(state => state.metrics.gender);
    const isMale: boolean = gender === Gender.Male;
    return isMale ? (
      <TDEECalculatorForMenComponent />
    ) : (
      <TDEECalculatorForWomen />
    );
  };
