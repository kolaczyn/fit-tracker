import calculateBMIStats, { BMIStats, BMICategory } from './bmiToStats';
import { BMIData } from './calculateBMI';

const cases: { bmiData: BMIData; answer: BMIStats }[] = [
  {
    bmiData: {
      heightInCm: 185,
      weightInKg: 86.8,
    },
    answer: {
      category: BMICategory.Overweight,
      currentBMI: 25.4,
      targetWeight: 85.22,
    },
  },
  {
    bmiData: {
      heightInCm: 170,
      weightInKg: 100,
    },
    answer: {
      category: BMICategory.Obesity,
      currentBMI: 34.6,
      targetWeight: 86.41,
    },
  },
  {
    bmiData: {
      heightInCm: 200,
      weightInKg: 70,
    },
    answer: {
      category: BMICategory.Underweight,
      currentBMI: 17.5,
      targetWeight: 74,
    },
  },
  {
    bmiData: {
      heightInCm: 183,
      weightInKg: 71,
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
    const { category, currentBMI, targetWeight } = calculateBMIStats(bmiData);
    expect(category).toBe(answer.category);
    expect(currentBMI).toBeCloseTo(answer.currentBMI, 1);
    if (answer.targetWeight !== null) {
      expect(targetWeight).toBeCloseTo(answer.targetWeight);
    } else {
      expect(targetWeight).toBe(null);
    }
  });
});
