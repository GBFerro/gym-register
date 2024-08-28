import React, { useState } from "react";
import { Treino, User } from "../../models/user.types";
import {
  Button,
  ConsultaContainer,
  Input,
  ResultContainer,
} from "./consultar.styles";

const ConsultaUsuario: React.FC = () => {
  const [cpf, setCpf] = useState("");
  const [userData, setUserData] = useState<User | null>();
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/users/${cpf}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Usuário não encontrado");
      }

      const data = await response.json();
      setUserData(data);
      setError(null);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message);
      setUserData(null);
    }
  };

  return (
    <ConsultaContainer>
      <h2>Consultar Usuário por CPF</h2>
      <Input
        type="text"
        placeholder="Digite o CPF"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
      />
      <Button onClick={handleSearch}>Buscar</Button>

      {error && <p>{error}</p>}

      {userData && (
        <ResultContainer>
          <h3>Informações do Usuário:</h3>
          <p>
            <strong>Nome:</strong> {userData.nome}
          </p>
          <p>
            <strong>Rua:</strong> {userData.rua}
          </p>
          <p>
            <strong>Número:</strong> {userData.numero}
          </p>
          <p>
            <strong>CEP:</strong> {userData.cep}
          </p>
          <p>
            <strong>Idade:</strong> {userData.idade}
          </p>
          <p>
            <strong>Plano Escolhido:</strong> {userData.planoEscolhido}
          </p>
          <p>
            <strong>Treinos:</strong>
          </p>
          <ul>
            {userData.treinos.map((treino: Treino, index: number) => (
              <li key={index}>
                {treino.tipo}: {treino.exercicios.join(", ")}
              </li>
            ))}
          </ul>
        </ResultContainer>
      )}
    </ConsultaContainer>
  );
};

export default ConsultaUsuario;
