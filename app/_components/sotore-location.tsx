"use client"
import { BatteryCharging, Clock, Coffee, Croissant, Ham, Mail, MapPin, PhoneCall, Wifi } from "lucide-react";
import { useRef, useState } from "react";

const stores = [
    {
        name: "Loja Matriz",
        endereco: "Rua Tabelião, 645 - Centro Quixadá - CE, 63900-169",
        telefone: "(88) 3412-0850",
        email: "loja.centro@saogeraldo.com.br",
        horarioSemana: "06:00 - 21:00",
        horarioDomingoFeriado: "06:00 - 19:00",
        servico: {
            cafeteria: true,
            acougue: true,
            padaria: true,
            wifi: true,
            carregarCelular: false
        },
        iframe: <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15899.19194565406!2d-39.0247460063382!3d-4.973214670047445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7be9fb85d7fc80d%3A0x38e121c82377f4bc!2sS%C3%A3o%20Geraldo!5e0!3m2!1spt-BR!2sbr!4v1760283229061!5m2!1spt-BR!2sbr"
            width="600"
            className="w-full"
            height="450"
            loading="lazy"
            title="Localização da Loja Matriz São Geraldo"
            aria-label="Mapa mostrando a localização da Loja Matriz"
        />
    },
    {
        name: "Alto São Francisco",
        endereco: "Rua Epitácio Pessoa, 783 - Irajá, Quixadá - CE, 63908-065",
        telefone: "(88) 3412-1932",
        email: "loja.alto@gsaogeraldo.com.br",
        horarioSemana: "07:00 - 21:00",
        horarioDomingoFeriado: "07:00 - 19:00",
        servico: {
            cafeteria: true,
            acougue: true,
            padaria: true,
            wifi: true,
            carregarCelular: false
        },
        iframe: <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.8251710889995!2d-39.01003430000001!3d-4.968709400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7be9fbfb450d2a9%3A0x89560f9b557af8fd!2sRua%20Epit%C3%A1cio%20Pessoa%2C%20783%20-%20Iraj%C3%A1%2C%20Quixad%C3%A1%20-%20CE%2C%2063908-065!5e0!3m2!1spt-BR!2sbr!4v1762128393947!5m2!1spt-BR!2sbr"
            width="600"
            className="w-full"
            height="450"
            loading="lazy"
            title="Localização da Loja Alto São Francisco"
            aria-label="Mapa mostrando a localização da Loja Alto São Francisco"
        />
    },
    {
        name: "Campo Novo",
        endereco: "Av. Presidente Vargas, 740 - Campo Novo, Quixadá - CE, 63900-000",
        telefone: "(88) 3412-1837",
        email: "loja.campo@gsaogeraldo.com.br",
        horarioSemana: "06:00 - 21:00",
        horarioDomingoFeriado: "06:00 - 19:00",
        servico: {
            cafeteria: true,
            acougue: true,
            padaria: true,
            wifi: true,
            carregarCelular: false
        },
        iframe: <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.7428872534974!2d-39.02144592525919!3d-4.982333694993935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7be9fda00f2f597%3A0x95b9a38bfbfec428!2sAv.%20Presidente%20Vargas%2C%20740%20-%20Campo%20Novo%2C%20Quixad%C3%A1%20-%20CE%2C%2063900-000!5e0!3m2!1spt-BR!2sbr!4v1762128502200!5m2!1spt-BR!2sbr"
            width="600"
            className="w-full"
            height="450"
            loading="lazy"
            title="Localização da Loja Campo Novo"
            aria-label="Mapa mostrando a localização da Loja Campo Novo"
        />
    },
    {
        name: "Banabuiú",
        endereco: "R. Arrojado Lisboa, 142 - Centro, Banabuiú - CE, 63960-000",
        telefone: "(88) 3412-0322",
        email: "loja.banabuiu@gsaogeraldo.com.br",
        horarioSemana: "07:00 - 20:00",
        horarioDomingoFeriado: "07:00 - 17:00",
        servico: {
            cafeteria: true,
            acougue: true,
            padaria: true,
            wifi: true,
            carregarCelular: false
        },
        iframe: <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.71309790132!2d-38.92309172525674!3d-5.3073864946709675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7bc6b940fe1cec5%3A0x6d2eb7f61f73a4d1!2sR.%20Arrojado%20Lisboa%2C%20142%20-%20Centro%2C%20Banabui%C3%BA%20-%20CE%2C%2063960-000!5e0!3m2!1spt-BR!2sbr!4v1762128536452!5m2!1spt-BR!2sbr"
            className="w-full"
            height="450"
            loading="lazy"
            title="Localização da Loja Banabuiú"
            aria-label="Mapa mostrando a localização da Loja Banabuiú"
        />
    },
    {
        name: "Atacarejo Herval",
        endereco: "R. Francisco de Assis Brasileiro, 48 - Herval, Quixadá - CE, 63900-000",
        telefone: "(88) 3412-0458",
        email: "loja.herval@gsaogeraldo.com.br",
        horarioSemana: "07:00 - 21:00",
        horarioDomingoFeriado: "07:00 - 19:00",
        servico: {
            cafeteria: true,
            acougue: true,
            padaria: true,
            wifi: true,
            carregarCelular: false
        },
        iframe: <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.837123874223!2d-39.01921432525933!3d-4.966727195009473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7be9fb99c6d8f2d%3A0x7e7c537421caf76a!2sR.%20Francisco%20de%20Assis%20Brasileiro%2C%2048%20-%20Herval%2C%20Quixad%C3%A1%20-%20CE%2C%2063900-000!5e0!3m2!1spt-BR!2sbr!4v1762128626877!5m2!1spt-BR!2sbr"
            className="w-full"
            height="450"
            loading="lazy"
            title="Localização da Loja Atacarejo Herval"
            aria-label="Mapa mostrando a localização da Loja Atacarejo Herval"
        />
    },
    {
        name: "Quixeramobim",
        endereco: "Av. Geraldo Bizarria de Carvalho, 304 - Vila Betania, Quixeramobim - CE, 63800-000",
        telefone: "(88) 99957-0009",
        email: "loja.quixeramobim@gsaogeraldo.com.br",
        horarioSemana: "07:00 - 21:00",
        horarioDomingoFeriado: "07:00 - 19:00",
        servico: {
            cafeteria: true,
            acougue: true,
            padaria: true,
            wifi: true,
            carregarCelular: false
        },
        iframe: <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.4754459596975!2d-39.29399012525775!3d-5.187685594789837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7bc34ee76f839f5%3A0x4de3121cc4af64b4!2sAv.%20Geraldo%20Bizarria%20de%20Carvalho%2C%20304%20-%20Vila%20Betania%2C%20Quixeramobim%20-%20CE%2C%2063800-000!5e0!3m2!1spt-BR!2sbr!4v1762128737610!5m2!1spt-BR!2sbr"
            className="w-full"
            height="450"
            loading="lazy"
            title="Localização da Loja Quixeramobim"
            aria-label="Mapa mostrando a localização da Loja Quixeramobim"
        />
    },
    {
        name: "Centro 2 (Caixa)",
        endereco: "Rua José de Queiroz Pessoa, 1703 - Centro, Quixadá - CE, 63900-000",
        telefone: "(88) 99803-0208",
        email: "loja.caixa@gsaogeraldo.com.br",
        horarioSemana: "07:00 - 21:00",
        horarioDomingoFeriado: "07:00 - 13:00",
        servico: {
            cafeteria: true,
            acougue: true,
            padaria: true,
            wifi: true,
            carregarCelular: true
        },
        iframe: <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.824992068241!2d-39.023164822743304!3d-4.968739082134556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7be9fb83b52313b%3A0x74c9537f3b712679!2sRua%20Jos%C3%A9%20de%20Queiroz%20Pessoa%2C%201703%20-%20Centro%2C%20Quixad%C3%A1%20-%20CE%2C%2063900-000!5e0!3m2!1spt-BR!2sbr!4v1762128771860!5m2!1spt-BR!2sbr"
            className="w-full"
            height="450"
            loading="lazy"
            title="Localização da Loja Centro"
            aria-label="Mapa mostrando a localização da Loja Centro"
        />
    },
];

