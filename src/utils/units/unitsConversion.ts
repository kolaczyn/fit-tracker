const cmToInch = (cm: number): number => cm * 0.39370078740157;
const inchToCm = (inch: number): number => inch / 0.39370078740157;
const kgToPound = (kg: number): number => kg * 2.2046;
const poundsToKg = (pound: number): number => pound / 2.2046;
const feetAndInchToCm = (feet: number, inch: number): number =>
  feet * 12 + inch;

export { cmToInch, inchToCm, kgToPound, poundsToKg, feetAndInchToCm };
