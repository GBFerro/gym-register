// src/components/styles.ts
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #A6A6A6;
  height: 100vh;
  `;

export const Form = styled.form`
  background-color: #BFBFBF;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  `;

export const Label = styled.label`
  color: #000;
  font-weight: bold;
  `;

export const Input = styled.input`
  padding: 10px;
  background-color: #A6A6A6;
  color: black;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  `;

export const Select = styled.select`
  padding: 10px;
  background-color: #A6A6A6;
  color: black;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const TreinoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 15px;
`;

export const AddButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Button = styled.button`
  background-color: #28a745;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;
