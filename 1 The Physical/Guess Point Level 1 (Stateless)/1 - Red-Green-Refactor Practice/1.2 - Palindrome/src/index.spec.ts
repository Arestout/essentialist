import { palindromeChecker } from './index';

describe('palindrome checker', () => {
  it('should return true if the provided phrase is palindrome', () => {
    expect(palindromeChecker('mom')).toBe(true);
  });

  it('should return false if the provided phrase is not palindrome', () => {
    expect(palindromeChecker('bill')).toBe(false);
  });

  it('should return true if the provided phrase is palindrome and is in capital case', () => {
    expect(palindromeChecker('Mom')).toBe(true);
  });
});
