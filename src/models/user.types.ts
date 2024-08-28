
export interface Treino {
  tipo: string;
  exercicios: string[];
}

export interface User {
  nome: string;
  rua: string;
  numero: number;
  cep: string;
  idade: number;
  planoEscolhido: string;
  treinos: Treino[];
}
