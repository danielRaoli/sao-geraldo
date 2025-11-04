import { Locate, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <section className="w-full px-4 md:px-42 py-12" aria-labelledby="footer-heading">
            {/* Skip link for keyboard navigation */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
            >
                Voltar ao conteúdo principal
            </a>

            <footer
                className="w-full bg-[#0056A3] text-white rounded-[48px] mt-20"
                role="contentinfo"
                aria-labelledby="footer-heading"
            >
                <div className="px-8 py-10 md:px-12 md:py-12">
                    <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center md:items-start justify-between">
                        {/* Logo dentro de cartão */}
                        <div className="shrink-0" role="banner" aria-label="Logo da empresa">
                            <div className="bg-white rounded-[28px] p-6 md:p-8 w-[220px] md:w-[230px] shadow-sm border-b-4 border-t-4 border-orange-500">
                                <Image
                                    src="/logo-azul.webp"
                                    alt="Logo do Super São Geraldo - Supermercado"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-full h-auto"
                                    priority
                                    loading="eager"
                                />
                            </div>
                        </div>

                        {/* Navegação central */}
                        <nav
                            className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8"
                            role="navigation"
                            aria-labelledby="footer-nav-heading"
                        >
                            <h2 id="footer-nav-heading" className="sr-only">Navegação do rodapé</h2>
                            <div className="flex justify-center md:flex-col gap-4 text-xs xl:text-lg" role="list" aria-label="Links principais">
                                <a
                                    href="#home"
                                    className="block text-white/90  hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 rounded"
                                    role="listitem"
                                    aria-label="Ir para a seção Início"
                                >
                                    Início
                                </a>
                                <a
                                    href="#nossa-historia"
                                    className="block text-white/90 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 rounded"
                                    role="listitem"
                                    aria-label="Ir para a seção Sobre Nós"
                                >
                                    Sobre Nós
                                </a>
                                <a
                                    href="#unidades"
                                    className="block text-white/90 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 rounded"
                                    role="listitem"
                                    aria-label="Ir para a seção Unidades"
                                >
                                    Unidades
                                </a>
                                <a
                                    href="#club"
                                    className="block text-white/90 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 rounded"
                                    role="listitem"
                                    aria-label="Ir para a seção Contato"
                                >
                                    Club
                                </a>
                            </div>
                            <div className="flex justify-center md:flex-col gap-4 text-xs xl:text-lg" role="list" aria-label="Links secundários">
                                <a
                                    href="#eventos"
                                    className="block text-white/90 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 rounded"
                                    role="listitem"
                                    aria-label="Ir para a seção Eventos"
                                >
                                    Eventos
                                </a>
                                <a
                                    href="#trabalhe-conosco"
                                    className="block text-white/90 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 rounded"
                                    role="listitem"
                                    aria-label="Ir para a seção Trabalhe Conosco"
                                >
                                    Trabalhe Conosco
                                </a>
                            </div>
                        </nav>

                        {/* Redes sociais e endereço */}
                        <aside className="w-full md:w-[340px] space-y-2" aria-labelledby="contact-info-heading">
                            <h2 id="contact-info-heading" className="sr-only">Informações de contato e redes sociais</h2>

                            <div className="flex flex-col-reverse md:flex-row items-center gap-2 mb-6">
                                <div
                                    className="flex items-center gap-2"
                                    role="list"
                                    aria-label="Redes sociais"
                                >
                                    {/* Facebook */}
                                    <a
                                        href="#"
                                        className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-white text-[#0056A3] hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                                        aria-label="Seguir no Facebook"
                                        role="listitem"
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-5 h-5"
                                            aria-hidden="true"
                                        >
                                            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.89h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.237.195 2.237.195v2.463h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
                                        </svg>
                                    </a>
                                    {/* Instagram */}
                                    <a
                                        href="#"
                                        className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-white text-[#0056A3] hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                                        aria-label="Seguir no Instagram"
                                        role="listitem"
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-5 h-5"
                                            aria-hidden="true"
                                        >
                                            <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.75-3.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" />
                                        </svg>
                                    </a>
                                </div>
                                <p className="text-white text-xs xl:text-lg" aria-label="Convite para seguir nas redes sociais">
                                    Nos siga nas <br /> redes sociais
                                </p>
                            </div>

                            <address className="flex flex-col items-center md:items-start gap-3 not-italic" role="group" aria-labelledby="address-heading">
                                <h3 id="address-heading" className="sr-only">Endereço da matriz</h3>
                                <div className="flex md:justify-start justify-center gap-2 w-full">
                                    <MapPin />
                                    <p className="font-semibold">Matriz</p>
                                </div>

                                <div>

                                    <p className="text-white/90">Avenida Plácido Castelo, 2472</p>
                                    <p className="text-white/90">Triângulo - Quixadá, CE</p>
                                </div>
                            </address>
                        </aside>
                    </div>
                </div>

                {/* Linha inferior */}
                <div className="px-8 md:px-12 py-6 border-t border-white/20">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/90">
                        <p role="contentinfo" aria-label="Informações de direitos autorais">
                            © 2025 Super São Geraldo — Todos os direitos reservados
                        </p>
                        <nav
                            className="flex flex-wrap items-center gap-6"
                            role="navigation"
                            aria-label="Links legais"
                        >
                            <a
                                href="#"
                                className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 rounded"
                                aria-label="Ver Política de Privacidade"
                            >
                                Política de Privacidade
                            </a>
                            <a
                                href="#"
                                className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 rounded"
                                aria-label="Ver Termos de Serviço"
                            >
                                Termos de Serviço
                            </a>
                            <a
                                href="#"
                                className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 rounded"
                                aria-label="Configurar preferências de cookies"
                            >
                                Configurações de Cookies
                            </a>
                        </nav>
                    </div>
                </div>
            </footer>

            <h1 id="footer-heading" className="sr-only">Rodapé do site Super São Geraldo</h1>
        </section>
    );
}