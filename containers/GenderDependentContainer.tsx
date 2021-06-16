import React from 'react';

import { useAppSelector } from '../redux/hooks';
import isMale from '../utils/isMale';

interface GenderDependentContainerProps {
  MaleComponent: React.ComponentType;
  FemaleComponent: React.ComponentType;
}

export const GenderDependentContainer: React.FC<GenderDependentContainerProps> =
  ({ MaleComponent, FemaleComponent }) => {
    const gender = useAppSelector(state => state.metrics.gender);

    return isMale(gender) ? <MaleComponent /> : <FemaleComponent />;
  };
