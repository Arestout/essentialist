import { validatePassword, VALIDATION_ERRORS } from './index';

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
    expect(validationResponse.errors[0]).toEqual(VALIDATION_ERRORS.LengthRangeError);
  });

  it('returns validation result with errors when the password is more than 15 characters long', () => {
    const validationResponse = validatePassword('Testpass78%longPassword');

    expect(validationResponse.result).toBeFalsy();
    expect(validationResponse.errors.length).toBe(1);
    expect(validationResponse.errors[0]).toEqual(VALIDATION_ERRORS.LengthRangeError);
  });

  it('returns validation result with errors when the password has no digits', () => {
    const validationResponse = validatePassword('Testpass');

    expect(validationResponse.result).toBeFalsy();
    expect(validationResponse.errors.length).toBe(1);
    expect(validationResponse.errors[0]).toEqual(VALIDATION_ERRORS.NoDigitsError);
  });

  it('returns validation result with errors when the password has no uppercase letters', () => {
    const validationResponse = validatePassword('testpass5');

    expect(validationResponse.result).toBeFalsy();
    expect(validationResponse.errors.length).toBe(1);
    expect(validationResponse.errors[0]).toEqual(VALIDATION_ERRORS.NoUpperCaseError);
  });

  it('returns validation result with multiple errors', () => {
    const validationResponse = validatePassword('oops');

    expect(validationResponse.result).toBeFalsy();
    expect(validationResponse.errors.length).toBe(3);
    expect(validationResponse.errors[0]).toEqual(VALIDATION_ERRORS.LengthRangeError);
    expect(validationResponse.errors[1]).toEqual(VALIDATION_ERRORS.NoDigitsError);
    expect(validationResponse.errors[2]).toEqual(VALIDATION_ERRORS.NoUpperCaseError);
  });
});
