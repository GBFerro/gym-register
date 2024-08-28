
import { cors } from '@tinyhttp/cors';
import express from 'express';
import { connectToDatabase } from './main/mongo';
import userRoutes from './routes/register';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/users', userRoutes);

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.options("/api/users/register", (_req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.send(204);
});

connectToDatabase().then(() => {
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
}).catch((error) => {
  console.error('Erro ao iniciar o servidor:', error);
});
