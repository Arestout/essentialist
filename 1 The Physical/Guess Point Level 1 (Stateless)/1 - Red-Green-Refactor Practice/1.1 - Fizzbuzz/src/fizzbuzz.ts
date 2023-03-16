export const RANGE_ERROR = 'Number should be in range [1, 100]';

export function fizzbuzz(number: number) {
  if (number < 1 || number > 100) {
    throw new Error(RANGE_ERROR);
  }

  if (number % 3 === 0 && number % 5 === 0) {
    return 'FizzBuzz';
  }

  if (number % 3 === 0) {
    return 'Fizz';
  }

  if (number % 5 === 0) {
    return 'Buzz';
  }

  return '';
}
