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
    Desconto: "",
    MetodoPagamento: "",
  });

  const fieldLabels = {
    Localizador: "Localizador",
    Assento: "Assento",
    Nome: "Nome",
    Modal: "Modal",
    Data: "Data",
    HoraDePartida: "Hora de Partida",
    HoraDeChegada: "Hora de Chegada",
    CidadeDeOrigem: "Cidade de Origem",
    CidadeDeDestino: "Cidade de Destino",
    Desconto: "Desconto",
    MetodoPagamento: "Método de Pagamento",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicketData({ ...ticketData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados da passagem enviados:", ticketData);
  };

  return (
    <div className="compra-de-passagem">
      <div className="container">
        <h1>Compra de Passagem</h1>
        <form onSubmit={handleSubmit}>
          {Object.keys(ticketData).map((field) => (
            <div key={field}>
              <label>{fieldLabels[field]}</label>
              {field === "MetodoPagamento" ? (
                <select
                  name={field}
                  value={ticketData[field]}
                  onChange={handleChange}
                >
                  <option value="">Selecione</option>
                  <option value="boleto">Boleto</option>
                  <option value="credito">Cartão de Crédito</option>
                  <option value="debito">Cartão de Débito</option>
                </select>
              ) : (
                <input
                  type="text"
                  name={field}
                  value={ticketData[field]}
                  onChange={handleChange}
                />
              )}
            </div>
          ))}
          <button type="submit">Comprar</button>
        </form>
      </div>
    </div>
  );
};

export default TicketPurchase;
