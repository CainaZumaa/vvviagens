import React, { useState } from "react";

const ModalRegistration = () => {
  const [modalData, setModalData] = useState({
    nome: "",
    capacidade: "",
    tipo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setModalData({ ...modalData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do modal enviados:", modalData);
  };

  return (
    <div className="container">
      <h1>Cadastro de Modal</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome</label>
          <input
            type="text"
            name="nome"
            value={modalData.nome}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Capacidade</label>
          <input
            type="number"
            name="capacidade"
            value={modalData.capacidade}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Tipo</label>
          <select name="tipo" value={modalData.tipo} onChange={handleChange}>
            <option value="">Selecione</option>
            <option value="ônibus">Ônibus</option>
            <option value="avião">Avião</option>
            <option value="trem">Trem</option>
          </select>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default ModalRegistration;
