import { palindromeChecker } from './index';

describe('palindrome checker', () => {
  it('should return true if the provided word is palindrome', () => {
    expect(palindromeChecker('mom')).toBe(true);
  });

  it('should return false if the provided word is not palindrome', () => {
    expect(palindromeChecker('bill')).toBe(false);
  });
});
