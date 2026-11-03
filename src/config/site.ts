export const siteConfig = {
  isPrototype: true, // Muda para false na publicação final
  name: "Posto Intermares",
  description: "Seu complexo de serviços em Cabedelo. Combustível, Pousada do Sol, Conveniência Hora H e muito mais.",
  url: "https://postointermares.duckdns.org",
  address: "Av. Mar Vermelho, 499 - Intermares, Cabedelo/PB",
  mapsLink: "https://maps.google.com/?q=Av.+Mar+Vermelho,+499+-+Intermares,+Cabedelo",
  wazeLink: "https://waze.com/ul?q=Av.%20Mar%20Vermelho%2C%20499%20-%20Intermares%2C%20Cabedelo",
  contact: {
    whatsapp: "558332481517", // Apenas números, com DDI e DDD
    phone: "(83) 3248-1517",
    email: "postointermares@uol.com.br"
  },
  businesses: {
    posto: {
      name: "Abastecimento",
      hours: "Todos os dias" // Ajuste para o horário exato da pista se preferir
    },
    pousada: {
      name: "Pousada do Sol",
      rooms: 5,
      amenities: ["Ar-condicionado", "Banheiro privativo", "Estacionamento", "Wi-Fi"],
      bookingMessage: "Olá! Gostaria de consultar a disponibilidade da Pousada do Sol. Data de entrada: ____. Data de saída: ____. Quantidade de hóspedes: ____."
    },
    conveniencia: {
      name: "Hora H",
      description: "Conveniência completa para sua parada ou dia a dia.",
      hours: "07:00 às 23:50 (sex e sáb: 07:00 às 01:50)",
      menuUrl: "https://cardapiohorah.duckdns.org"
    },
    trocaOleo: {
      name: "Troca de Óleo Especializada",
      hours: "08:00 às 18:00 (Seg a Sáb)",
      quoteMessage: "Olá! Gostaria de fazer uma cotação na Troca de Óleo do Posto Intermares."
    },
    lavanderia: {
      name: "Lavanderia",
      hours: "08:00 às 18:00",
      instagramUrl: "https://www.instagram.com/lavointermares/"
    }
  }
};