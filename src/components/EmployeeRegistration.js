import React, { useState } from "react";

const EmployeeRegistration = () => {
  const [employeeData, setEmployeeData] = useState({
    nome: "",
    cargo: "",
    email: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!employeeData.cargo) {
      setMessage("Selecione um cargo antes de cadastrar.");
      return;
    }

    const endpoint =
      employeeData.cargo === "funcionario"
        ? "http://localhost:8080/funcionarios"
        : "http://localhost:8080/gerentes";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employeeData),
      });

      if (response.ok) {
        setMessage("Cadastro realizado com sucesso!");
        setEmployeeData({ nome: "", cargo: "", email: "" });
      } else {
        setMessage("Erro ao cadastrar.");
      }
    } catch (error) {
      setMessage("Erro ao conectar ao servidor.");
      console.error("Erro:", error);
    }
  };

  return (
    <div className="container">
      <h1>Cadastro de Funcionário/Gerente</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome</label>
          <input
            type="text"
            name="nome"
            value={employeeData.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Cargo</label>
          <select
            name="cargo"
            value={employeeData.cargo}
            onChange={handleChange}
            required
          >
            <option value="">Selecione</option>
            <option value="funcionario">Funcionário</option>
            <option value="gerente">Gerente</option>
          </select>
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={employeeData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default EmployeeRegistration;
