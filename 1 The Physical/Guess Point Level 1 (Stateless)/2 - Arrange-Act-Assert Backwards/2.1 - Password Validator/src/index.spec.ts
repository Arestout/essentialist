import { validatePassword } from './index';

describe('password validator', () => {
  it('returns validation result without errors', () => {
    const validationResponse = validatePassword('Testpass78%');

    expect(validationResponse.result).toBeTruthy();
    expect(validationResponse.errors.length).toBe(0);
  });

  it('returns validation result with errors when the password is less than 5 characters long', () => {
    const validationResponse = validatePassword('test');

    expect(validationResponse.result).toBeFalsy();
    expect(validationResponse.errors.length).toBe(1);
    expect(validationResponse.errors[0]).toEqual({ type: 'LengthRangeError', message: 'The password should be between 5 and 10 characters long' });
  });
});
