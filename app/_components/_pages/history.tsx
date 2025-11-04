import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"

export default function History() {
    return (
        <section 
            id="nossa-historia" 
            className="w-full h-auto min-h-screen p-4 md:px-42 md:py-20"
            aria-labelledby="historia-heading"
            role="region"
        >
            {/* Skip link para navegação por teclado */}
            <a 
                href="#historia-carousel" 
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                aria-label="Pular para galeria de fotos históricas"
            >
                Pular para galeria histórica
            </a>

            <div className="bg-gray-200 px-6 py-12 md:px-12 gap-4 md:py-20 flex flex-col md:flex-row rounded-[32px]">
                <div className="flex flex-col justify-center flex-1" role="main">
                    <h1 
                        id="historia-heading"
                        className="text-sm md:text-[22px] font-semibold text-gray-600"
                        aria-label="Nossa História"
                    >
                        NOSSA HISTÓRIA
                    </h1>
                    <h2 className="mb-8 text-xl md:text-[32px] font-bold bg-gradient-to-r from-[#0056A3] to-[#172E52] bg-clip-text text-transparent">
                        Uma história guiada pela fé e construída com você.
                    </h2>
                    <div className="text-sm md:text-[20px] font-medium text-black" role="article" aria-label="História da empresa Super São Geraldo">
                        <p className="mb-4">
                            Há 64 anos, o Super São Geraldo faz parte da vida das famílias do Sertão Central. Fundado pelo visionário Sr. Geraldo Bertoldo, nasceu de um propósito maior: servir com dedicação, trabalho honesto e guiado pela fé cristã.
                        </p>
                        
                        <p className="mb-4">
                            Hoje, sob a direção do CEO Ângelo Nazareno, contamos com 7 lojas e seguimos crescendo, com a inauguração de uma nova unidade em Banabuiú.
                        </p>

                        <p className="mb-4">
                            Mais do que um supermercado, somos uma empresa construída sobre valores, tradição e fé, que continuam iluminando o nosso caminho.
                        </p>
                        
                        <p className="font-semibold text-orange-500" role="emphasis">
                            Super São Geraldo, 64 anos de história, fé e compromisso com você.
                        </p>
                    </div>
                </div>

                <div className="flex-1" role="img" aria-labelledby="carousel-description">
                    <p id="carousel-description" className="sr-only">
                        Galeria de fotos históricas do Super São Geraldo mostrando a evolução da empresa ao longo de 64 anos
                    </p>
                    
                    {/* Mobile Carousel - Horizontal */}
                    <div className="block md:hidden">
                        <nav 
                            id="historia-carousel"
                            aria-label="Galeria de fotos históricas - versão mobile"
                        >
                            <Carousel opts={{
                                loop: true,
                                align: "center"
                            }} className="w-full rounded-[80px]">
                                <CarouselContent className="w-full mx-auto rounded-[80px]">
                                    <CarouselItem className="w-full basis-1/2 rounded-md flex items-center">
                                        <Image 
                                            alt="Foto histórica do Super São Geraldo dos anos iniciais, mostrando a fachada original da primeira loja fundada pelo Sr. Geraldo Bertoldo" 
                                            src="/antigo.webp" 
                                            height={0} 
                                            width={0} 
                                            sizes="(max-width: 768px) 50vw, 25vw" 
                                            className="w-full h-auto rounded-[30px]"
                                            loading="lazy"
                                        />
                                    </CarouselItem>
                                    <CarouselItem className="w-full basis-1/2 rounded-md flex items-center">        
                                        <Image 
                                            alt="Segunda foto histórica do Super São Geraldo mostrando a expansão da empresa nas décadas seguintes" 
                                            src="/antigo2.webp" 
                                            height={0} 
                                            width={0} 
                                            sizes="(max-width: 768px) 50vw, 25vw" 
                                            className="w-full h-auto rounded-[30px]"
                                            loading="lazy"
                                        />
                                    </CarouselItem>
                                    <CarouselItem className="w-full basis-1/2 rounded-md flex items-center">
                                        <Image 
                                            alt="Terceira foto histórica do Super São Geraldo documentando o crescimento e modernização das instalações" 
                                            src="/antigo3.webp" 
                                            height={0} 
                                            width={0} 
                                            sizes="(max-width: 768px) 50vw, 25vw" 
                                            className="w-full h-auto rounded-[30px]"
                                            loading="lazy"
                                        />
                                    </CarouselItem>
                                    <CarouselItem className="w-full basis-1/2 rounded-md flex items-center">
                                        <Image 
                                            alt="Quarta foto histórica do Super São Geraldo representando a evolução até os dias atuais com 7 lojas no Sertão Central" 
                                            src="/antigo4.webp" 
                                            height={0} 
                                            width={0} 
                                            sizes="(max-width: 768px) 50vw, 25vw" 
                                            className="w-full h-auto rounded-[30px]"
                                            loading="lazy"
                                        />
                                    </CarouselItem>
                                </CarouselContent>
                            </Carousel>
                        </nav>
                    </div>

                    {/* Desktop Carousel - Vertical */}
                    <div className="hidden md:block">
                        <nav 
                            id="historia-carousel"
                            aria-label="Galeria de fotos históricas - versão desktop"
                        >
                            <Carousel opts={{
                                loop: true,
                                align: "center"
                            }} orientation="vertical" className="w-full rounded-[80px]">
                                <CarouselContent className="w-[80%] md:max-h-[600px] rounded-[80px]">
                                    <CarouselItem className="w-full basis-1/3 h-full rounded-[80px] flex items-center">
                                        <Image 
                                            alt="Foto histórica do Super São Geraldo dos anos iniciais, mostrando a fachada original da primeira loja fundada pelo Sr. Geraldo Bertoldo" 
                                            src="/antigo.webp" 
                                            height={0} 
                                            width={0} 
                                            sizes="(max-width: 768px) 100vw, 40vw" 
                                            className="w-full h-auto rounded-[80px]"
                                            loading="lazy"
                                        />
                                    </CarouselItem>
                                    <CarouselItem className="w-full basis-1/3 h-full rounded-[80px] flex items-center">
                                        <Image 
                                            alt="Segunda foto histórica do Super São Geraldo mostrando a expansão da empresa nas décadas seguintes" 
                                            src="/antigo2.webp" 
                                            height={0} 
                                            width={0} 
                                            sizes="(max-width: 768px) 100vw, 40vw" 
                                            className="w-full h-auto rounded-[80px]"
                                            loading="lazy"
                                        />
                                    </CarouselItem>
                                    <CarouselItem className="w-full basis-1/3 h-full rounded-[80px] flex items-center">
                                        <Image 
                                            alt="Terceira foto histórica do Super São Geraldo documentando o crescimento e modernização das instalações" 
                                            src="/antigo3.webp" 
                                            height={0} 
                                            width={0} 
                                            sizes="(max-width: 768px) 100vw, 40vw" 
                                            className="w-full h-auto rounded-[80px]"
                                            loading="lazy"
                                        />
                                    </CarouselItem>
                                    <CarouselItem className="w-full basis-1/3 h-full rounded-[80px] flex items-center">
                                        <Image 
                                            alt="Quarta foto histórica do Super São Geraldo representando a evolução até os dias atuais com 7 lojas no Sertão Central" 
                                            src="/antigo4.webp" 
                                            height={0} 
                                            width={0} 
                                            sizes="(max-width: 768px) 100vw, 40vw" 
                                            className="w-full h-auto rounded-[80px]"
                                            loading="lazy"
                                        />
                                    </CarouselItem>
                                </CarouselContent>
                                <CarouselPrevious 
                                    aria-label="Foto anterior na galeria histórica"
                                    className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                />
                                <CarouselNext 
                                    aria-label="Próxima foto na galeria histórica"
                                    className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                />
                            </Carousel>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    )
}