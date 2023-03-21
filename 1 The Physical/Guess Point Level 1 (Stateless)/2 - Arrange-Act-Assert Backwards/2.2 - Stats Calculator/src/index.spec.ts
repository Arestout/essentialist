import { statsCalculator } from './index';

describe('stats calculator', () => {
  it('should return correct minimal value', () => {
    const result = statsCalculator([2, 4, 21, -8, 53, 40]);

    expect(result.minValue).toBe(-8);
  });
});
