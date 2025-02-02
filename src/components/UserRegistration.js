import React, { useState } from "react";

const UserRegistration = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    endereco: "",
    senha: "", // Novo campo para senha
    confirmarSenha: "", // Novo campo para confirmação de senha
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação de senha (opcional, mas recomendado)
    if (formData.senha !== formData.confirmarSenha) {
      setMessage("As senhas não correspondem.");
      return; // Impede o envio do formulário
    }

    // Remover a senha antes de enviar para o backend
    const formDataSemSenha = { ...formData };
    delete formDataSemSenha.senha;
    delete formDataSemSenha.confirmarSenha;

    try {
      const response = await fetch("http://localhost:8080/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataSemSenha), // Envia dados sem a senha
      });

      if (response.ok) {
        setMessage("Usuário cadastrado com sucesso!");
        setFormData({
          nome: "",
          email: "",
          endereco: "",
          senha: "",
          confirmarSenha: "",
        });
      } else {
        setMessage("Erro ao cadastrar usuário.");
      }
    } catch (error) {
      setMessage("Erro ao conectar ao servidor.");
      console.error("Erro:", error);
    }
  };

  return (
    <div className="container">
      <h1>Cadastro de Usuário</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        {/* Campos existentes */}
        <div>
          <label>Nome</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Endereço</label>
          <input
            type="text"
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
            required
          />
        </div>

        {/* Novos campos para senha */}
        <div>
          <label>Senha</label>
          <input
            type="password"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Confirmar Senha</label>
          <input
            type="password"
            name="confirmarSenha"
            value={formData.confirmarSenha}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default UserRegistration;
