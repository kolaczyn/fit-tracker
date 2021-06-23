import calculateBMIStatsMetric, { BMIStats, BMICategory } from './bmiToStats';
import { BMIData, BMIDataMetric } from './calculateBMI';

const cases: { bmiData: BMIDataMetric; answer: BMIStats }[] = [
  {
    bmiData: {
      height: 185,
      weight: 86.8,
    },
    answer: {
      category: BMICategory.Overweight,
      currentBMI: 25.4,
      targetWeight: 85.22,
    },
  },
  {
    bmiData: {
      height: 170,
      weight: 100,
    },
    answer: {
      category: BMICategory.Obesity,
      currentBMI: 34.6,
      targetWeight: 86.41,
    },
  },
  {
    bmiData: {
      height: 200,
      weight: 70,
    },
    answer: {
      category: BMICategory.Underweight,
      currentBMI: 17.5,
      targetWeight: 74,
    },
  },
  {
    bmiData: {
      height: 183,
      weight: 71,
    },
    answer: {
      category: BMICategory.NormalWeight,
      currentBMI: 21.2,
      targetWeight: null,
    },
  },
];

describe('bmiToStats', () => {
  test.each(cases)('%o', ({ bmiData, answer }) => {
    const { category, currentBMI, targetWeight } =
      calculateBMIStatsMetric(bmiData);
    expect(category).toBe(answer.category);
    expect(currentBMI).toBeCloseTo(answer.currentBMI, 1);
    if (answer.targetWeight !== null) {
      expect(targetWeight).toBeCloseTo(answer.targetWeight);
    } else {
      expect(targetWeight).toBe(null);
    }
  });
});
