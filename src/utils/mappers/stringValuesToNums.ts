// the usage of `@ts-ignore` here is similar to the typical usage of Rust's `unsafe` keyword
// I.e. I know for a fact that the code will work properly and types should be okay, but the compiler doesn't know that
// I couldn't figure out a better workaround for this problem, without the usage of // @ts-ignore
export default function stringValuesToNums<T>(
  obj: Record<keyof T, string>
): Record<keyof T, number> {
  // @ts-ignore
  const out: Record<keyof T, number> = {};
  Object.keys(obj).forEach(
    k =>
      // @ts-ignore
      (out[k] = Number(obj[k]))
  );
  return out;
}
