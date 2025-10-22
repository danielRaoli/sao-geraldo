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
        iframe: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15899.19194565406!2d-39.0247460063382!3d-4.973214670047445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7be9fb85d7fc80d%3A0x38e121c82377f4bc!2sS%C3%A3o%20Geraldo!5e0!3m2!1spt-BR!2sbr!4v1760283229061!5m2!1spt-BR!2sbr" width="600" className="w-full" height="450" loading="lazy" ></iframe>
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
        iframe: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15899.19194565406!2d-39.0247460063382!3d-4.973214670047445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7be9fb85d7fc80d%3A0x38e121c82377f4bc!2sS%C3%A3o%20Geraldo!5e0!3m2!1spt-BR!2sbr!4v1760283229061!5m2!1spt-BR!2sbr" width="600" className="w-full" height="450" loading="lazy" ></iframe>
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
        iframe: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15899.19194565406!2d-39.0247460063382!3d-4.973214670047445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7be9fb85d7fc80d%3A0x38e121c82377f4bc!2sS%C3%A3o%20Geraldo!5e0!3m2!1spt-BR!2sbr!4v1760283229061!5m2!1spt-BR!2sbr" width="600" className="w-full" height="450" loading="lazy" ></iframe>
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
        }
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
        }
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
        }
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
        }
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
    return <>
        <div className="w-full h-auto flex flex-col ">
            <div className="w-full flex flex-col md:flex-row items-center text-start bg-gray-100 rounded-t-4xl px-4 md:px-14 py-8 h-auto">
                <div className="flex-1 space-y-2 justify-start">
                    <div className="flex gap-2 items-center">
                        <h3 className="text-2xl md:text-[48px] font-semibold text-primary  ">{store.name}</h3>
                        <MapPin className="w-[30px] h-[30px] md:w-[52px] md:h-[52px] text-primary" />
                    </div>

                    <p className="text-sm md:text-[18px] font-medium text-primary mb-8 ">{store.endereco}</p>
                    <div className="flex gap-2 items-center">
                        <PhoneCall className="w-[18px] h-[18px] md:w-[24px] md:h-[24px] text-primary" />
                        <span className="text-sm md:text-[18px] text-black"> <span className="font-medium">Telefone:</span> {store.telefone}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Mail className="w-[18px] h-[18px] md:w-[24px] md:h-[24px] text-primary" />
                        <span className="text-sm md:text-[18px] text-black"> <span className="font-medium">E-mail:</span> {store.email}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Clock className="w-[18px] h-[18px] md:w-[24px] md:h-[24px] text-primary" />
                        <span className="font-medium text-sm md:text-[18px] text-black">Horário de Funcionamento:</span>
                    </div>
                    <div className="px-8 mb-8">
                        <span className="text-sm md:text-[18px] text-black">  <span>Segunda à Sábado:</span> das {store.horarioSemana}</span><br />
                        <span className="text-sm md:text-[18px] text-black">  <span>Domingo e Feriados:</span> das {store.horarioDomingoFeriado}</span>
                    </div>
                    <button onClick={() => setSelecionando(!selecionando)} className="rounded-full hidden md:block bg-primary cursor-pointer text-white py-[14px] px-[28px] text-[18px] font-medium hover:bg-primary-hover transition-all duration-300 transform hover:scale-105 ">
                        Trocar Loja
                    </button>
                </div>
                <div className="flex-1 items-center h-full  my-auto justify-center">
                    <h3 className="text-2xl md:text-[36px] text-center font-bold text-primary mb-6">Serviços</h3>
                    <div className="flex flex-wrap items-center justify-evenly gap-4">
                        {
                            store.servico.cafeteria && (
                                <div className="flex flex-col items-center">
                                    <Coffee className="w-[28px] h-[28px] md:w-[34px] md:h-[34px] text-primary" />
                                    <span className="text-sm md:text-[18px] text-black">Cafeteria</span>
                                </div>
                            )
                        }
                        {
                            store.servico.acougue && (
                                <div className="flex flex-col items-center">
                                    <Ham className="w-[28px] h-[28px] md:w-[34px] md:h-[34px] text-primary" />
                                    <span className="text-sm md:text-[18px] text-black">Hambúrguer</span>
                                </div>
                            )
                        }
                        {
                            store.servico.padaria && (
                                <div className="flex flex-col items-center">
                                    <Croissant className="w-[28px] h-[28px] md:w-[34px] md:h-[34px] text-primary" />
                                    <span className="text-sm md:text-[18px] text-black">Croissant</span>
                                </div>
                            )
                        }
                        {
                            store.servico.wifi && (
                                <div className="flex flex-col items-center">
                                    <Wifi className="w-[28px] h-[28px] md:w-[34px] md:h-[34px] text-primary" />
                                    <span className="text-sm md:text-[18px] text-black">Wi-Fi</span>
                                </div>
                            )
                        }
                        {
                            store.servico.carregarCelular && (
                                <div className="flex flex-col items-center">
                                    <BatteryCharging className="md:w-[34px] md:h-[34px] text-primary" />
                                    <span className="text-sm md:text-[18px] text-black">Carregar Celular</span>
                                </div>
                            )
                        }
                    </div>

                </div>
                <button onClick={() => setSelecionando(!selecionando)} className="rounded-full mt-3 bg-primary md:hidden text-sm cursor-pointer text-white py-[14px] px-[28px] md:text-[18px] font-medium hover:bg-primary-hover transition-all duration-300 transform hover:scale-105 ">
                    Trocar Loja
                </button>
            </div>

            {selecionando && (
                <div
                    ref={scrollRef}
                    onPointerDown={onPointerDown}
                    onPointerMove={onPointerMove}
                    onPointerUp={endDrag}
                    onPointerLeave={endDrag}
                    className="w-full flex gap-4 bg-gray-100 px-14 overflow-x-auto overflow-y-hidden h-auto py-4 [&::-webkit-scrollbar]:hidden select-none cursor-grab active:cursor-grabbing [touch-action:pan-y]"
                >
                    {stores.map((store) =>
                        <div onClick={() => { if (!dragging) setStore(store); }} className="bg-primary text-white text-sm md:text-[18px] px-[28px] py-[14px] text-nowrap rounded-full cursor-pointer transition-all  duration-300 transform hover:scale-105">
                            {store.name}
                        </div>
                    )}
                </div>
            )}
            {store.iframe}
        </div>
    </>
}