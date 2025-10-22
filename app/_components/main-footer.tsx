import Image from "next/image";

export default function Footer() {
    return (
        <div className="w-full p-4 md:px-42 md:py-12">
            <footer className="w-full bg-[#0056A3] text-white rounded-[32px] md:rounded-[48px] mt-12 md:mt-20">
                <div className="px-6 py-8 md:px-12 md:py-12">
                    <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start justify-between">
                        {/* Logo dentro de cartão */}
                        <div className="shrink-0 mx-auto md:mx-0">
                            <div className="bg-white rounded-[20px] md:rounded-[28px] p-4 md:p-8 w-[180px] md:w-[230px] shadow-sm">
                                <Image
                                    src="/logo.png"
                                    alt="Logo do Super São Geraldo"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-full h-auto"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Navegação central */}
                        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                            <div className="space-y-3 md:space-y-4">
                                <a href="/" className="block text-white/90 hover:text-white transition text-sm md:text-base">Início</a>
                                <a href="/sobre" className="block text-white/90 hover:text-white transition text-sm md:text-base">Sobre Nós</a>
                                <a href="/#unidades" className="block text-white/90 hover:text-white transition text-sm md:text-base">Unidades</a>
                                <a href="/contato" className="block text-white/90 hover:text-white transition text-sm md:text-base">Contato</a>
                            </div>
                            <div className="space-y-3 md:space-y-4">
                                <a href="/eventos" className="block text-white/90 hover:text-white transition text-sm md:text-base">Eventos</a>
                                <a href="/trabalhe-conosco" className="block text-white/90 hover:text-white transition text-sm md:text-base">Trabalhe Conosco</a>
                            </div>
                        </div>

                        {/* Endereço */}
                        <div className="w-full md:w-[340px] space-y-2">
                            <div className="flex items-center gap-2 mb-4 md:mb-6">
                                    <div className="flex items-center gap-2">
                                        {/* Facebook */}
                                        <a
                                            aria-label="Facebook"
                                            href="#"
                                            className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-white text-[#0056A3] hover:opacity-90 transition"
                                        >
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.89h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.237.195 2.237.195v2.463h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
                                            </svg>
                                        </a>
                                        {/* Instagram */}
                                        <a
                                            aria-label="Instagram"
                                            href="#"
                                            className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-white text-[#0056A3] hover:opacity-90 transition"
                                        >
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                                                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.75-3.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" />
                                            </svg>
                                        </a>
                                    </div>
                                       <p className="text-white text-sm md:text-base">Nos siga nas <br /> redes sociais</p>
                                </div>
                            <div className="flex items-start gap-3">
                                <span className="inline-flex w-5 h-5 md:w-6 md:h-6 items-center justify-center text-white">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                                        <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                                    </svg>
                                </span>
                                <div>
                                    <p className="font-semibold text-sm md:text-base">Matriz</p>
                                    <p className="text-white/90 text-sm md:text-base">Avenida Plácido Castelo, 2472</p>
                                    <p className="text-white/90 text-sm md:text-base">Triângulo - Quixadá, CE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Linha inferior */}
                <div className="px-6 md:px-12 py-4 md:py-6 border-t border-white/20">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/90">
                        <p className="text-sm md:text-base text-center md:text-left">© 2025 Super São Geraldo — Todos os direitos reservados</p>
                        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                            <a href="#" className="hover:text-white transition text-sm md:text-base">Política de Privacidade</a>
                            <a href="#" className="hover:text-white transition text-sm md:text-base">Termos de Serviço</a>
                            <a href="#" className="hover:text-white transition text-sm md:text-base">Configurações de Cookies</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    );
}