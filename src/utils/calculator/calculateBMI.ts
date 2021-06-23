import { XOR } from 'ts-xor';
import { inchToCm, poundsToKg } from '../units/unitsConversion';
export type BMIDataMetric = {
  weight: number;
  height: number;
};
export type BMIDataImperial = {
  weight: number;
  height: number;
};

export type BMIData = XOR<BMIDataMetric, BMIDataImperial>;

export const calculateBMIMetric = ({ weight, height }: BMIDataMetric) =>
  weight / Math.pow(height / 100, 2);

export const calculateBMIImperial = ({
  weight,
  height,
}: BMIDataImperial) =>
  calculateBMIMetric({
    weight: poundsToKg(weight),
    height: inchToCm(height),
  });
