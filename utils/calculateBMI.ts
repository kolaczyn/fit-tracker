const calculateBMI = (weightInKg: number, heightInCm: number) =>
  weightInKg / Math.pow(heightInCm / 100, 2);

export default calculateBMI;
