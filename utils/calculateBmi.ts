export default (weightInKg: number, heightInCm: number) =>
  weightInKg / Math.pow(heightInCm / 100, 2);
