
import { Router } from 'express';
import { getDatabase } from '../main/mongo';
import { User } from '../models/user.types';

const router = Router();

router.post('/register', async (req, res) => {
  try {
    const db = getDatabase('academia');
    const usersCollection = db.collection<User>('users');

    const newUser: User = req.body;

    const result = await usersCollection.insertOne(newUser);

    res.status(201).json({ message: 'Usuário cadastrado com sucesso!', userId: result.insertedId });
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    res.status(500).json({ message: 'Erro ao cadastrar usuário' });
  }
});

export default router;
