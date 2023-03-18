import { palindromeChecker } from './index';
describe('palindrome checker', () => {
  it('should return true if the provided word is palindrome', () => {
    expect(palindromeChecker('mom')).toBe(true);
  });
});
