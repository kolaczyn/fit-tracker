import prettyPrintGrams from './prettyPrintGrams';

describe('prettyPrintGrams', () => {
  it('correctly pretty prints grams', () => {
    expect(prettyPrintGrams(12)).toEqual('12g');
    expect(prettyPrintGrams(0)).toEqual('0g');
    expect(prettyPrintGrams(0.12)).toEqual('120mg');
    expect(prettyPrintGrams(1)).toEqual('1g');
  });
});
