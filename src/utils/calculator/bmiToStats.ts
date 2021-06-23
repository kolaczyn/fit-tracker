import { calculateBMIMetric, BMIDataMetric } from './calculateBMI';

export enum BMICategory {
  Underweight = 'Underweight ',
  NormalWeight = 'Normal Weight',
  Overweight = 'Overweight',
  Obesity = 'Obesity',
}

const bmiToCategory = (
  bmi: number
): { category: BMICategory; targetBMI: number | null } => {
  if (bmi <= 18.5)
    return { category: BMICategory.Underweight, targetBMI: 18.5 };
  if (bmi <= 24.9)
    return { category: BMICategory.NormalWeight, targetBMI: null };
  if (bmi <= 29.9) return { category: BMICategory.Overweight, targetBMI: 24.9 };
  return { category: BMICategory.Obesity, targetBMI: 29.9 };
};

const heightAndBMIToWeight = ({
  height,
  targetBMI,
}: {
  height: number;
  targetBMI: number;
}) => targetBMI * (height / 100) ** 2;

export type BMIStats = {
  category: BMICategory;
  targetWeight: number | null;
  currentBMI: number;
};

const calculateBMIStatsMetric = ({
  height,
  weight,
}: BMIDataMetric): BMIStats => {
  const currentBMI = calculateBMIMetric({
    height,
    weight,
  });
  const { category, targetBMI } = bmiToCategory(currentBMI);

  let targetWeight =
    targetBMI === null
      ? null
      : heightAndBMIToWeight({ height: height, targetBMI });

  return { category, currentBMI, targetWeight };
};

export default calculateBMIStatsMetric;
