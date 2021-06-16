import React from 'react';

import { Gender } from '../customTypes';
import { useAppSelector } from '../redux/hooks';

interface GenderDependentContainerProps {
  MaleComponent: React.ComponentType;
  FemaleComponent: React.ComponentType;
}

export const GenderDependentContainer: React.FC<GenderDependentContainerProps> =
  ({ MaleComponent, FemaleComponent }) => {
    const gender = useAppSelector(state => state.metrics.gender);
    const isMale: boolean = gender === Gender.Male;

    return isMale ? <MaleComponent /> : <FemaleComponent />;
  };
