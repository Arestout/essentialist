type ValidationErrorTypes = 'LengthRangeError' | 'NoDigitsError' | 'NoUpperCaseError';

type ValidationErrors = {
  type: ValidationErrorTypes;
  message: string;
};

export const VALIDATION_ERRORS: Record<ValidationErrorTypes, ValidationErrors> = {
  LengthRangeError: { type: 'LengthRangeError', message: 'The password should be between 5 and 10 characters long' },
  NoDigitsError: { type: 'NoDigitsError', message: 'The password should contain at least 1 digit' },
  NoUpperCaseError: { type: 'NoUpperCaseError', message: 'The password should contain at least 1 upper case letter' },
};

const checkLengthInRange = (min = 5, max = 15, string = '') => string.length >= min && string.length <= max;
const hasDigits = (string: string) => string.split('').some((character) => Number.isFinite(Number(character)));
const hasUppercase = (string: string) => string.split('').some((character) => !Number.isFinite(Number(character)) && character === character.toUpperCase());

export function validatePassword(password: string) {
  const errors: ValidationErrors[] = [];

  if (!checkLengthInRange(5, 15, password)) {
    errors.push(VALIDATION_ERRORS.LengthRangeError);
  }

  if (!hasDigits(password)) {
    errors.push(VALIDATION_ERRORS.NoDigitsError);
  }

  if (!hasUppercase(password)) {
    errors.push(VALIDATION_ERRORS.NoUpperCaseError);
  }

  return {
    result: errors.length === 0,
    errors,
  };
}
