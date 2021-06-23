import { ActivityLevel } from '../customTypes';
import {
  calculateTDEEForMaleMetric,
  calculateTDEEForFemaleMetric,
  TDEEDataMetric,
} from './calculateTDEE';

const maleCases: [number, TDEEDataMetric][] = [
  [
    2546.29,
    {
      activityLevel: ActivityLevel.LightlyActive,
      weightInKg: 83,
      heightInCm: 183,
      age: 40,
    },
  ],
  [
    2241.564,
    {
      activityLevel: ActivityLevel.Sendetary,
      weightInKg: 83,
      heightInCm: 170,
      age: 28,
    },
  ],
];

const femaleCases: [number, TDEEDataMetric][] = [
  [
    2553.24,
    {
      activityLevel: ActivityLevel.VeryActive,
      weightInKg: 69,
      heightInCm: 178,
      age: 35,
    },
  ],
];

describe('CalculateTDEEforMale', () => {
  test.each(maleCases)(
    'correctly calculates TDEE for male %s <- %s',
    (correct, data) => {
      expect(calculateTDEEForMaleMetric(data)).toBeCloseTo(correct);
    }
  );
});
describe('CalculateTDEEforFemale', () => {
  test.each(femaleCases)(
    'correctly calculates TDEE for female %s <- %s',
    (correct, data) => {
      expect(calculateTDEEForFemaleMetric(data)).toBeCloseTo(correct);
    }
  );
});
