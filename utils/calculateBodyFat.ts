// as per:
//www.bmi-calculator.net/body-fat-calculator/body-fat-formula.php
// TODO IMPORTANT it looks like these function accept measurements in imperial units (pounds and inches)
// I'm gonna have to write a wrapper around these functions which accepts metric units

// TODO I've yet to test the code, so this code will remain commented out until I make sure the code works correctly
// export const calculateBodyFatForWomen = (
//   totalBodyWeight: number,
//   wristMeasurement: number,
//   hipMeasurement: number,
//   forearmMeasurement: number,
//   waistMeasurement: number
// ) => {
//   const factor1 = totalBodyWeight * 0.732 + 8.987;
//   const factor2 = wristMeasurement / 3.14;
//   const factor3 = waistMeasurement * 0.157;
//   const factor4 = hipMeasurement * 0.249;
//   const factor5 = forearmMeasurement * 0.434;

//   const leanBodyMass = factor1 + factor2 - factor3 - factor4 + factor5;
//   return calculateBodyFat(totalBodyWeight, leanBodyMass);
// };

export const calculateBodyFatForMen = (
  totalBodyWeight: number,
  waistMeasurement: number
) => {
  const factor1 = (totalBodyWeight * 1.082) + 94.42;
  const factor2 = waistMeasurement * 4.15;

  const leanBodyMass = factor1 - factor2;
  return calculateBodyFat(totalBodyWeight, leanBodyMass);
};

/** returns body fat in percentage */
const calculateBodyFat = (totalBodyWeight: number, leanBodyMass: number) => {
  const bodyFatWeight = totalBodyWeight - leanBodyMass;
  return (bodyFatWeight * 100) / totalBodyWeight;
};

// I don't want to export calculateBodyFat function,
// so I'm exporting it inside an object called exportedForTesting, so I
// I know I shouldn't use this function
export const exportedForTesting = {
  calculateBodyFat,
};
