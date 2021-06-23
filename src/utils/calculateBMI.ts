import { XOR } from 'ts-xor';
import { inchToCm, poundsToKg } from './unitsConversion';
export type BMIDataMetric = {
  weightInKg: number;
  heightInCm: number;
};
export type BMIDataImperial = {
  weighInLb: number;
  heightInInch: number;
};

export type BMIData = XOR<BMIDataMetric, BMIDataImperial>;

export const calculateBMIMetric = ({ weightInKg, heightInCm }: BMIDataMetric) =>
  weightInKg / Math.pow(heightInCm / 100, 2);

export const calculateBMIImperial = ({
  weighInLb: weighInPound,
  heightInInch,
}: BMIDataImperial) =>
  calculateBMIMetric({
    weightInKg: poundsToKg(weighInPound),
    heightInCm: inchToCm(heightInInch),
  });
