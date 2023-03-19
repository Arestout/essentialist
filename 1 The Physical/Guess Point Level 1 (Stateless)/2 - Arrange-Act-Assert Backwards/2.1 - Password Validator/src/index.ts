export function validatePassword(password: string) {
  const errors = [];

  if (password.length < 5 || password.length > 15) {
    errors.push({ type: 'LengthRangeError', message: 'The password should be between 5 and 10 characters long' });
  }

  const hasDigits = password.split('').some((character) => Number.isFinite(Number(character)));

  if (!hasDigits) {
    errors.push({ type: 'NoDigitsError', message: 'The password should contain at least 1 digit' });
  }

  return {
    result: errors.length === 0,
    errors,
  };
}
