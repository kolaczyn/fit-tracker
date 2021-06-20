// as per:
//www.bmi-calculator.net/body-fat-calculator/body-fat-formula.php
// TODO IMPORTANT it looks like these function accept measurements in imperial units (pounds and inches)
// I'm gonna have to write a wrapper around these functions which accepts metric units

export interface BodyFatWomenData {
  weightInLb: number;
  writstInInch: number;
  hipInInch: number;
  forearmInInch: number;
  waistInInch: number;
}
export type BodyFatMenData = {
  weightInLb: number;
  waistInInch: number;
};

export const calculateBodyFatForWomen = (data: BodyFatWomenData) => {
  const { weightInLb, writstInInch, hipInInch, forearmInInch, waistInInch } =
    data;
  const factor1 = weightInLb * 0.732 + 8.987;
  const factor2 = writstInInch / 3.14;
  const factor3 = waistInInch * 0.157;
  const factor4 = hipInInch * 0.249;
  const factor5 = forearmInInch * 0.434;

  const leanBodyMass = factor1 + factor2 - factor3 - factor4 + factor5;
  return calculateBodyFat(weightInLb, leanBodyMass);
};

export const calculateBodyFatForMen = (data: BodyFatMenData) => {
  const { weightInLb, waistInInch } = data;
  const factor1 = weightInLb * 1.082 + 94.42;
  const factor2 = waistInInch * 4.15;

  const leanBodyMass = factor1 - factor2;
  return calculateBodyFat(weightInLb, leanBodyMass);
};

/** returns body fat in percentage */
const calculateBodyFat = (totalBodyWeight: number, leanBodyMass: number) => {
  const bodyFatWeight = totalBodyWeight - leanBodyMass;
  return (bodyFatWeight * 100) / totalBodyWeight;
};

export const exportedForTesting = {
  calculateBodyFat,
};
