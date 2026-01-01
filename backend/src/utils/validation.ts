export const validateCPF = (cpf: string): boolean => {
  // Validação simples de CPF brasileiro (formato XXX.XXX.XXX-XX)
  const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  return cpfRegex.test(cpf);
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const rainbowColors = ['vermelho', 'laranja', 'amarelo', 'verde', 'azul', 'índigo', 'violeta'];