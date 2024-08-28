import { MongoClient } from 'mongodb';
const mongoUri = process.env.MONGO_URI;
console.log(mongoUri);

if (!mongoUri) {
  throw new Error("A variável de ambiente MONGO_URI não está definida!");
}
const client = new MongoClient(mongoUri);

export const connectToDatabase = async () => {
  try {
    await client.connect();
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
    throw error;
  }
};

export const getDatabase = (dbName: string) => {
  return client.db(dbName);
};
