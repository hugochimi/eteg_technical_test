import { Request, Response } from 'express';
import { getAllClients, insertClient } from '../models/clientModel';
import { validateCPF, validateEmail, rainbowColors } from '../utils/validation';

export const registerClient = async (req: Request, res: Response) => {
  const { nome_completo, cpf, email, cor_preferida, observacoes } = req.body;

  if (!nome_completo || !validateCPF(cpf) || !validateEmail(email) || !rainbowColors.includes(cor_preferida)) {
    return res.status(400).json({ message: 'Dados inválidos. Verifique os campos.' });
  }

  try {
    await insertClient({ nome_completo, cpf, email, cor_preferida, observacoes });
    res.status(201).json({ message: 'Cliente cadastrado com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao cadastrar cliente. CPF ou e-mail já existem?' });
  }
};

export const getClients = async (req: Request, res: Response) => {
  try {
    const clients = await getAllClients();
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar clientes.' });
  }
};