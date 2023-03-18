import { palindromeChecker } from './index';

describe('palindrome checker', () => {
  it('should return true if the provided word is palindrome', () => {
    expect(palindromeChecker('mom')).toBe(true);
  });

  it('should return false if the provided word is not palindrome', () => {
    expect(palindromeChecker('bill')).toBe(false);
  });

  it('should return true if the provided word is palindrome and is in capital case', () => {
    expect(palindromeChecker('Mom')).toBe(true);
  });
});
