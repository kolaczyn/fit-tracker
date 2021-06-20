const convertStringsToNums = (...args: string[]): number[] =>
  args.map(arg => Number(arg));

  export default convertStringsToNums