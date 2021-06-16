import { ActivityLevel } from '../customTypes';
import {
  calculateTDEEForMale,
  calculateTDEEForFemale
} from './calculateTDEE';

describe('CalculateTDEEforMale', () => {
  it('correctly calculates TDEE for male', () => {
    // Vince
    expect(
      calculateTDEEForMale(ActivityLevel.LightlyActive, 83, 183, 40)
    ).toBeCloseTo(2546.29);

    // Dillon
    expect(
      calculateTDEEForMale(ActivityLevel.Sendetary, 83, 170, 28)
    ).toBeCloseTo(2241.564);
  });
});

describe('CalculateTDEEforFemal', () => {
  it('correctly calculates TDEE for female', () => {
    // Jennifer
    expect(
      calculateTDEEForFemale(ActivityLevel.VeryActive, 69, 178, 35)
    ).toBeCloseTo(2553.24);

  });
});
