import request from 'supertest';
import express from 'express';
import clientRoutes from '../routes/clientRoutes';
import { jest } from '@jest/globals';

// Mock do modelo
jest.mock('../models/clientModel', () => ({
  insertClient: jest.fn(),
  getAllClients: jest.fn(),
}));

const app = express();
app.use(express.json());
app.use('/api', clientRoutes);

describe('Client Controller', () => {
  test('POST /api/clients should register client successfully', async () => {
    const mockInsert = require('../models/clientModel').insertClient;
    mockInsert.mockResolvedValueOnce();

    const response = await request(app)
      .post('/api/clients')
      .send({
        nome_completo: 'John Doe',
        cpf: '123.456.789-00',
        email: 'john@example.com',
        cor_preferida: 'azul',
        observacoes: 'Test',
      });

    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Cliente cadastrado com sucesso!');
  });

  test('POST /api/clients should return error for invalid data', async () => {
    const response = await request(app)
      .post('/api/clients')
      .send({ nome_completo: '' });  // Dados inválidos

    expect(response.status).toBe(400);
    expect(response.body.message).toContain('Dados inválidos');
  });

  test('GET /api/clients should return clients list', async () => {
    const mockGet = require('../models/clientModel').getAllClients;
    mockGet.mockResolvedValueOnce([{ id: 1, nome_completo: 'John Doe' }]);

    const response = await request(app).get('/api/clients');

    expect(response.status).toBe(200);
    expect(response.body).toEqual([{ id: 1, nome_completo: 'John Doe' }]);
  });
});