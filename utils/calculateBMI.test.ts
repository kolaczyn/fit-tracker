import calculateBMI from './calculateBMI';

describe('calculateBMI', () => {
  it('correctly calculates BMI', () => {
    expect(calculateBMI(87.3, 185)).toBeCloseTo(25.5, 1);
    expect(calculateBMI(95, 175)).toBeCloseTo(31.0, 1);
    expect(calculateBMI(65, 175)).toBeCloseTo(21.2, 1);
    expect(calculateBMI(50, 150)).toBeCloseTo(22.2, 1);
  });
});
