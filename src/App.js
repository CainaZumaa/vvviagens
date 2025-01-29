import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserRegistration from "./components/UserRegistration";
import TicketPurchase from "./components/TicketPurchase";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4">
          <Link to="/">Cadastro de Usuário</Link>
          <Link to="/compra">Compra de Passagem</Link>
        </nav>
        <Routes>
          <Route path="/" element={<UserRegistration />} />
          <Route path="/compra" element={<TicketPurchase />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
