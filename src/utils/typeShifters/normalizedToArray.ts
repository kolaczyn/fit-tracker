import { NormalizedIndex } from '../../customTypes';
export default function normalizedToArray<T>(normIdx: NormalizedIndex<T>): T[] {
  const { byId } = normIdx;
  const out: T[] = [];
  for (let key in byId) {
    let value = byId[key];
    out.push(value);
  }
  return out;
}
