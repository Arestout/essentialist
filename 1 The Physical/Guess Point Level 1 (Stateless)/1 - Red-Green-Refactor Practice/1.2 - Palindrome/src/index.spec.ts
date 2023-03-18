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

  it('should return true if the provided phrase is palindrome and has spaces and different casing', () => {
    expect(palindromeChecker('Was It A Rat I Saw')).toBe(true);
  });

  it('should return false if the provided phrase is not palindrome and has spaces and different casing', () => {
    expect(palindromeChecker('WaT Ist A Raft I Saaw')).toBe(false);
  });
});
