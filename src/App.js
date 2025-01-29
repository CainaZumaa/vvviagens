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
          <Link to="/" className="mr-4 text-blue-500">Cadastro de Usuário</Link>
          <Link to="/compra" className="text-green-500">Compra de Passagem</Link>
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
