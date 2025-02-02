import React, { useState } from "react";

const TicketPurchase = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState(null);

  const exampleTrips = [
    {
      id: 1,
      Localizador: "123ABC",
      Assento: "10A",
      Nome: "",
      Modal: "Ônibus",
      Data: "2025-02-10",
      HoraDePartida: "08:00",
      HoraDeChegada: "12:00",
      CidadeDeOrigem: "São Paulo",
      CidadeDeDestino: "Rio de Janeiro",
      Desconto: "",
      MetodoPagamento: "",
      parcelas: 1,
    },
    {
      id: 2,
      Localizador: "456DEF",
      Assento: "20B",
      Nome: "",
      Modal: "Ônibus",
      Data: "2025-02-15",
      HoraDePartida: "14:00",
      HoraDeChegada: "18:30",
      CidadeDeOrigem: "Belo Horizonte",
      CidadeDeDestino: "Vitória",
      Desconto: "",
      MetodoPagamento: "",
      parcelas: 1,
    },
  ];

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
    parcelas: "Parcelas",
  };

  const handleTripSelection = (trip) => {
    setSelectedTrip(trip);
    setShowForm(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedTrip((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados da passagem enviados:", selectedTrip);
  };

  const handlePaymentMethodChange = (e) => {
    const { value } = e.target;
    setSelectedTrip((prev) => ({
      ...prev,
      MetodoPagamento: value,
      parcelas: 1,
    }));
  };

  return (
    <div className="compra-de-passagem">
      <div className="container">
        {!showForm ? (
          <>
            <h1>Selecione sua viagem</h1>
            <div className="viagens">
              {exampleTrips.map((trip) => (
                <div
                  key={trip.id}
                  className="viagem-card"
                  onClick={() => handleTripSelection(trip)}
                >
                  <h2>
                    {trip.CidadeDeOrigem} ➝ {trip.CidadeDeDestino}
                  </h2>
                  <p>
                    Data: {trip.Data} | Hora de Partida: {trip.HoraDePartida}
                  </p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <h1>Compra de Passagem</h1>
            <form onSubmit={handleSubmit}>
              {Object.keys(selectedTrip).map((field) => (
                <div key={field}>
                  <label>{fieldLabels[field]}</label>
                  {field === "MetodoPagamento" ? (
                    <select
                      name={field}
                      value={selectedTrip[field]}
                      onChange={handlePaymentMethodChange}
                    >
                      <option value="">Selecione</option>
                      <option value="boleto">Boleto</option>
                      <option value="credito">Cartão de Crédito</option>
                      <option value="debito">Cartão de Débito</option>
                    </select>
                  ) : field === "parcelas" ? (
                    selectedTrip.MetodoPagamento === "credito" ? (
                      <select
                        name={field}
                        value={selectedTrip[field]}
                        onChange={handleChange}
                      >
                        <option value={1}>1x sem juros</option>
                        <option value={2}>2x sem juros</option>
                        <option value={3}>3x sem juros</option>
                        <option value={4}>4x sem juros</option>
                      </select>
                    ) : (
                      <input type="number" name={field} value={1} readOnly />
                    )
                  ) : (
                    <input
                      type="text"
                      name={field}
                      value={selectedTrip[field]}
                      onChange={handleChange}
                    />
                  )}
                </div>
              ))}
              <button type="submit">Comprar</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default TicketPurchase;
