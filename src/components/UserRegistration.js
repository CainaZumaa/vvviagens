import React, { useState } from "react";

const UserRegistration = () => {
  const [formData, setFormData] = useState({
    codigo: "",
    nome: "",
    email: "",
    senha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
  };

  return (
    <div className="container">
      <h1>Cadastro de Usuário</h1>
      <form onSubmit={handleSubmit}>
        {["Nome", "Email", "Senha"].map((field) => (
          <div key={field}>
            <label>{field}</label>
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
            />
          </div>
        ))}
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default UserRegistration;
