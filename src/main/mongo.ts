import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

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
