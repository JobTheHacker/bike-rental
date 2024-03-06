import { PrismaClient } from '@prisma/client';
import express from 'express';

const prisma = new PrismaClient();
const router = express.Router();

router.get('/api/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

router.delete('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.user.delete({
    where: { id: parseInt(id) }
  });
  res.status(204).end();
});

export default router;