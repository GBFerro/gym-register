
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

router.get('/consultar/:cpf', async (req, res) => {
  try {
    const { cpf } = req.params;
    const db = getDatabase('academia');
    const usersCollection = db.collection<User>('users');

    const user = await usersCollection.findOne({ cpf });

    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    res.json(user);
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    res.status(500).json({ error: "Erro ao buscar o usuário" });
  }
});

export default router;
