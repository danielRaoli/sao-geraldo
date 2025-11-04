import { Check, Heart, Store, Users } from "lucide-react";

const cards = [
  {
    icon: <Check className="text-blue-700 w-[24px] h-[24px] md:w-[35px] md:h-[35px]" />,
    title: "Referência no Sertão Central",
    text: "Consolidação como referência no comércio regional",
  },
  {
    icon: <Store className="text-blue-700 w-[24px] h-[24px] md:w-[35px] md:h-[35px]" />,
    title: "7 Lojas em Funcionamento",
    text: "Expansão estratégica para melhor atender você",
  },
  {
    icon: <Users className="text-blue-700 w-[24px] h-[24px] md:w-[35px] md:h-[35px]" />,
    title: "Centenas de Empregos",
    text: "Geração de empregos diretos e indiretos na região",
  },
  {
    icon: <Heart className="text-blue-700 w-[24px] h-[24px] md:w-[35px] md:h-[35px]" />,
    title: "Tradição de Confiança",
    text: "Proximidade e confiança com a comunidade",
  },
];

export default function ConquersSection() {
  return (
    <section 
      id="conquers" 
      className="w-full h-auto min-h-screen p-4 md:px-42 md:py-20"
      aria-labelledby="conquers-heading"
      role="region"
    >
      {/* Skip link for keyboard navigation */}
      <a 
        href="#conquers-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
      >
        Pular para conquistas
      </a>

      <header className="text-center mb-6 md:mb-10" role="banner" aria-label="Título das conquistas">
        <h1 
          id="conquers-heading"
          className="text-4xl md:text-[72px] leading-tight font-extrabold bg-gradient-to-r from-[#035C94] to-[#172D50] bg-clip-text text-transparent"
        >
          64 Anos
        </h1>
        <p 
          className="text-3xl md:text-[56px] -mt-2 md:-mt-6 font-bold bg-gradient-to-r to-[#F08B26] from-[#EB6128] bg-clip-text text-transparent"
          aria-label="de Conquistas"
        >
          de Conquistas
        </p>
        <div role="complementary" aria-label="Descrição das conquistas">
          <p className="text-base md:text-[20px] text-black mt-4 md:mt-6">
            Ao longo desses <span className="font-semibold">64 anos</span>, crescemos junto com nossa região
          </p>
          <p className="text-base md:text-[20px] text-black">
            e conquistamos marcos importantes:
          </p>
        </div>
      </header>

      <main 
        id="conquers-content"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-[32px]"
        role="main"
        aria-label="Lista de conquistas"
      >
        {cards.map((card, index) => (
          <article
            key={card.title}
            className="bg-white border border-gray-200  p-6 md:p-8 rounded-[24px] md:rounded-[32px] flex flex-col gap-3 md:gap-[16px] items-center justify-start shadow-md group"
            role="article"
            aria-labelledby={`card-title-${index}`}
            tabIndex={0}
          >
            <div 
              className="w-[48px] h-[48px] md:w-[64px] md:h-[64px] flex items-center justify-center bg-blue-100 rounded-full group-hover:bg-blue-200 group-hover:text-white transition-colors duration-300"
              role="img"
              aria-label={`Ícone representando ${card.title}`}
            >
              {card.icon}
            </div>
            <h2 
              id={`card-title-${index}`}
              className="text-lg md:text-[24px] font-bold text-center text-primary"
            >
              {card.title}
            </h2>
            <p 
              className="text-sm md:text-[16px] text-center transition-all duration-300 group-hover:mb-4 text-[#172E52]"
              aria-describedby={`card-title-${index}`}
            >
              {card.text}
            </p>
            <div className="rounded-full hidden group-hover:block transition-all duration-300 h-1 w-full bg-orange-400 mt-auto"></div>
          </article>
        ))}
      </main>
    </section>
  );
}