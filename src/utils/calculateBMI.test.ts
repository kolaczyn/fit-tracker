import { calculateBMIMetric } from './calculateBMI';

const cases: [number, number, number][] = [
  [25.5, 87.3, 185],
  [31.0, 95, 175],
  [21.2, 65, 175],
  [22.2, 50, 150],
];

describe('calculateBMI', () => {
  test.each(cases)(
    'should correctly calculate BMI of %s for %s kg %s cm',
    (correct, weightInKg, heightInCm) => {
      expect(calculateBMIMetric({ weightInKg, heightInCm })).toBeCloseTo(
        correct,
        1
      );
    }
  );
});
