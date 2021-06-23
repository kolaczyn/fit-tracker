// as per:

import { cmToInch, kgToPound } from './unitsConversion';

//www.bmi-calculator.net/body-fat-calculator/body-fat-formula.php
export interface BodyFatWomenDataImperial {
  weightInLb: number;
  writstInInch: number;
  hipInInch: number;
  forearmInInch: number;
  waistInInch: number;
}
export type BodyFatMenDataImperial = {
  weightInLb: number;
  waistInInch: number;
};
export interface BodyFatWomenDataMetric {
  weightInKg: number;
  writstInCm: number;
  hipInCm: number;
  forearmInCm: number;
  waistInCm: number;
}
export type BodyFatMenDataMetric = {
  weightInKg: number;
  waistInCm: number;
};

export const calculateBodyFatForWomenImperial = ({
  weightInLb,
  writstInInch,
  hipInInch,
  forearmInInch,
  waistInInch,
}: BodyFatWomenDataImperial): number => {
  const factor1 = weightInLb * 0.732 + 8.987;
  const factor2 = writstInInch / 3.14;
  const factor3 = waistInInch * 0.157;
  const factor4 = hipInInch * 0.249;
  const factor5 = forearmInInch * 0.434;

  const leanBodyMass = factor1 + factor2 - factor3 - factor4 + factor5;
  return calculateBodyFat(weightInLb, leanBodyMass);
};

export const calculateBodyFatForMenImperial = ({
  weightInLb,
  waistInInch,
}: BodyFatMenDataImperial): number => {
  const factor1 = weightInLb * 1.082 + 94.42;
  const factor2 = waistInInch * 4.15;

  const leanBodyMass = factor1 - factor2;
  return calculateBodyFat(weightInLb, leanBodyMass);
};

export const calculateBodyFatForWomenMetric = ({
  weightInKg,
  forearmInCm,
  hipInCm,
  waistInCm,
  writstInCm,
}: BodyFatWomenDataMetric): number => {
  return calculateBodyFatForWomenImperial({
    forearmInInch: cmToInch(forearmInCm),
    hipInInch: cmToInch(hipInCm),
    waistInInch: cmToInch(waistInCm),
    weightInLb: kgToPound(weightInKg),
    writstInInch: cmToInch(writstInCm),
  });
};

export const calculateBodyFatForMenMetric = ({
  weightInKg,
  waistInCm,
}: BodyFatMenDataMetric): number => {
  return calculateBodyFatForMenImperial({
    waistInInch: cmToInch(waistInCm),
    weightInLb: kgToPound(weightInKg),
  });
};
/** returns body fat in percentage */
const calculateBodyFat = (totalBodyWeight: number, leanBodyMass: number) => {
  const bodyFatWeight = totalBodyWeight - leanBodyMass;
  return (bodyFatWeight * 100) / totalBodyWeight;
};

export const exportedForTesting = {
  calculateBodyFat,
};
