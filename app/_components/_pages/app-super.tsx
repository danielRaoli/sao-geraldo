import Image from "next/image"


export default function AppSuper() {
    return (
        <section 
            id="app-super" 
            className="w-full px-4 pt-8 md:px-42 md:py-24 flex flex-col-reverse md:flex-row gap-4"
            aria-labelledby="app-super-heading"
            role="region"
        >
            {/* Skip link para navegação por teclado */}
            <a 
                href="#app-download-links" 
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                aria-label="Pular para links de download do aplicativo"
            >
                Pular para download do app
            </a>

            <div className="flex-1  relative" role="img" aria-labelledby="mockup-description">
               
                <Image 
                    className="w-[80%] h-auto z-2 mx-auto" 
                    src="/mockup.webp" 
                    alt="Mockup do aplicativo Super São Geraldo mostrando a interface do app em um smartphone, destacando funcionalidades como ofertas exclusivas e localização de lojas" 
                    height={0} 
                    width={0} 
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                />
                <p id="mockup-description" className="sr-only">
                    Imagem promocional do aplicativo Super São Geraldo exibindo a interface em um dispositivo móvel
                </p>
                
                {/* Links de download para mobile */}
                <nav 
                    className="flex md:hidden justify-center gap-4 w-full mt-4" 
                    aria-label="Links para download do aplicativo - versão mobile"
                    id="app-download-links-mobile"
                >
                    <a 
                        href="https://play.google.com/store/apps/details?id=mercadapp.fgl.com.saogeraldo&hl=pt_BR" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded transition-transform hover:scale-105"
                        aria-label="Baixar aplicativo Super São Geraldo na Google Play Store"
                    >
                        <Image 
                            className="h-auto"          
                            src="/googleplay.webp" 
                            alt="Disponível no Google Play" 
                            height={48} 
                            width={150}     
                        />
                    </a>
                    <a 
                        href="https://apps.apple.com/br/app/super-s%C3%A3o-geraldo/id1552717070" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded transition-transform hover:scale-105"
                        aria-label="Baixar aplicativo Super São Geraldo na App Store"
                    >
                        <Image 
                            className="h-auto" 
                            src="/appstore.webp" 
                            alt="Disponível na App Store" 
                            height={48} 
                            width={150} 
                        />
                    </a>
                </nav>
            </div>

            <div className="flex-1 my-auto" role="main">
                {/* Cabeçalho principal para desktop */}
                <h1 
                    id="app-super-heading"
                    className="hidden md:block text-[48px] font-bold bg-gradient-to-r from-[#187EF1] to-[#084A96] bg-clip-text text-transparent leading-[1]"
                    aria-label="Tenha o Super São Geraldo"
                >
                    Tenha o<br />
                    <span className="text-[66px] font-bold">Super <br /> São Geraldo</span>
                </h1>

                {/* Cabeçalho principal para mobile */}
                <h1 
                    className="md:hidden text-[24px] font-bold text-center bg-gradient-to-r from-[#187EF1] to-[#084A96] bg-clip-text text-transparent leading-[1]"
                    aria-label="Tenha o Super São Geraldo"
                >
                    Tenha o <br />
                    <span className="text-[32px] font-bold">Super São Geraldo</span>
                </h1>

                <h2 className="text-2xl md:text-[52px] text-center md:text-start md:-mt-2 bg-gradient-to-r from-[#F28E28] font-bold to-[#EB6028] leading-[1.2] bg-clip-text text-transparent">
                    na palma da sua mão!
                </h2>

                <p className="text-xl md:text-2xl text-center md:text-start mb-4 text-black">
                    Acompanhe ofertas exclusivas, encontre a loja mais perto de você e aproveite benefícios do nosso clube de descontos diretamente no app.
                </p>

                {/* Links de download para desktop */}
                <nav 
                    className="md:flex hidden gap-4 w-full" 
                    aria-label="Links para download do aplicativo - versão desktop"
                    id="app-download-links"
                >
                    <a 
                        href="https://play.google.com/store/apps/details?id=mercadapp.fgl.com.saogeraldo&hl=pt_BR" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded transition-transform hover:scale-105"
                        aria-label="Baixar aplicativo Super São Geraldo na Google Play Store"
                    >
                        <Image 
                            className="h-auto" 
                            src="/googleplay.webp" 
                            alt="Disponível no Google Play" 
                            height={48} 
                            width={150} 
                        />
                    </a>
                    <a 
                        href="https://apps.apple.com/br/app/super-s%C3%A3o-geraldo/id1552717070" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded transition-transform hover:scale-105"
                        aria-label="Baixar aplicativo Super São Geraldo na App Store"
                    >
                        <Image 
                            className="h-auto" 
                            src="/appstore.webp" 
                            alt="Disponível na App Store" 
                            height={48} 
                            width={150} 
                        />
                    </a>
                </nav>
            </div>
        </section>
    )
}