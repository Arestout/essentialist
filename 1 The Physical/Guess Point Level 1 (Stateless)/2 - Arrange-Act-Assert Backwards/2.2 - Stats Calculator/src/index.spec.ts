import { statsCalculator } from './index';

const CALCULATOR_INPUT = [2, 4, 21, -8, 53, 40];

describe('stats calculator', () => {
  it('should return correct minimal value', () => {
    const result = statsCalculator(CALCULATOR_INPUT);

    expect(result.minValue).toBe(-8);
  });

  it('should return correct max value', () => {
    const result = statsCalculator(CALCULATOR_INPUT);

    expect(result.maxValue).toBe(53);
  });

  it('should return correct elements count', () => {
    const result = statsCalculator(CALCULATOR_INPUT);

    expect(result.elementsCount).toBe(6);
  });

  it('should return correct average value', () => {
    const result = statsCalculator(CALCULATOR_INPUT);

    expect(result.averageValue).toBe(18.666666666667);
  });
});
