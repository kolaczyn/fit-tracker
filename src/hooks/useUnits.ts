import { Units } from '../customTypes';
import { useAppSelector } from '../redux/hooks';

const useUnits = (): Record<
  'weightUnit' | 'lengthUnit' | 'ageUnit',
  string
> => {
  const unit = useAppSelector(state => state.metrics.units);

  return unit === Units.Imperial
    ? {
        weightUnit: 'pounds',
        lengthUnit: 'inches',
        ageUnit: 'Super Bowls',
      }
    : {
        weightUnit: 'kg',
        lengthUnit: 'cm',
        ageUnit: 'years',
      };
};
export default useUnits;
