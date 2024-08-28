// src/components/UserForm.tsx
import React, { useState } from "react";
import {
  AddButton,
  Button,
  Container,
  Form,
  Input,
  Label,
  Select,
  TreinoContainer,
} from "./userForm.styles";
import { PlanoEscolhido } from "./userForm.types";

interface Treino {
  Tipo: string;
  Exercicios: string[];
}

const UserForm: React.FC = () => {
  const [nome, setNome] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState<number | "">("");
  const [cep, setCep] = useState("");
  const [idade, setIdade] = useState<number | "">("");
  const [planoEscolhido, setPlanoEscolhido] = useState<PlanoEscolhido | "">("");
  const [treinos, setTreinos] = useState<Treino[]>([]);

  const addTreino = () => {
    setTreinos([...treinos, { Tipo: "", Exercicios: [""] }]);
  };

  const handleTreinoChange = (
    index: number,
    field: string,
    value: string | string[]
  ) => {
    const updatedTreinos = [...treinos];
    if (field === "Tipo") {
      updatedTreinos[index].Tipo = value as string;
    } else if (field === "Exercicios") {
      updatedTreinos[index].Exercicios = value as string[];
    }
    setTreinos(updatedTreinos);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = { nome, rua, numero, cep, idade, planoEscolhido, treinos };
    console.log(JSON.stringify(formData));
    try {
      const response = await fetch("http://localhost:3000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        alert("Usuário cadastrado com sucesso!");
        // Redirecione ou limpe o formulário aqui
      } else {
        alert("Erro ao cadastrar usuário!");
      }
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      alert("Erro ao cadastrar usuário!");
    }
    // Aqui você pode enviar os dados para o backend ou processá-los como desejar.
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label>Nome:</Label>
        <Input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <Label>Rua:</Label>
        <Input
          type="text"
          value={rua}
          onChange={(e) => setRua(e.target.value)}
          required
        />

        <Label>Número:</Label>
        <Input
          type="number"
          value={numero}
          onChange={(e) => setNumero(Number(e.target.value) || "")}
          required
        />

        <Label>CEP:</Label>
        <Input
          type="text"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          required
        />

        <Label>Idade:</Label>
        <Input
          type="number"
          value={idade}
          onChange={(e) => setIdade(Number(e.target.value) || "")}
          required
        />

        <Label>Plano Escolhido:</Label>
        <Select
          value={planoEscolhido}
          onChange={(e) => setPlanoEscolhido(e.target.value as PlanoEscolhido)}
          required
        >
          <option value="">Selecione um plano</option>
          {Object.values(PlanoEscolhido).map((plano) => (
            <option key={plano} value={plano}>
              {plano}
            </option>
          ))}
        </Select>

        <Label>Treinos:</Label>
        {treinos.map((treino, index) => (
          <TreinoContainer key={index}>
            <Input
              type="text"
              placeholder="Tipo de Treino"
              value={treino.Tipo}
              onChange={(e) =>
                handleTreinoChange(index, "Tipo", e.target.value)
              }
              required
            />
            <Input
              type="text"
              placeholder="Exercícios (separados por vírgula)"
              value={treino.Exercicios.join(", ")}
              onChange={(e) =>
                handleTreinoChange(
                  index,
                  "Exercicios",
                  e.target.value.split(",").map((ex) => ex.trim())
                )
              }
              required
            />
          </TreinoContainer>
        ))}
        <AddButton type="button" onClick={addTreino}>
          Adicionar Treino
        </AddButton>

        <Button type="submit">Cadastrar</Button>
      </Form>
    </Container>
  );
};

export default UserForm;
