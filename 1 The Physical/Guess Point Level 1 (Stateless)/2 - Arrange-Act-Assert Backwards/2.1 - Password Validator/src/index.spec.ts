import { validatePassword } from './index';

describe('password validator', () => {
  it('returns validation result without errors', () => {
    const validationResponse = validatePassword('Testpass8%');

    expect(validationResponse.result).toBeTruthy();
    expect(validationResponse.errors.length).toBe(0);
  });

  it('returns validation result with errors when the password is less than 5 characters long', () => {
    const validationResponse = validatePassword('Tes1');

    expect(validationResponse.result).toBeFalsy();
    expect(validationResponse.errors.length).toBe(1);
    expect(validationResponse.errors[0]).toEqual({ type: 'LengthRangeError', message: 'The password should be between 5 and 10 characters long' });
  });

  it('returns validation result with errors when the password is more than 15 characters long', () => {
    const validationResponse = validatePassword('Testpass78%longPassword');

    expect(validationResponse.result).toBeFalsy();
    expect(validationResponse.errors.length).toBe(1);
    expect(validationResponse.errors[0]).toEqual({ type: 'LengthRangeError', message: 'The password should be between 5 and 10 characters long' });
  });

  it('returns validation result with errors when the password has no digits', () => {
    const validationResponse = validatePassword('Testpass');

    expect(validationResponse.result).toBeFalsy();
    expect(validationResponse.errors.length).toBe(1);
    expect(validationResponse.errors[0]).toEqual({ type: 'NoDigitsError', message: 'The password should contain at least 1 digit' });
  });

  it('returns validation result with errors when the password has no uppercase letters', () => {
    const validationResponse = validatePassword('testpass5');

    expect(validationResponse.result).toBeFalsy();
    expect(validationResponse.errors.length).toBe(1);
    expect(validationResponse.errors[0]).toEqual({ type: 'NoUpperCaseError', message: 'The password should contain at least 1 upper case letter' });
  });

  it('returns validation result with multiple errors', () => {
    const validationResponse = validatePassword('oops');

    expect(validationResponse.result).toBeFalsy();
    expect(validationResponse.errors.length).toBe(3);
    expect(validationResponse.errors[0]).toEqual({ type: 'LengthRangeError', message: 'The password should be between 5 and 10 characters long' });
    expect(validationResponse.errors[1]).toEqual({ type: 'NoDigitsError', message: 'The password should contain at least 1 digit' });
    expect(validationResponse.errors[2]).toEqual({ type: 'NoUpperCaseError', message: 'The password should contain at least 1 upper case letter' });
  });
});
