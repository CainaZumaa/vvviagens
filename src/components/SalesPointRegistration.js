import React, { useState } from "react";

const SalesPointRegistration = () => {
  const [salesPointData, setSalesPointData] = useState({
    nome: "",
    cnpj: "",
    telefone: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSalesPointData({ ...salesPointData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/pontodevendas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(salesPointData),
      });

      if (response.ok) {
        setMessage("Ponto de venda cadastrado com sucesso!");
        setSalesPointData({ nome: "", cnpj: "", telefone: "" });
      } else {
        setMessage("Erro ao cadastrar ponto de venda.");
      }
    } catch (error) {
      setMessage("Erro ao conectar ao servidor.");
      console.error("Erro:", error);
    }
  };

  return (
    <div className="container">
      <h1>Cadastro de Ponto de Vendas</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome</label>
          <input
            type="text"
            name="nome"
            value={salesPointData.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>CNPJ</label>
          <input
            type="text"
            name="cnpj"
            value={salesPointData.cnpj}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Telefone</label>
          <input
            type="text"
            name="telefone"
            value={salesPointData.telefone}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default SalesPointRegistration;
