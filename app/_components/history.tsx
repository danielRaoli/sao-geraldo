import Image from "next/image"
export default function History() {
    return <>
        <div className="w-full h-auto min-h-screen p-4 md:px-42 md:py-20">
            <div className="bg-gray-200 px-6 py-12 md:px-12 gap-4 md:py-20 flex flex-col md:flex-row rounded-[80px]">
                <div className="flex flex-col flex-1">
                    <h2 className="text:sm md:text-[22px] font-semibold text-gray-600">NOSSA HISTÓRIA</h2>
                    <p className="mb-8 text-xl md:text-[32px] font-bold bg-gradient-to-r from-[#0056A3] to-[#172E52] bg-clip-text text-transparent">Uma história guiada pela fé e construída com você.</p>
                    <p className="text-sm md:text-[20px] font-medium text-black">
                        Há 64 anos, o Super São Geraldo faz parte da vida das famílias do Sertão Central. Fundado pelo visionário Sr. Geraldo Bertoldo, nasceu de um propósito maior: servir com dedicação, trabalho honesto e guiado pela fé cristã.
                        <br />
                        <br />

                        Hoje, sob a direção do CEO Ângelo Nazareno, contamos com 7 lojas e seguimos crescendo, com a inauguração de uma nova unidade em Banabuiú.

                        Mais do que um supermercado, somos uma empresa construída sobre valores, tradição e fé, que continuam iluminando o nosso caminho.
                        <br />
                        <br />
                        <span className="font-semibold text-orange-500">Super São Geraldo, 64 anos de história, fé e compromisso com você.</span>
                    </p>
                </div>


                <div className="flex-1">
                    <Image alt="Foto do antigo são geraldo para mostrar toda longevidade na grande história" src="/antigo-sao-geraldo.jpg" height={0} width={0} sizes="100vw" className="w-full h-auto rounded-[80px]" />
                </div>
            </div>


        </div>
    </>
}