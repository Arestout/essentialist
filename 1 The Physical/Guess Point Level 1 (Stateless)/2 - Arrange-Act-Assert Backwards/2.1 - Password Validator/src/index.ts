export function validatePassword(password: string) {
  const errors = [];

  if (password.length < 5 || password.length > 15) {
    errors.push({ type: 'LengthRangeError', message: 'The password should be between 5 and 10 characters long' });
  }

  return {
    result: errors.length === 0,
    errors,
  };
}
