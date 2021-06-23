const prettyPrintGrams = (grams: number): string => {
  if (grams === 0) return '0g';
  if (grams >= 1) {
    if (grams.toFixed(2).slice(-2) === '00') {
      return `${grams}g`;
    } else {
      return `${grams.toFixed(2)}g`;
    }
  }
  return `${grams * 1000}mg`;
};
export default prettyPrintGrams;
