import React, { useState } from "react";

const TicketPurchase = () => {
  const viagensExemplo = [
    {
      localizador: "ABC123",
      tipodemodal: "Ônibus",
      data: "2025-02-05",
      horadepartida: "08:00",
      horadechegada: "12:00",
      tempodeviagem: "04:00:00", // duração
      cidadedeorigem: "São Paulo",
      cidadededestino: "Rio de Janeiro",
    },
    {
      localizador: "XYZ789",
      tipodemodal: "Avião",
      data: "2025-02-06",
      horadepartida: "14:00",
      horadechegada: "16:00",
      tempodeviagem: "02:00:00", // duração
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
    metodoPagamento: "", // Novo campo: método de pagamento
    parcelas: 1, // Novo campo: número de parcelas (apenas para cartão de crédito)
  });

  const [message, setMessage] = useState("");

  const handleSelect = (viagem) => {
    setFormData({
      ...viagem,
      assento: "",
      codigodocliente: "",
      nomedopassageiro: "",
      metodoPagamento: "", // Resetar método de pagamento ao selecionar nova viagem
      parcelas: 1, // Resetar número de parcelas
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
          metodoPagamento: "", // Resetar método de pagamento
          parcelas: 1, // Resetar número de parcelas
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
        <div>
          <h2>Detalhes da Viagem:</h2>
          <p>
            <strong>Localizador:</strong> {formData.localizador}
          </p>
          <p>
            <strong>Origem:</strong> {formData.cidadedeorigem}
          </p>
          <p>
            <strong>Destino:</strong> {formData.cidadededestino}
          </p>
          <p>
            <strong>Data da Viagem:</strong> {formData.data}
          </p>
          <p>
            <strong>Horário de Partida:</strong> {formData.horadepartida}
          </p>
          <p>
            <strong>Horário de Chegada:</strong> {formData.horadechegada}
          </p>
          <p>
            <strong>Modal:</strong> {formData.tipodemodal}
          </p>
          <p>
            <strong>Duração da Viagem:</strong> {formData.tempodeviagem}
          </p>

          <h2>Preencha os dados</h2>
          <form onSubmit={handleSubmit}>
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

            <div>
              <label>Método de Pagamento</label>
              <select
                name="metodoPagamento"
                value={formData.metodoPagamento}
                onChange={handleChange}
                required
              >
                <option value="">Selecione...</option>
                <option value="credito">Cartão de Crédito</option>
                <option value="debito">Cartão de Débito</option>
                <option value="pix">PIX</option>
              </select>
            </div>

            {formData.metodoPagamento === "credito" && (
              <div>
                <label>Número de Parcelas</label>
                <select
                  name="parcelas"
                  value={formData.parcelas}
                  onChange={handleChange}
                  required
                >
                  <option value="1">1x sem juros</option>
                  <option value="2">2x sem juros</option>
                  <option value="3">3x sem juros</option>
                  <option value="4">4x sem juros</option>
                </select>
              </div>
            )}

            <button type="submit">Comprar Passagem</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default TicketPurchase;
