export type BMIData = {
  weightInKg: number,
  heightInCm: number
}

const calculateBMI = ({weightInKg, heightInCm}: BMIData) =>
  weightInKg / Math.pow(heightInCm / 100, 2);

export default calculateBMI;
