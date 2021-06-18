import React from 'react';

import { useAppSelector } from '../../redux/hooks';
import isMale from '../../utils/isMale';

interface GenderDependentProps {
  MaleComponent: React.ComponentType;
  FemaleComponent: React.ComponentType;
}

export const GenderDependent: React.FC<GenderDependentProps> =
  ({ MaleComponent, FemaleComponent }) => {
    const gender = useAppSelector(state => state.metrics.gender);

    return isMale(gender) ? <MaleComponent /> : <FemaleComponent />;
  };
