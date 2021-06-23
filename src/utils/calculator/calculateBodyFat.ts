// as per:

import { cmToInch, kgToPound } from '../units/unitsConversion';

//www.bmi-calculator.net/body-fat-calculator/body-fat-formula.php
export type BodyFatWomenData = {
  weight: number;
  wrist: number;
  hip: number;
  forearm: number;
  waist: number;
};
export type BodyFatMenData = {
  weight: number;
  waist: number;
};
export type BodyFatWomenDataImperial = BodyFatWomenData;
export type BodyFatMenDataImperial = BodyFatMenData;
export type BodyFatWomenDataMetric = BodyFatWomenData;
export type BodyFatMenDataMetric = BodyFatMenData;

export const calculateBodyFatForWomenImperial = ({
  weight,
  wrist,
  hip,
  forearm,
  waist,
}: BodyFatWomenDataImperial): number => {
  const factor1 = weight * 0.732 + 8.987;
  const factor2 = wrist / 3.14;
  const factor3 = waist * 0.157;
  const factor4 = hip * 0.249;
  const factor5 = forearm * 0.434;

  const leanBodyMass = factor1 + factor2 - factor3 - factor4 + factor5;
  return calculateBodyFat(weight, leanBodyMass);
};

export const calculateBodyFatForMenImperial = ({
  weight,
  waist,
}: BodyFatMenDataImperial): number => {
  const factor1 = weight * 1.082 + 94.42;
  const factor2 = waist * 4.15;

  const leanBodyMass = factor1 - factor2;
  return calculateBodyFat(weight, leanBodyMass);
};

export const calculateBodyFatForWomenMetric = ({
  weight: weight,
  forearm: forearm,
  hip: hip,
  waist: waist,
  wrist: wrist,
}: BodyFatWomenDataMetric): number => {
  return calculateBodyFatForWomenImperial({
    forearm: cmToInch(forearm),
    hip: cmToInch(hip),
    waist: cmToInch(waist),
    weight: kgToPound(weight),
    wrist: cmToInch(wrist),
  });
};

export const calculateBodyFatForMenMetric = ({
  weight,
  waist,
}: BodyFatMenDataMetric): number => {
  return calculateBodyFatForMenImperial({
    waist: cmToInch(waist),
    weight: kgToPound(weight),
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
