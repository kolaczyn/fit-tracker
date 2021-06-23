import { ActivityLevel } from '../customTypes';
import { inchToCm, poundsToKg } from './unitsConversion';

// as per:
//https://healthyweightlossperweek.org/knowledge-base/total-daily-energy-expenditure-tdee-formula-and-examples/

const activityLevelToMultiplier: Record<ActivityLevel, number> = {
  [ActivityLevel.Sendetary]: 1.2,
  [ActivityLevel.LightlyActive]: 1.375,
  [ActivityLevel.ModerateActive]: 1.55,
  [ActivityLevel.VeryActive]: 1.725,
  [ActivityLevel.ExtremelyActive]: 1.9,
};

export interface TDEEDataMetric {
  activityLevel: ActivityLevel;
  weightInKg: number;
  heightInCm: number;
  age: number;
}
export interface TDEEDataImperial {
  activityLevel: ActivityLevel;
  weightInLb: number;
  heightInInch: number;
  age: number;
}

export const calculateTDEEForMaleMetric = (data: TDEEDataMetric) => {
  const { heightInCm, weightInKg, activityLevel, age } = data;
  const multiplier = activityLevelToMultiplier[activityLevel];
  return multiplier * (13.75 * weightInKg + 5 * heightInCm - 6.76 * age + 66);
};
export const calculateTDEEForMaleImperial = ({
  weightInLb,
  heightInInch,
  ...rest
}: TDEEDataImperial) =>
  calculateTDEEForMaleMetric({
    weightInKg: poundsToKg(weightInLb),
    heightInCm: inchToCm(heightInInch),
    ...rest,
  });

export const calculateTDEEForFemaleImperial = ({
  weightInLb,
  heightInInch,
  ...rest
}: TDEEDataImperial) =>
  calculateTDEEForFemaleMetric({
    weightInKg: poundsToKg(weightInLb),
    heightInCm: inchToCm(heightInInch),
    ...rest,
  });

export const calculateTDEEForFemaleMetric = (data: TDEEDataMetric) => {
  const { heightInCm, weightInKg, activityLevel, age } = data;
  const multiplier = activityLevelToMultiplier[activityLevel];
  return (
    multiplier * (9.56 * weightInKg + 1.85 * heightInCm - 4.68 * age + 655)
  );
};
