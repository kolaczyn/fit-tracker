import convertStringsToNums from './convertStringsToNums';

describe('convertStringsToNums', () => {
  it('correctly converts array of string into array of numbers', () => {
    expect(convertStringsToNums('12', '9', '-1', '24')).toEqual([
      12, 9, -1, 24,
    ]);
    expect(convertStringsToNums('.3333', '0.21', '.99', '1.3')).toEqual([
      0.3333, 0.21, 0.99, 1.3,
    ]);
    expect(convertStringsToNums('hello world')).toEqual([NaN]);
  });
});