export default function StoreLocation() {
    const [store, setStore] = useState(stores[0]);
    const [selecionando, setSelecionando] = useState(false);
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [dragging, setDragging] = useState(false);
    const posRef = useRef({ startX: 0, scrollLeft: 0 });
    const downRef = useRef(false);

    const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        const el = scrollRef.current;
        if (!el) return;
        downRef.current = true;
        setDragging(false);
        posRef.current = { startX: e.clientX, scrollLeft: el.scrollLeft };
    };

    const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (!downRef.current) return;
        const el = scrollRef.current;
        if (!el) return;
        const delta = e.clientX - posRef.current.startX;
        if (Math.abs(delta) > 5 && !dragging) {
            setDragging(true);
        }
        el.scrollLeft = posRef.current.scrollLeft - delta;
    };

    const endDrag = (_e: React.PointerEvent<HTMLDivElement>) => {
        downRef.current = false;
        setDragging(false);
    };

    return (
        <section
            className="w-full h-auto flex flex-col"
            aria-labelledby="store-location-heading"
            role="region"
        >
            {/* Skip link for keyboard navigation */}
            <a
                href="#store-selector"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
            >
                Pular para seletor de lojas
            </a>

            <header
                className="w-full flex flex-col md:flex-row items-center text-start bg-gray-100 rounded-t-4xl px-4 md:px-14 py-8 h-auto"
                role="banner"
                aria-label="Informações da loja selecionada"
            >
                <div className="flex-1 space-y-2 justify-start">
                    <div className="flex gap-2 items-center">
                        <h1
                            id="store-location-heading"
                            className="text-2xl md:text-[48px] font-semibold text-primary"
                        >
                            {store.name}
                        </h1>
                        <MapPin
                            className="w-[30px] h-[30px] md:w-[52px] md:h-[52px] text-primary"
                            aria-hidden="true"
                        />
                    </div>

                    <address className="text-sm md:text-[18px] font-medium text-primary mb-8 not-italic">
                        {store.endereco}
                    </address>

                    <div className="space-y-2">
                        <div className="flex gap-2 items-center">
                            <PhoneCall
                                className="w-[18px] h-[18px] md:w-[24px] md:h-[24px] text-primary"
                                aria-hidden="true"
                            />
                            <span className="text-sm md:text-[18px] text-black">
                                <span className="font-medium">Telefone:</span>
                                <a
                                    href={`tel:${store.telefone}`}
                                    className="hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                                    aria-label={`Ligar para ${store.telefone}`}
                                >
                                    {store.telefone}
                                </a>
                            </span>
                        </div>

                        <div className="flex gap-2 items-center">
                            <Mail
                                className="w-[18px] h-[18px] md:w-[24px] md:h-[24px] text-primary"
                                aria-hidden="true"
                            />
                            <span className="text-sm md:text-[18px] text-black">
                                <span className="font-medium">E-mail:</span>
                                <a
                                    href={`mailto:${store.email}`}
                                    className="hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                                    aria-label={`Enviar e-mail para ${store.email}`}
                                >
                                    {store.email}
                                </a>
                            </span>
                        </div>

                        <div className="flex gap-2 items-center">
                            <Clock
                                className="w-[18px] h-[18px] md:w-[24px] md:h-[24px] text-primary"
                                aria-hidden="true"
                            />
                            <span className="font-medium text-sm md:text-[18px] text-black">
                                Horário de Funcionamento:
                            </span>
                        </div>

                        <div className="px-8 mb-8" role="list" aria-label="Horários de funcionamento">
                            <div role="listitem" className="text-sm md:text-[18px] text-black">
                                <span className="font-medium">Segunda à Sábado:</span> das {store.horarioSemana}
                            </div>
                            <div role="listitem" className="text-sm md:text-[18px] text-black">
                                <span className="font-medium">Domingo e Feriados:</span> das {store.horarioDomingoFeriado}
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => setSelecionando(!selecionando)}
                        className="rounded-full hidden md:block bg-primary cursor-pointer text-white py-[14px] px-[28px] text-[18px] font-medium hover:bg-primary-hover transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        aria-expanded={selecionando}
                        aria-controls="store-selector"
                        aria-label={selecionando ? "Fechar seletor de lojas" : "Abrir seletor de lojas"}
                    >
                        Trocar Loja
                    </button>
                </div>

                <aside className="flex-1 items-center h-full my-auto justify-center" aria-labelledby="services-heading">
                    <h2
                        id="services-heading"
                        className="text-2xl md:text-[36px] text-center font-bold text-primary mb-6"
                    >
                        Serviços
                    </h2>
                    <div
                        className="flex flex-wrap items-center justify-evenly gap-4"
                        role="list"
                        aria-label="Serviços disponíveis nesta loja"
                    >
                        {store.servico.cafeteria && (
                            <div className="flex flex-col items-center" role="listitem">
                                <Coffee
                                    className="w-[28px] h-[28px] md:w-[34px] md:h-[34px] text-primary"
                                    aria-hidden="true"
                                />
                                <span className="text-sm md:text-[18px] text-black">Cafeteria</span>
                            </div>
                        )}
                        {store.servico.acougue && (
                            <div className="flex flex-col items-center" role="listitem">
                                <Ham
                                    className="w-[28px] h-[28px] md:w-[34px] md:h-[34px] text-primary"
                                    aria-hidden="true"
                                />
                                <span className="text-sm md:text-[18px] text-black">Açougue</span>
                            </div>
                        )}
                        {store.servico.padaria && (
                            <div className="flex flex-col items-center" role="listitem">
                                <Croissant
                                    className="w-[28px] h-[28px] md:w-[34px] md:h-[34px] text-primary"
                                    aria-hidden="true"
                                />
                                <span className="text-sm md:text-[18px] text-black">Padaria</span>
                            </div>
                        )}
                        {store.servico.wifi && (
                            <div className="flex flex-col items-center" role="listitem">
                                <Wifi
                                    className="w-[28px] h-[28px] md:w-[34px] md:h-[34px] text-primary"
                                    aria-hidden="true"
                                />
                                <span className="text-sm md:text-[18px] text-black">Wi-Fi</span>
                            </div>
                        )}
                        {store.servico.carregarCelular && (
                            <div className="flex flex-col items-center" role="listitem">
                                <BatteryCharging
                                    className="w-[28px] h-[28px] md:w-[34px] md:h-[34px] text-primary"
                                    aria-hidden="true"
                                />
                                <span className="text-sm md:text-[18px] text-black">Carregar Celular</span>
                            </div>
                        )}
                    </div>
                </aside>

                <button
                    onClick={() => setSelecionando(!selecionando)}
                    className="rounded-full mt-3 bg-primary md:hidden text-sm cursor-pointer text-white py-[14px] px-[28px] md:text-[18px] font-medium hover:bg-primary-hover transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    aria-expanded={selecionando}
                    aria-controls="store-selector"
                    aria-label={selecionando ? "Fechar seletor de lojas" : "Abrir seletor de lojas"}
                >
                    Trocar Loja
                </button>
            </header>

            {selecionando && (
                <>
                    <nav
                        id="store-selector"
                        className="flex w-full md:hidden gap-4 bg-gray-100 px-14 overflow-x-auto overflow-y-hidden h-auto py-4 [&::-webkit-scrollbar]:hidden "
                        role="tablist"
                        aria-label="Seletor de lojas"
                        aria-describedby="store-selector-help"
                    >
                        <div id="store-selector-help" className="sr-only">
                            Use as setas do teclado ou arraste para navegar entre as lojas disponíveis
                        </div>
                        {stores.map((storeItem, index) => (
                            <button
                                key={storeItem.name}
                                onClick={() => {
                                    if (!dragging) {
                                        setStore(storeItem);
                                        setSelecionando(false);
                                    }
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        setStore(storeItem);
                                        setSelecionando(false);
                                    }
                                }}
                                className="bg-primary text-white text-sm md:text-[18px] px-[28px] py-[14px] text-nowrap rounded-full cursor-pointer transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                                role="tab"
                                aria-selected={store.name === storeItem.name}
                                aria-controls="store-info"
                                tabIndex={0}
                                aria-label={`Selecionar loja ${storeItem.name}`}
                            >
                                {storeItem.name}
                            </button>
                        ))}
                    </nav>

                    <nav
                        id="store-selector"
                        ref={scrollRef}
                        onPointerDown={onPointerDown}
                        onPointerMove={onPointerMove}
                        onPointerUp={endDrag}
                        onPointerLeave={endDrag}
                        className="hidden w-full md:flex gap-4 bg-gray-100 px-14 overflow-x-auto overflow-y-hidden h-auto py-4 [&::-webkit-scrollbar]:hidden select-none cursor-grab active:cursor-grabbing [touch-action:pan-y]"
                        role="tablist"
                        aria-label="Seletor de lojas"
                        aria-describedby="store-selector-help"
                    >
                        <div id="store-selector-help" className="sr-only">
                            Use as setas do teclado ou arraste para navegar entre as lojas disponíveis
                        </div>
                        {stores.map((storeItem, index) => (
                            <button
                                key={storeItem.name}
                                onClick={() => {
                                    if (!dragging) {
                                        setStore(storeItem);
                                        setSelecionando(false);
                                    }
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        setStore(storeItem);
                                        setSelecionando(false);
                                    }
                                }}
                                className="bg-primary text-white text-sm md:text-[18px] px-[28px] py-[14px] text-nowrap rounded-full cursor-pointer transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                                role="tab"
                                aria-selected={store.name === storeItem.name}
                                aria-controls="store-info"
                                tabIndex={0}
                                aria-label={`Selecionar loja ${storeItem.name}`}
                            >
                                {storeItem.name}
                            </button>
                        ))}
                    </nav>
                </>
            )}

            <main
                id="store-info"
                role="main"
                aria-label={`Mapa da loja ${store.name}`}
                aria-live="polite"
            >
                {store.iframe}
            </main>
        </section>
    );
}