const dumbHash = (str: string): number =>
  [...str].reduce(
    (accumulator, current) => accumulator + current.toLocaleLowerCase().charCodeAt(0),
    0
  );
export default dumbHash;
