export function statsCalculator(numbers: number[]) {
  const result = {
    elementsCount: numbers.length,
    minValue: +Infinity,
    maxValue: -Infinity,
  };

  for (const num of numbers) {
    if (num < result.minValue) {
      result.minValue = num;
    }

    if (num > result.maxValue) {
      result.maxValue = num;
    }
  }

  return result;
}
