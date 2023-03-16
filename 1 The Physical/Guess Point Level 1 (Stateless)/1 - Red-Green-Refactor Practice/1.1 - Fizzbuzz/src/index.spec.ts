import { fizzbuzz } from './fizzbuzz';

describe('fizzbuzz', () => {
  it('should return Fizz, if the provided argument is multiple of 3', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
  });

  it('should return Buzz, if the provided argument is multiple of 5', () => {
    expect(fizzbuzz(5)).toBe('Buzz');
  });

  it('should return FizzBuzz, if the provided argument is multiple of both 3 and 5', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz');
  });

  it('should return an empty string, if the provided argument is not multiple of 3 or 5', () => {
    expect(fizzbuzz(13)).toBe('');
  });

  it('should throw an error if the provided argument is greater than 100', () => {
    expect(() => {
      fizzbuzz(101);
    }).toThrow('Number should be in range [1, 100]');
  });

  it('should throw an error if the provided argument is less than 1', () => {
    expect(() => {
      fizzbuzz(0);
    }).toThrow('Number should be in range [1, 100]');
  });
});
