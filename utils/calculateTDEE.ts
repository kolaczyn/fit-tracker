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

export const calculateTDEEForMale = (
  activityLevel: ActivityLevel,
  weight: number,
  height: number,
  age: number
) => {
  const multiplier = activityLevelToMultiplier[activityLevel];
  return multiplier * (13.75 * weight + 5 * height - 6.76 * age + 66);
};

export const calculateTDEEForFemale = (
  activityLevel: ActivityLevel,
  weight: number,
  height: number,
  age: number
) => {
  const multiplier = activityLevelToMultiplier[activityLevel];
  return multiplier * (9.56 * weight + 1.85 * height - 4.68 * age + 655);
};
