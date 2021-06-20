const prettyPrintGrams = (grams: number): string => {
  if (grams === 0) return '0g';
  return grams >= 1 ? `${grams}g` : `${grams * 1000}mg`;
};
export default prettyPrintGrams;
