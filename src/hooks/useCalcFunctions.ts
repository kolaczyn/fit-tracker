import { XOR } from 'ts-xor';
import { Gender, Units } from '../customTypes';
import { useAppSelector } from '../redux/hooks';
import {
  calculateBMIImperial,
  calculateBMIMetric,
} from '../utils/calculateBMI';
import {
  calculateBodyFatForMenMetric,
  calculateBodyFatForMenImperial,
  calculateBodyFatForWomenImperial,
  calculateBodyFatForWomenMetric,
  BodyFatMenData,
  BodyFatWomenData,
} from '../utils/calculateBodyFat';
import {
  calculateTDEEForMaleMetric,
  calculateTDEEForFemaleImperial,
  calculateTDEEForFemaleMetric,
  calculateTDEEForMaleImperial,
  TDEEData,
} from '../utils/calculateTDEE';

/** returns correct functions depending on the gender and units of measurement */
const useCalcFunctions = (): {
  bmiCalc: (data: { weight: number; height: number }) => number;
  bodyFatCalc: XOR<
    (data: BodyFatMenData) => number,
    (data: BodyFatWomenData) => number
  >;
  TDEECalc: (data: TDEEData) => number;
} => {
  // just trust me, it grabs currently selected gender and units
  const { gender, units } = useAppSelector(
    ({ metrics: { gender, units } }) => ({ gender, units })
  );

  return {
    bmiCalc: units === Units.Metric ? calculateBMIMetric : calculateBMIImperial,
    ...genderUnitsToFuncs[gender][units],
  };
};

const genderUnitsToFuncs = {
  // const loremIpsum: Record<Gender, Record<Units, 'bodyFatCalc' | 'TDEECalc'>> = {
  [Gender.Male]: {
    [Units.Metric]: {
      bodyFatCalc: calculateBodyFatForMenMetric,
      TDEECalc: calculateTDEEForMaleMetric,
    },
    [Units.Imperial]: {
      bodyFatCalc: calculateBodyFatForMenImperial,
      TDEECalc: calculateTDEEForMaleImperial,
    },
  },
  [Gender.Female]: {
    [Units.Metric]: {
      bodyFatCalc: calculateBodyFatForWomenMetric,
      TDEECalc: calculateTDEEForFemaleMetric,
    },
    [Units.Imperial]: {
      bodyFatCalc: calculateBodyFatForWomenImperial,
      TDEECalc: calculateTDEEForFemaleImperial,
    },
  },
};
export default useCalcFunctions;
