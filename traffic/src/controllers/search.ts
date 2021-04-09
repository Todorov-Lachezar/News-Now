import { Router } from 'express';

const router = Router();

router.get('/', (_, res) => res.json({ message: 'Search endpoint' }));

export default router;
