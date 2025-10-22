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
    <>
      <div className="w-full h-auto min-h-screen p-4 md:px-42 md:py-20">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-4xl md:text-[72px] leading-tight font-extrabold bg-gradient-to-r from-[#035C94] to-[#172D50] bg-clip-text text-transparent">
            64 Anos
          </h2>
          <h3 className="text-3xl md:text-[56px] -mt-2 md:-mt-6 font-bold bg-gradient-to-r to-[#F08B26] from-[#EB6128] bg-clip-text text-transparent">
            de Conquistas
          </h3>
          <p className="text-base md:text-[20px] text-black mt-4 md:mt-6">
            Ao longo desses <span className="font-semibold">64 anos</span>, crescemos junto com nossa região
          </p>
          <p className="text-base md:text-[20px] text-black">
            e conquistamos marcos importantes:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-[32px]">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white border border-gray-200 border-b-4 border-b-blue-700 p-6 md:p-8 rounded-[24px] md:rounded-[32px] flex flex-col gap-3 md:gap-[16px] items-center justify-start shadow-md"
            >
              <div className="w-[48px] h-[48px] md:w-[64px] md:h-[64px] flex items-center justify-center bg-blue-100 rounded-full">
                {card.icon}
              </div>
              <h4 className="text-lg md:text-[24px] font-bold text-center text-primary">
                {card.title}
              </h4>
              <p className="text-sm md:text-[16px] text-center text-[#172E52]">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}