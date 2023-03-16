import { fizzbuzz } from './fizzbuzz';

describe('fizzbuzz', () => {
  it('should return Fizz, if the provided argument is multiple of 3', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
  });

  it('should return Buzz, if the provided argument is multiple of 5', () => {
    expect(fizzbuzz(5)).toBe('Buzz');
  });
});
