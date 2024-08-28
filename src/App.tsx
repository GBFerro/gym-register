// src/App.tsx
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { GlobalStyle } from "./flow/home/home.styles";
import HomePage from "./flow/home/index";
import UserForm from "./flow/Register/index";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<UserForm />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
