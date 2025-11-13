
import EventCardsWrapper from "@/app/_components/wrapper-event-cards";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const events = [
    {
        title: "Aniversário Super São Geraldo",
        description: "Comemoração dos anos de fundação da rede, trazendo ofertas especiais, sorteios e ações de agradecimento à comunidade.",
        image: "/aniver.webp",
    },
    {
        title: "Feirinha de Adoção de Animais",
        description: "Evento voltado para a causa animal, realizado em parceria com protetores independentes e ONGs.",
        image: "/adocao.webp",
    },
    {
        title: "Dia das Crianças",
        description: "Atividades recreativas, distribuição de brindes, ações sociais e programação especial em bairros que temos lojas para celebrar a infância com alegria e cuidado.",
        image: "/criancas.webp",
    },

    {
        title: "Festa Junina / São João no São Geraldo",
        description: "Evento que celebra a tradição nordestina com decoração típica, promoções e ações culturais voltadas à comunidade.",
        image: "/junina.webp",
    },
        {
        title: "Corrida Super São Geraldo",
        description: "Atividade esportiva que promove saúde, integração e bem-estar incentivando bons hábitos para comunidade.",
        image: "/corrida.webp",
    },
            {
        title: "Expor Saúde",
        description: "A expor saúde é uma ação realizada na loja Campo Novo, em parceria com profissionais da Saúde, com foco em promover bem estar e qualidade",
        image: "/exposaude.webp",
    },
]

export default function EventsSection() {
    return <>
        <section id="events" aria-labelledby="events-heading" role="region" className="w-full space-y-6 px-4 md:px-42 py-20 ">
            {/* Skip link para pular direto para a lista de eventos */}
            <a href="#events-list" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50">
                Pular para lista de eventos
            </a>
            <h1 id="events-heading" className="text-3xl md:text-[48px] bg-gradient-to-r text-center font-bold to-[#F08B26] from-[#EB6128] bg-clip-text text-transparent">Nossos Eventos</h1>

            <EventCardsWrapper events={events} />

        </section>

    </>
}