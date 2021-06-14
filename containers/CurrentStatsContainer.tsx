import React from 'react';
import { CurrentStatsComponent } from '../components/CurrentStatsComponent';

import { useAppSelector } from '../redux/hooks';

interface CurrentStatsContainerProps {}

export const CurrentStatsContainer: React.FC<CurrentStatsContainerProps> =
  ({}) => {
    const nutrients = useAppSelector(state => state.nutrients);

    return <CurrentStatsComponent nutrients={nutrients} />;
  };
