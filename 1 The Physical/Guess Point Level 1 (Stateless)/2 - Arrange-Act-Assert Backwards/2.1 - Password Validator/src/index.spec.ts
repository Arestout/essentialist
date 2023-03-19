import { validatePassword } from './index';

describe('password validator', () => {
  it('returns validation result without errors', () => {
    const validationResponse = validatePassword('Testpass78%');

    expect(validationResponse.result).toBeTruthy();
    expect(validationResponse.errors.length).toBe(0);
  });
});
