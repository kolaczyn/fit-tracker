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

export type TDEEData = {
  activityLevel: ActivityLevel;
  weight: number;
  height: number;
  age: number;
};
// I'm aliasin these variables to make it appear in the autocomplete
export type TDEEDataMetric = TDEEData;
export type TDEEDataImperial = TDEEData;

export const calculateTDEEForMaleMetric = (data: TDEEDataMetric) => {
  const { height: heightInCm, weight: weightInKg, activityLevel, age } = data;
  const multiplier = activityLevelToMultiplier[activityLevel];
  return multiplier * (13.75 * weightInKg + 5 * heightInCm - 6.76 * age + 66);
};
export const calculateTDEEForMaleImperial = ({
  weight,
  height,
  ...rest
}: TDEEDataImperial) =>
  calculateTDEEForMaleMetric({
    weight: poundsToKg(weight),
    height: inchToCm(height),
    ...rest,
  });

export const calculateTDEEForFemaleImperial = ({
  weight,
  height,
  ...rest
}: TDEEDataImperial) =>
  calculateTDEEForFemaleMetric({
    weight: poundsToKg(weight),
    height: inchToCm(height),
    ...rest,
  });

export const calculateTDEEForFemaleMetric = (data: TDEEDataMetric) => {
  const { height, weight, activityLevel, age } = data;
  const multiplier = activityLevelToMultiplier[activityLevel];
  return multiplier * (9.56 * weight + 1.85 * height - 4.68 * age + 655);
};
