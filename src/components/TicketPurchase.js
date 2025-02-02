import React, { useState } from "react";

const TicketPurchase = () => {
  const viagensExemplo = [
    {
      localizador: "ABC123",
      tipodemodal: "Ônibus",
      data: "2025-02-05",
      horadepartida: "08:00",
      horadechegada: "12:00",
      tempodeviagem: "04:00:00",
      cidadedeorigem: "São Paulo",
      cidadededestino: "Rio de Janeiro",
    },
    {
      localizador: "XYZ789",
      tipodemodal: "Avião",
      data: "2025-02-06",
      horadepartida: "14:00",
      horadechegada: "16:00",
      tempodeviagem: "02:00:00",
      cidadedeorigem: "Belo Horizonte",
      cidadededestino: "Salvador",
    },
  ];

  const [formData, setFormData] = useState({
    localizador: "",
    assento: "",
    codigodocliente: "",
    nomedopassageiro: "",
    tipodemodal: "",
    data: "",
    horadepartida: "",
    horadechegada: "",
    tempodeviagem: "",
    cidadedeorigem: "",
    cidadededestino: "",
  });

  const [message, setMessage] = useState("");

  const handleSelect = (viagem) => {
    setFormData({
      ...viagem,
      assento: "",
      codigodocliente: "",
      nomedopassageiro: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Passagem comprada com sucesso!");
        setFormData({
          localizador: "",
          assento: "",
          codigodocliente: "",
          nomedopassageiro: "",
          tipodemodal: "",
          data: "",
          horadepartida: "",
          horadechegada: "",
          tempodeviagem: "",
          cidadedeorigem: "",
          cidadededestino: "",
        });
      } else {
        setMessage("Erro ao comprar a passagem.");
      }
    } catch (error) {
      setMessage("Erro ao conectar ao servidor.");
      console.error("Erro:", error);
    }
  };

  return (
    <div className="container">
      <h1>Compra de Passagem</h1>
      {message && <p>{message}</p>}

      <h2>Escolha uma viagem:</h2>
      {viagensExemplo.map((viagem, index) => (
        <button key={index} onClick={() => handleSelect(viagem)}>
          {viagem.cidadedeorigem} → {viagem.cidadededestino} (
          {viagem.tipodemodal})
        </button>
      ))}

      {formData.localizador && (
        <form onSubmit={handleSubmit}>
          <h2>Preencha os dados</h2>

          <div>
            <label>Nome do Passageiro</label>
            <input
              type="text"
              name="nomedopassageiro"
              value={formData.nomedopassageiro}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Código do Cliente</label>
            <input
              type="number"
              name="codigodocliente"
              value={formData.codigodocliente}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Assento</label>
            <input
              type="text"
              name="assento"
              value={formData.assento}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Comprar Passagem</button>
        </form>
      )}
    </div>
  );
};

export default TicketPurchase;
