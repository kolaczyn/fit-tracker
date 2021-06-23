import stringValuesToNums from './stringValuesToNums';

const cases: [Record<string, number>, Record<string, string>][] = [
  [
    { one: 1, two: 2, three: 3 },
    { one: '1', two: '2', three: '3' },
  ],
  [
    // a curve ball
    { five: 3 },
    { five: '3' },
  ],
  [
    { hello: 592, world: 911, bob: 8008135 },
    { hello: '592', world: '911', bob: '8008135' },
  ],
];

describe('stringValuesToNums', () => {
  test.each(cases)(
    'should correctly convert into %s from %s',
    (correct, testSubject) => {
      expect(stringValuesToNums(testSubject)).toMatchObject(correct);
    }
  );
  it('Making sure that TypeScript works as expected\nIt probably won\'t show actual errors, but eslint will catch it and scream at me', () => {
    type Metrics<T extends number | string> = {
      height: T;
      weight: T;
    };

    const calculateBMI = (metrics: Metrics<number>) =>
      (10_000 * metrics.weight) / metrics.height / metrics.height;

      const metricsStr: Metrics<string> = {
        height: '200',
        weight: '80'
      }
    expect(calculateBMI(stringValuesToNums(metricsStr))).toBe(20)
  });
});
