import {
  calculateBodyFatForMenImperial,
  calculateBodyFatForWomenImperial,
  exportedForTesting,
  BodyFatMenDataImperial,
  BodyFatWomenDataImperial,
} from './calculateBodyFat';

const { calculateBodyFat } = exportedForTesting;

describe('calculateBodyFat', () => {
  it('correctly calculates body fat solely based on body weight and lean body mass', () => {
    expect(calculateBodyFat(100, 60)).toBeCloseTo(40);
    expect(calculateBodyFat(80, 40)).toBeCloseTo(50);
    expect(calculateBodyFat(80, 70)).toBeCloseTo(12.5);
    expect(calculateBodyFat(75, 70)).toBeCloseTo(20 / 3);
  });
});

const menCases: [number, BodyFatMenDataImperial][] = [
  [21.22, { weightInLb: 201, waistInInch: 37 }],
];
// TODO finish this
describe('calculateBodyFatForMen', () => {
  test.each(menCases)(
    'correctly calculates body fat for men %s <- %s',
    (correct, data) => {
      expect(calculateBodyFatForMenImperial(data)).toBeCloseTo(correct);
    }
  );
});

const womenCases: [number, BodyFatWomenDataImperial][] = [
  [
    14.5,
    {
      weightInLb: 180,
      writstInInch: 10,
      hipInInch: 32,
      forearmInInch: 50,
      waistInInch: 24,
    },
  ],
  [
    11.48,
    {
      weightInLb: 140,
      writstInInch: 8,
      hipInInch: 30,
      forearmInInch: 48,
      waistInInch: 22,
    },
  ],
];

describe('calculateBodyFatForWomen', () => {
  test.each(womenCases)(
    'correctly calculates body fat for women %s <- %s',
    (correct, data) => {
      expect(calculateBodyFatForWomenImperial(data)).toBeCloseTo(correct);
    }
  );
});
