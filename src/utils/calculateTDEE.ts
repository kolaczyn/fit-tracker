import { ActivityLevel } from '../customTypes';

// as per:
//https://healthyweightlossperweek.org/knowledge-base/total-daily-energy-expenditure-tdee-formula-and-examples/

const activityLevelToMultiplier: Record<ActivityLevel, number> = {
  [ActivityLevel.Sendetary]: 1.2,
  [ActivityLevel.LightlyActive]: 1.375,
  [ActivityLevel.ModerateActive]: 1.55,
  [ActivityLevel.VeryActive]: 1.725,
  [ActivityLevel.ExtremelyActive]: 1.9,
};

export interface TDEEData {
  activityLevel: ActivityLevel;
  weightInKg: number;
  heightInCm: number;
  age: number;
}

export const calculateTDEEForMale = (data: TDEEData) => {
  const { heightInCm, weightInKg, activityLevel, age } = data;
  const multiplier = activityLevelToMultiplier[activityLevel];
  return multiplier * (13.75 * weightInKg + 5 * heightInCm - 6.76 * age + 66);
};

export const calculateTDEEForFemale = (data: TDEEData) => {
  const { heightInCm, weightInKg, activityLevel, age } = data;
  const multiplier = activityLevelToMultiplier[activityLevel];
  return (
    multiplier * (9.56 * weightInKg + 1.85 * heightInCm - 4.68 * age + 655)
  );
};
