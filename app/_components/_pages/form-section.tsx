"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select";
import { Button } from "../../../components/ui/button";
import { Briefcase, Mail, User } from "lucide-react";

export default function FormSection() {
    const [areaInteresse, setAreaInteresse] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function enviarFormulario(formType: "clientes" | "trabalhe", form: HTMLFormElement) {
        try {
            setIsLoading(true);
            const formData = new FormData(form);
            formData.append("formType", formType);
            if (formType === "trabalhe") {
                formData.append("area", areaInteresse);
            }

            const res = await fetch("/api/send", {
                method: "POST",
                body: formData,
            });
            const json = await res.json();
            if (json?.ok) {
                alert("Formulário enviado com sucesso!");
                form.reset();
                setAreaInteresse("");
            } else {
                const errMsg = typeof json?.error === "string" ? json.error : (json?.error?.message ?? "erro desconhecido");
                alert("Falha ao enviar: " + errMsg);
            }
        } catch (error) {
            console.error("[send] Error:", error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <section id="forms" className="w-full px-6 py-6 md:py-20">
            <div className="w-full text-center mb-8">
                <h4 className="text-3xl md:text-[48px] bg-gradient-to-r text-center font-bold to-[#F08B26] from-[#EB6128] bg-clip-text text-transparent">Fale Conosco</h4>
                <p className="text-lg md:text-[24px] text-black max-w-4xl mx-auto">
                    Estamos aqui para ouvir você! Entre em contato conosco ou candidate-se para fazer parte da nossa equipe. Sua opinião e sua energia são muito importantes para nós.
                </p>
            </div>

            <Tabs defaultValue="clientes" className="w-full">
                <div className="flex justify-center mb-6">
                    <TabsList className="bg-gray-100">
                        <TabsTrigger value="clientes" className="px-6">
                            <User />
                            Clientes</TabsTrigger>
                        <TabsTrigger value="trabalhe" className="px-6">
                            <Briefcase />
                            Trabalhe Conosco</TabsTrigger>
                    </TabsList>
                </div>

                <TabsContent value="clientes">
                    <div className="max-w-5xl mx-auto bg-gray-50 rounded-2xl p-8 shadow-sm">
                        <div className="mb-6">
                            <div className="flex items-center gap-2">
                                <Mail className="w-[25px] h-[25px] md:w-[35px] md:h-[35px]" />
                                <h5 className="text-xl md:text-3xl font-bold text-primary flex items-center gap-2">
                                    Atendimento ao Cliente
                                </h5>
                            </div>

                            <p className="text-slate-700 text-md md:text-lg">Dúvidas, sugestões, reclamações ou elogios? Queremos ouvir você!</p>
                        </div>

                        <form className="space-y-4" onSubmit={async (e) => {
                            e.preventDefault();
                            await enviarFormulario("clientes", e.currentTarget as HTMLFormElement);
                        }}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700">Nome Completo *</label>
                                    <input name="name" required type="text" placeholder="Seu nome completo" className="mt-1 w-full rounded-md border border-slate-300 bg-white p-3 outline-none focus:ring-2 focus:ring-orange-400" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700">E-mail *</label>
                                    <input name="email" required type="email" placeholder="seu@email.com" className="mt-1 w-full rounded-md border border-slate-300 bg-white p-3 outline-none focus:ring-2 focus:ring-orange-400" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700">Telefone</label>
                                <input required name="phone" type="tel" placeholder="(85) 99999-9999" className="mt-1 w-full rounded-md border border-slate-300 bg-white p-3 outline-none focus:ring-2 focus:ring-orange-400" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700">Mensagem *</label>
                                <textarea name="message" required placeholder="Escreva sua mensagem aqui..." rows={6} className="mt-1 w-full rounded-md border border-slate-300 bg-white p-3 resize-none outline-none focus:ring-2 focus:ring-orange-400" />
                            </div>

                            <div className="pt-2">
                             <Button disabled={isLoading} type="submit" className="w-full md:w-auto bg-[#0A4D91] hover:bg-[#0a4d91]/90 cursor-pointer">
                                    {isLoading ? "Enviando..." : "Enviar Mensagem"}
                                </Button>
                            </div>
                        </form>
                    </div>
                </TabsContent>

                <TabsContent value="trabalhe">
                    <div className="max-w-5xl mx-auto bg-gray-50 rounded-2xl p-8 shadow-sm">
                        <div className="mb-6">
                            <div className="flex items-center gap-2">
                                <Briefcase className="w-[25px] h-[25px] md:w-[35px] md:h-[35px]" />
                                <h5 className="text-xl md:text-3xl font-semibold text-primary flex items-center gap-2">
                                    Trabalhe Conosco
                                </h5>
                            </div>
                            <p className="text-slate-700 text-md  md:text-lg">Candidate-se e escolha a área de interesse.</p>
                        </div>

                        <form className="space-y-4" onSubmit={async (e) => {
                            e.preventDefault();
                            await enviarFormulario("trabalhe", e.currentTarget as HTMLFormElement);
                        }}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700">Nome Completo *</label>
                                    <input name="name" required type="text" placeholder="Seu nome completo" className="mt-1 w-full rounded-md border border-slate-300 bg-white p-3 outline-none focus:ring-2 focus:ring-orange-400" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700">E-mail *</label>
                                    <input name="email" required type="email" placeholder="seu@email.com" className="mt-1 w-full rounded-md border border-slate-300 bg-white p-3 outline-none focus:ring-2 focus:ring-orange-400" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700">Telefone</label>
                                <input required name="phone" type="tel" placeholder="(85) 99999-9999" className="mt-1 w-full rounded-md border border-slate-300 bg-white p-3 outline-none focus:ring-2 focus:ring-orange-400" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700">Área de Interesse *</label>
                                <Select  onValueChange={(value) => setAreaInteresse(value)}>
                                    <SelectTrigger className="mt-1 w-full">
                                        <SelectValue placeholder="Selecione a área" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="atendimento">Atendimento</SelectItem>
                                        <SelectItem value="vendas">Vendas</SelectItem>
                                        <SelectItem value="marketing">Marketing</SelectItem>
                                        <SelectItem value="logistica">Logística</SelectItem>
                                        <SelectItem value="ti">TI</SelectItem>
                                        <SelectItem value="administrativo">Administrativo</SelectItem>
                                        <SelectItem value="financeiro">Financeiro</SelectItem>
                                    </SelectContent>
                                </Select>
                                <input type="hidden" name="area" value={areaInteresse} />
                            </div>

                            <div className="pt-2">
                                <Button disabled={isLoading} type="submit" className="w-full md:w-auto bg-[#0A4D91] hover:bg-[#0a4d91]/90 cursor-pointer">
                                    {isLoading ? "Enviando..." : "Enviar Candidatura"}
                                </Button>
                            </div>
                        </form>
                    </div>
                </TabsContent>
            </Tabs>
        </section>
    );
}