import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'db',
  database: process.env.DB_NAME || 'clientdb',
  password: process.env.DB_PASSWORD || 'password',
  port: parseInt(process.env.DB_PORT || '5432'),
});

export const createClientTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS clients (
      id SERIAL PRIMARY KEY,
      nome_completo VARCHAR(255) NOT NULL,
      cpf VARCHAR(14) UNIQUE NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      cor_preferida VARCHAR(50) NOT NULL,
      observacoes TEXT
    );
  `;
  await pool.query(query);
};

export const insertClient = async (client: any) => {
  const { nome_completo, cpf, email, cor_preferida, observacoes } = client;
  const query = `
    INSERT INTO clients (nome_completo, cpf, email, cor_preferida, observacoes)
    VALUES ($1, $2, $3, $4, $5)
  `;
  await pool.query(query, [nome_completo, cpf, email, cor_preferida, observacoes]);
};

export const getAllClients = async () => {
  const query = 'SELECT * FROM clients ORDER BY id DESC';
  const result = await pool.query(query);
  return result.rows;
};