import express from 'express';
import cors from 'cors';
import clientRoutes from './routes/clientRoutes';
import { createClientTable } from './models/clientModel';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', clientRoutes);

createClientTable(); // Cria tabela se não existir

export default app;