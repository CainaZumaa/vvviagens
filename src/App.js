import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import UserRegistration from "./components/UserRegistration";
import TicketPurchase from "./components/TicketPurchase";
import ModalRegistration from "./components/ModalRegistration";
import SalesPointRegistration from "./components/SalesPointRegistration";
import EmployeeRegistration from "./components/EmployeeRegistration";
import "./App.css";

const App = () => {
  const [usuario, setUsuario] = useState(null); // Estado para armazenar o usuário logado

  const handleLogout = () => {
    setUsuario(null); // Remove o usuário e volta para a tela de login
  };

  return (
    <Router>
      <div>
        {usuario ? ( // Se estiver logado, mostra as rotas do sistema
          <>
            <nav>
              <Link to="/compra">Compra de Passagem</Link>
              <Link to="/modal">Cadastro de Modal</Link>
              <Link to="/ponto-vendas">Cadastro de Ponto de Vendas</Link>
              <Link to="/funcionario">Cadastro de Funcionário/Gerente</Link>
              <button onClick={handleLogout} style={{ marginLeft: "20px" }}>
                Sair
              </button>
            </nav>
            <Routes>
              <Route path="/compra" element={<TicketPurchase />} />
              <Route path="/modal" element={<ModalRegistration />} />
              <Route
                path="/ponto-vendas"
                element={<SalesPointRegistration />}
              />
              <Route path="/funcionario" element={<EmployeeRegistration />} />
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="/" element={<Login onLogin={setUsuario} />} />
            <Route path="/cadastro" element={<UserRegistration />} />{" "}
            {/* A rota do cadastro */}
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
