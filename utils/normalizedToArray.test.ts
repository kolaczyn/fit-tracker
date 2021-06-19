import normalizedToArray from './normalizedToArray';
import { NormalizedIndex } from '../customTypes';
import { BMIData } from './calculateBMI';

// TODO this looks ugly af
describe('normalizedToArray', () => {
  it('correctly turns a normalized object into an array', () => {
    const testSubject: NormalizedIndex<number> = {
      byId: {
        '1': 1,
        '2': 2,
      },
      allIds: ['1', '2'],
    };
    const result = normalizedToArray(testSubject);
    const correct = [1, 2];
    expect(result).toEqual(correct);
    // expect(result).toEqual(expect.arrayContaining([1, 2]));

    const measurement1 = { weightInKg: 100, heightInCm: 100 };
    const measurement2 = { weightInKg: 19, heightInCm: 17 };
    const measurement3 = { weightInKg: 20, heightInCm: -1 };
    const testSubject2: NormalizedIndex<BMIData> = {
      byId: {
        hello: measurement1,
        world: measurement2,
        ' ': measurement3,
      },
      allIds: ['hello', 'world', ' '],
    };
    const result2 = normalizedToArray(testSubject2);
    const correct2 = [measurement1, measurement2, measurement3];
    expect(result2).toEqual(correct2);
  });
});
