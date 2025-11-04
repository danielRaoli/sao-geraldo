import StoreLocation from "../sotore-location";

export default function Stores() {
    return (
        <section 
            id="unidades" 
            className="w-full h-auto text-center min-h-screen px-4 md:px-42 py-20"
            aria-labelledby="stores-heading"
            role="region"
        >
            {/* Skip link for keyboard navigation */}
            <a 
                href="#store-location" 
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
            >
                Pular para localização das lojas
            </a>

            <div role="banner" aria-label="Título da seção de lojas">
                <h1 
                    id="stores-heading"
                    className="text-xl hidden md:block md:text-[48px] text-center font-bold text-[#035C94]"
                    aria-label="Encontre o Super São Geraldo mais próximo de você"
                >
                    Encontre o <span className="bg-gradient-to-r from-[#035C94] to-[#172D50] bg-clip-text mb-8 text-transparent text-4xl md:text-[58px]">Super São Geraldo</span>
                </h1>
                <h1 
                    className="text-xl block md:hidden md:text-[48px] text-center font-bold text-[#035C94]"
                    aria-label="Encontre o Super São Geraldo mais próximo de você"
                >
                    Encontre o <br /> <span className="bg-gradient-to-r from-[#035C94] to-[#172D50] bg-clip-text mb-8 text-transparent text-4xl md:text-[58px]">Super São Geraldo</span>
                </h1>
                <p 
                    className="text-xl md:text-[48px] text-center font-bold bg-gradient-to-r from-[#F08B26] to-[#EB6128] bg-clip-text mb-8 text-transparent"
                    aria-label="mais próximo de você"
                >
                    mais próximo de você
                </p>
            </div>

            <div id="store-location" role="main" aria-label="Localização das lojas">
                <StoreLocation />
            </div>
        </section>
    );
}