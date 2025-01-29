import React, { useState } from "react";

const SalesPointRegistration = () => {
  const [salesPointData, setSalesPointData] = useState({
    nome: "",
    endereco: "",
    telefone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSalesPointData({ ...salesPointData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do ponto de venda enviados:", salesPointData);
  };

  return (
    <div className="container">
      <h1>Cadastro de Ponto de Vendas</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome</label>
          <input
            type="text"
            name="nome"
            value={salesPointData.nome}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Endereço</label>
          <input
            type="text"
            name="endereco"
            value={salesPointData.endereco}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Telefone</label>
          <input
            type="text"
            name="telefone"
            value={salesPointData.telefone}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default SalesPointRegistration;
