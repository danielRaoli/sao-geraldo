import Image from "next/image"

export default function ClubSection(){
    return (
        <section 
            id="club" 
            className="w-full pb-24 px-4 md:px-42"
            aria-labelledby="club-heading"
            role="region"
        >
            {/* Skip link for keyboard navigation */}
            <a 
                href="#club-content" 
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
            >
                Pular para conteúdo do clube
            </a>

            <div className="bg-gray-100 flex flex-col md:flex-row gap-8 rounded-4xl px-4 md:px-15 py-10">
                <div className="w-full my-auto text-center flex-1 justify-start">
                    <header role="banner" aria-label="Título do Clube de Ofertas">
                        <h1 
                            id="club-heading"
                            className="text-3xl md:text-[48px] font-bold bg-gradient-to-r from-[#F08B26] to-[#EB6128] bg-clip-text text-transparent"
                        >
                            Clube de Ofertas
                        </h1>
                        <p 
                            className="font-bold text-3xl md:text-[48px] md:-mt-4"
                            aria-label="para Você!"
                        >
                            para <span className="text-4xl md:text-[62px] bg-gradient-to-r from-[#01609B] to-[#1A2545] bg-clip-text text-transparent font-extrabold">Você!</span>
                        </p>
                    </header>
                    
                    <div role="img" aria-label="Imagem promocional do clube de ofertas">
                        <Image 
                            src="/tradicao.webp" 
                            alt="Imagem promocional do Clube de Ofertas Super São Geraldo mostrando tradição e qualidade" 
                            width={0} 
                            height={0} 
                            sizes="100vw" 
                            className="w-full h-auto" 
                            loading="lazy"
                            priority={false}
                        />
                    </div>
                </div>
                
                <div id="club-content" className="flex-1 space-y-2" role="main" aria-label="Informações do clube">
                    <h2 className="text-primary text-xl text-center md:text-[36px] font-bold">
                        Economize mais com o Clube de Ofertas Super São Geraldo!
                    </h2>
                    
                    <div className="flex flex-col items-center md:flex-row gap-2 w-full" role="complementary" aria-label="QR Code e instruções">
                        <div className="bg-white w-[80%] max-w-[200px] md:min-w-[200px] p-4 rounded-md">
                            <Image 
                                src="/qrcode.webp" 
                                alt="QR Code para cadastro no Clube de Ofertas Super São Geraldo - escaneie para se cadastrar gratuitamente" 
                                width={0} 
                                height={0} 
                                sizes="100vw" 
                                className="w-full h-auto"
                                loading="lazy"
                            />
                        </div>
                        <p className="text-black text-center text-sm md:text-md md:text-left">
                            Cadastre-se grátis, escaneie o QR Code e tenha acesso a descontos exclusivos, promoções especiais e vantagens pensadas para você e sua família.
                        </p>
                    </div>
                    
                    <p className="text-secondary md:text-lg text-md text-center md:text-left font-bold" role="note" aria-label="Chamada para ação">
                        Seu bolso agradece. Aproveite as ofertas antes de todo mundo!
                    </p>
                </div>
            </div>
        </section>
    );
}