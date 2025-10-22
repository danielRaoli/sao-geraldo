import { Earth, Eye, Heart } from "lucide-react";

const cards = [
    {
      color: "blue",
      icon: <Earth className="text-blue-700 w-[35px] h-[35px]" />,
      name: "Missão",
      text: "Oferecer produtos e serviços de qualidade, com preço justo e atendimento humanizado, promovendo bem-estar às famílias do Sertão Central, sempre guiados pela fé cristã, pelo respeito às pessoas e pelo compromisso com a comunidade.",
    },
    {
      color: "orange",
      icon: <Eye className="text-orange-500 w-[35px] h-[35px]" />,  
      name: "Visão",
      text: "Ser reconhecido como a rede de supermercados de maior confiança e referência no Sertão Central, expandindo com inovação e mantendo nossas raízes de tradição, fé e proximidade com o cliente.",
    },
    {
      color:"red",
      icon: <Heart className="text-red-500 w-[35px] h-[35px]" />,
      name: "Valores",
      text: "Fé, família, tradição, qualidade, transparência, proximidade com o cliente, compromisso social, inovação responsável e orgulho de ser do sertão. Acreditamos que o sucesso vem do relacionamento verdadeiro com as pessoas.",
    },
  ];

  // Mapeamento para classes Tailwind estáticas
  const colorBgMap: Record<string, string> = {
    blue: "bg-blue-100",
    orange: "bg-orange-100",
    red: "bg-red-100",
  };

  const colorTitleMap: Record<string, string> = {
    blue: "text-blue-700",
    orange: "text-orange-500",
    red: "text-red-500",
  };

    const borderMap: Record<string, string> = {
    blue: "border-b-4 border-b-blue-700",
    orange: "border-b-4 border-b-orange-500",
    red: "border-b-4 border-b-red-500",
  };
export default function Essence() {
    return <>
        <div className="w-full h-auto min-h-screen bg-gray-100 px-4 py-8 md:px-42 md:py-20">
            <h2 className="text-2xl md:text-[48px] text-center font-bold bg-gradient-to-r from-[#F08B26] to-[#EB6128] bg-clip-text mb-8 text-transparent" >Nossa Essência</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-[32px]">
                {cards.map((card) => (
                    <div key={card.name} className={`bg-white border ${borderMap[card.color] ?? "border-black"} p-8 rounded-[32px] flex flex-col gap-[12px] md:gap-[24px] items-center  justify-start shadow-md`}>
                        <div className={`w-[64px] h-[64px] flex items-center justify-center ${colorBgMap[card.color] ?? "bg-gray-100"}  rounded-full`}>
                            {card.icon}
                        </div>
                        <h3 className={`text-xl md:text-[32px] font-bold text-center text-[#172E52] ${colorTitleMap[card.color] ?? "text-black"}`}>{card.name}</h3>
                        <p className="text-sm md:text-[20px] font-medium text-center text-[#172E52]">{card.text}</p>
                    </div>
                ))}
            </div>
            <div className="bg-gradient-to-r mt-12 text-center space-y-6 from-[#084A96] to-[#187EF1] md:max-w-[70%] mx-auto px-4 md:px-20 py-8 rounded-4xl ">
                <h3 className="text-xl md:text-[32px] font-bold text-center text-white">Venha fazer parte da nossa história!</h3>
                <p className="text-sm md:text-lg text-white">Há 64 anos construindo relacionamentos verdadeiros e duradouros. Sua família também faz parte dessa jornada.</p>
            </div>
        </div>
    </>
}