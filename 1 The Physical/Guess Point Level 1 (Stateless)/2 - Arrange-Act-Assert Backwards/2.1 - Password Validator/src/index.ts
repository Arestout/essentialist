const checkLengthInRange = (min = 5, max = 15, string = '') => string.length >= min && string.length <= max;
const hasDigits = (string: string) => string.split('').some((character) => Number.isFinite(Number(character)));
const hasUppercase = (string: string) => string.split('').some((character) => !Number.isFinite(Number(character)) && character === character.toUpperCase());

export function validatePassword(password: string) {
  const errors = [];

  if (!checkLengthInRange(5, 15, password)) {
    errors.push({ type: 'LengthRangeError', message: 'The password should be between 5 and 10 characters long' });
  }

  if (!hasDigits(password)) {
    errors.push({ type: 'NoDigitsError', message: 'The password should contain at least 1 digit' });
  }

  if (!hasUppercase(password)) {
    errors.push({ type: 'NoUpperCaseError', message: 'The password should contain at least 1 upper case letter' });
  }

  return {
    result: errors.length === 0,
    errors,
  };
}
