import React, { useState } from "react";

const EmployeeRegistration = () => {
  const [employeeData, setEmployeeData] = useState({
    nome: "",
    cargo: "",
    email: "",
    senha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do funcionário/gerente enviados:", employeeData);
  };

  return (
    <div className="container">
      <h1>Cadastro de Funcionário/Gerente</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome</label>
          <input
            type="text"
            name="nome"
            value={employeeData.nome}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Cargo</label>
          <select
            name="cargo"
            value={employeeData.cargo}
            onChange={handleChange}
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
          />
        </div>
        <div>
          <label>Senha</label>
          <input
            type="password"
            name="senha"
            value={employeeData.senha}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default EmployeeRegistration;
