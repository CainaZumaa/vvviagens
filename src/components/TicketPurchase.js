import React, { useState } from "react";

const TicketPurchase = () => {
  const [ticketData, setTicketData] = useState({
    Localizador: "",
    Assento: "",
    Nome: "",
    Modal: "",
    Data: "",
    HoraDePartida: "",
    HoraDeChegada: "",
    CidadeDeOrigem: "",
    CidadeDeDestino: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicketData({ ...ticketData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados da passagem enviados:", ticketData);
  };

  return (
    <div className="container">
      <h1>Compra de Passagem</h1>
      <form onSubmit={handleSubmit}>
        {Object.keys(ticketData).map((field) => (
          <div key={field}>
            <label>{field}</label>
            <input
              type="text"
              name={field}
              value={ticketData[field]}
              onChange={handleChange}
            />
          </div>
        ))}
        <button type="submit">Comprar</button>
      </form>
    </div>
  );
};

export default TicketPurchase;
