export function statsCalculator(numbers: number[]) {
  const result = {
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
