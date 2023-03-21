export function statsCalculator(numbers: number[]) {
  const result = {
    averageValue: 0,
    elementsCount: numbers.length,
    minValue: +Infinity,
    maxValue: -Infinity,
  };

  let numbersSum = 0;

  for (const num of numbers) {
    if (num < result.minValue) {
      result.minValue = num;
    }

    if (num > result.maxValue) {
      result.maxValue = num;
    }

    numbersSum += num;
  }

  result.averageValue = Number((numbersSum / result.elementsCount).toFixed(12));

  return result;
}
