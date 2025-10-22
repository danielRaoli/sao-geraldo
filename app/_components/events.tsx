import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Calendar } from "lucide-react";

export default function EventsSection() {
    return <>
        <div className="w-full space-y-6 p-4 md:px-42 md:py-20">
            <h4 className="text-3xl md:text-[48px] bg-gradient-to-r text-center font-bold to-[#F08B26] from-[#EB6128] bg-clip-text text-transparent">Nossos Eventos</h4>
            <BentoGrid>
                <BentoCard
                    name="Corrida Super São Geraldo"
                    className=""
                    background={<div className="absolute  [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] [--duration:20s] inset-0 bg-[url('/run.png')] bg-cover bg-center " />}
                    Icon={Calendar}
                    description="Atividade esportiva que promove saúde, integração e bem-estar, incentivando hábitos de vida saudáveis e fortalecendo o vínculo com a comunidade."
                    href="/events"
                    cta="Saiba Mais"
                />
            </BentoGrid>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                <BentoGrid>
                    <BentoCard
                        name="Corrida Super São Geraldo"
                        className=""
                        background={<div className="absolute  [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] [--duration:20s] inset-0 bg-[url('/run.png')] bg-cover bg-center " />}
                        Icon={Calendar}
                        description="Atividade esportiva que promove saúde, integração e bem-estar, incentivando hábitos de vida saudáveis e fortalecendo o vínculo com a comunidade."
                        href="/events"
                        cta="Saiba Mais"
                    />
                </BentoGrid>
                <BentoGrid>
                    <BentoCard
                        name="Corrida Super São Geraldo"
                        className=""
                        background={<div className="absolute  [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] [--duration:20s] inset-0 bg-[url('/run.png')] bg-cover bg-center " />}
                        Icon={Calendar}
                        description="Atividade esportiva que promove saúde, integração e bem-estar, incentivando hábitos de vida saudáveis e fortalecendo o vínculo com a comunidade."
                        href="/events"
                        cta="Saiba Mais"
                    />
                </BentoGrid>
                <BentoGrid>
                    <BentoCard
                        name="Corrida Super São Geraldo"
                        className=""
                        background={<div className="absolute  [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] [--duration:20s] inset-0 bg-[url('/run.png')] bg-cover bg-center " />}
                        Icon={Calendar}
                        description="Atividade esportiva que promove saúde, integração e bem-estar, incentivando hábitos de vida saudáveis e fortalecendo o vínculo com a comunidade."
                        href="/events"
                        cta="Saiba Mais"
                    />
                </BentoGrid>

                <BentoGrid>
                    <BentoCard
                        name="Corrida Super São Geraldo"
                        className=""
                        background={<div className="absolute  [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] [--duration:20s] inset-0 bg-[url('/run.png')] bg-cover bg-center " />}
                        Icon={Calendar}
                        description="Atividade esportiva que promove saúde, integração e bem-estar, incentivando hábitos de vida saudáveis e fortalecendo o vínculo com a comunidade."
                        href="/events"
                        cta="Saiba Mais"
                    />
                </BentoGrid>
                <BentoGrid>
                    <BentoCard
                        name="Corrida Super São Geraldo"
                        className=""
                        background={<div className="absolute  [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] [--duration:20s] inset-0 bg-[url('/run.png')] bg-cover bg-center " />}
                        Icon={Calendar}
                        description="Atividade esportiva que promove saúde, integração e bem-estar, incentivando hábitos de vida saudáveis e fortalecendo o vínculo com a comunidade."
                        href="/events"
                        cta="Saiba Mais"
                    />
                </BentoGrid>
                <BentoGrid>
                    <BentoCard
                        name="Corrida Super São Geraldo"
                        className=""
                        background={<div className="absolute  [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] [--duration:20s] inset-0 bg-[url('/run.png')] bg-cover bg-center " />}
                        Icon={Calendar}
                        description="Atividade esportiva que promove saúde, integração e bem-estar, incentivando hábitos de vida saudáveis e fortalecendo o vínculo com a comunidade."
                        href="/events"
                        cta="Saiba Mais"
                    />
                </BentoGrid>
            </div>
        </div>

    </>
}