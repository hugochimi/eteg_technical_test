import { validateCPF, validateEmail, rainbowColors } from '../utils/validation';

describe('Validations', () => {
  test('validateCPF should return true for valid CPF', () => {
    expect(validateCPF('123.456.789-00')).toBe(true);
  });

  test('validateCPF should return false for invalid CPF', () => {
    expect(validateCPF('123.456.789')).toBe(false);
  });

  test('validateEmail should return true for valid email', () => {
    expect(validateEmail('test@example.com')).toBe(true);
  });

  test('validateEmail should return false for invalid email', () => {
    expect(validateEmail('invalid')).toBe(false);
  });

  test('rainbowColors should include expected colors', () => {
    expect(rainbowColors).toContain('vermelho');
    expect(rainbowColors).toHaveLength(7);
  });
});