import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserRegistration from "./components/UserRegistration";
import TicketPurchase from "./components/TicketPurchase";
import ModalRegistration from "./components/ModalRegistration";
import SalesPointRegistration from "./components/SalesPointRegistration";
import EmployeeRegistration from "./components/EmployeeRegistration";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4">
          <Link to="/">Cadastro de Usuário</Link>
          <Link to="/compra">Compra de Passagem</Link>
          <Link to="/modal">Cadastro de Modal</Link>
          <Link to="/ponto-vendas">Cadastro de Ponto de Vendas</Link>
          <Link to="/funcionario">Cadastro de Funcionário/Gerente</Link>
        </nav>
        <Routes>
          <Route path="/" element={<UserRegistration />} />
          <Route path="/compra" element={<TicketPurchase />} />
          <Route path="/modal" element={<ModalRegistration />} />
          <Route path="/ponto-vendas" element={<SalesPointRegistration />} />
          <Route path="/funcionario" element={<EmployeeRegistration />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
