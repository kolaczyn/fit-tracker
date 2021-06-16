import React from 'react';
import { GenderDependentContainer } from '../../containers/GenderDependentContainer';
import { TDEECalculatorForMenComponent } from './TDEECalculatorForMenComponent';
import { TDEECalculatorForWomen } from './TDEECalculatorForWomenComponent';

interface TDEECalculatorComponentProps {}

export const TDEECalculatorComponent: React.FC<TDEECalculatorComponentProps> =
  ({}) => {
    return (
      <GenderDependentContainer
        MaleComponent={TDEECalculatorForMenComponent}
        FemaleComponent={TDEECalculatorForWomen}
      />
    );
  };
