// src/components/styles.ts
import styled, { createGlobalStyle } from 'styled-components';

// Estilo global para aplicar o background na página inteira
export const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: #A6A6A6;
    font-family: Arial, Helvetica, sans-serif;
  }

  #root {
    height: 100%;
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Title = styled.h1`
  color: black;
  font-size: 48px;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;

export const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: #444;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 14px;
  }
`;
