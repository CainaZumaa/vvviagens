import React, { useState } from "react";

const ModalRegistration = () => {
  const [modalData, setModalData] = useState({
    capacidade: "",
    modelo: "",
    anodefabricacao: "",
    estadodefabricacao: "",
    estadodemanutencao: "",
    dataultimamanutencao: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setModalData({ ...modalData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/modals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(modalData), // Envia os dados do modal para o back-end
      });

      if (response.ok) {
        setMessage("Modal cadastrado com sucesso!");
        setModalData({
          capacidade: "",
          modelo: "",
          anodefabricacao: "",
          estadodefabricacao: "",
          estadodemanutencao: "",
          dataultimamanutencao: "",
        });
      } else {
        setMessage("Erro ao cadastrar modal.");
      }
    } catch (error) {
      setMessage("Erro ao conectar ao servidor.");
      console.error("Erro:", error);
    }
  };

  return (
    <div className="container">
      <h1>Cadastro de Modal</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Capacidade</label>
          <input
            type="number"
            name="capacidade"
            value={modalData.capacidade}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Modelo</label>
          <select
            name="modelo"
            value={modalData.modelo}
            onChange={handleChange}
            required
          >
            <option value="">Selecione</option>
            <option value="trem">Trem</option>
            <option value="ônibus">Ônibus</option>
            <option value="avião">Avião</option>
            <option value="navio">Navio</option>
          </select>
        </div>
        <div>
          <label>Ano de Fabricação</label>
          <input
            type="text"
            name="anodefabricacao"
            value={modalData.anodefabricacao}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Estado de Fabricação</label>
          <input
            type="text"
            name="estadodefabricacao"
            value={modalData.estadodefabricacao}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Estado de Manutenção</label>
          <input
            type="text"
            name="estadodemanutencao"
            value={modalData.estadodemanutencao}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Data da Última Manutenção</label>
          <input
            type="date"
            name="dataultimamanutencao"
            value={modalData.dataultimamanutencao}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default ModalRegistration;
