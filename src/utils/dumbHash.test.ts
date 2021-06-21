import dumbHash from './dumbHash';

describe('dumbHash', () => {
  it("correctly 'hashes' a string into a number", () => {
    expect(dumbHash('hello')).toBe(532);
    expect(dumbHash('')).toBe(0);
    expect(dumbHash('What\'s up')).toBe(851);
    expect(dumbHash('karkołomny')).toBe(1309);
    expect(dumbHash('世界')).toBe(50018);
  }); 
});
