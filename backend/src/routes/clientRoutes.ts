import { Router } from 'express';
import { getClients, registerClient } from '../crontrollers/clientController'

const router = Router();
router.post('/clients', registerClient);
router.get('/clients', getClients);

export default router;