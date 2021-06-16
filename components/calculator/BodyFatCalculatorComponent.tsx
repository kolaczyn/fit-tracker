import React from 'react';
import { GenderDependentContainer } from '../../containers/GenderDependentContainer';
import { BodyFatCalculatorForMenComponent } from './BodyFatCalculatorForMenComponent';

interface BodyFatCalculatorComponentProps {}

// I don't have a Female calculator, and I need to pass in a component
// so for now it's the easier to create a throway component
const ThrowawayFemaleComponent: React.FC = () => <section>TODO</section>;

export const BodyFatCalculatorComponent: React.FC<BodyFatCalculatorComponentProps> =
  ({}) => {
    return (
      <GenderDependentContainer
        MaleComponent={BodyFatCalculatorForMenComponent}
        FemaleComponent={ThrowawayFemaleComponent}
      />
    );
  };
