// src/components/HomePage.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, ButtonContainer, Container, Title } from "./home.styles";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleCadastrarClick = () => {
    navigate("/register");
  };

  const handleConsultarClick = () => {
    navigate("/consultar");
  };
  return (
    <Container>
      <Title>ACADEMIA WRM</Title>
      <ButtonContainer>
        <Button onClick={() => handleCadastrarClick()}>Cadastrar</Button>
        <Button onClick={() => handleConsultarClick()}>Consultar</Button>
      </ButtonContainer>
    </Container>
  );
};

export default HomePage;
