import React from 'react';
import { Gender } from '../../customTypes';
import { useAppSelector } from '../../redux/hooks';
import { BodyFatCalculatorForMenComponent } from './BodyFatCalculatorForMenComponent';

interface BodyFatCalculatorComponentProps {}

export const BodyFatCalculatorComponent: React.FC<BodyFatCalculatorComponentProps> =
  ({}) => {
    const gender = useAppSelector(state => state.metrics.gender);
    const isMale: boolean = gender === Gender.Male;

    return isMale ? (
      <BodyFatCalculatorForMenComponent />
    ) : (
      <section>TODO</section>
    );
  };
