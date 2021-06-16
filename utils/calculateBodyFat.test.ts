import {
  calculateBodyFatForMen,
  calculateBodyFatForWomen,
  exportedForTesting,
} from './calculateBodyFat';

const { calculateBodyFat } = exportedForTesting;

describe('calculateBodyFat', () => {
  it('correctly calculates body fat solely based on body weight and lean body mass', () => {
    expect(calculateBodyFat(100, 60)).toBeCloseTo(40);
    expect(calculateBodyFat(80, 40)).toBeCloseTo(50);
    expect(calculateBodyFat(80, 70)).toBeCloseTo(12.5);
    expect(calculateBodyFat(75, 70)).toBeCloseTo(20 / 3);
  });
});

// TODO finish this
describe('calculateBodyFatForMen', () => {
  it('correctly calculates body fat for men', () => {
    expect(calculateBodyFatForMen(201, 37)).toBeCloseTo(21.22);
  });
});

describe('calculateBodyFatForWomen', () => {
  it('correctly calculates body fat for women', () => {
    expect(calculateBodyFatForWomen(180, 10, 32, 50, 24)).toBeCloseTo(14.5);
    expect(calculateBodyFatForWomen(140, 8, 30, 48, 22)).toBeCloseTo(11.48);
  });
});
