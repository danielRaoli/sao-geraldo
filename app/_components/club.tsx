import Image from "next/image"
export default function ClubSection(){
    return <>
        <div className="w-full pb-24 px-4 md:px-42">
            <div className="bg-gray-100 flex flex-col md:flex-row gap-8 rounded-4xl px-4 md:px-15 py-10">
                <div className="w-full my-auto text-center flex-1 justify-start ">
                       <h4 className="text-3xl md:text-[48px] font-bold bg-gradient-to-r from-[#F08B26]  to-[#EB6128] bg-clip-text text-transparent">Clube de Ofertas</h4>
                       <h4 className="font-bold text-3xl md:text-[48px] md:-mt-4">para <span className="text-4xl md:text-[62px]  bg-gradient-to-r from-[#01609B]  to-[#1A2545] bg-clip-text text-transparent font-extrabold">Você!</span></h4>
                        <Image src="/tradicao.png" alt="club" width={0} height={0} sizes="100vw" className="w-full h-auto" />
                </div>
                <div className="flex-1 space-y-2">
                    <h5 className="text-primary text-xl text-center md:text-[36px] font-bold">Economize mais com o Clube de Ofertas Super São Geraldo!</h5>
                    <div className="flex flex-col items-center md:flex-row gap-2  w-full">
                        <div className="bg-white w-[80%] md:min-w-[200px] p-4">
                            <Image src="/qrcode.png" alt="check" width={0} height={0} sizes="100vw" className="w-full h-auto" />
                        </div>
                        <p className="text-black text-center text-sm md:text-md md:text-left">Cadastre-se grátis, escaneie o QR Code e tenha acesso a descontos exclusivos, promoções especiais e vantagens pensadas para você e sua família.</p>
                    </div>
                    <p className="text-secondary md:text-lg text-md  text-center md:text-left font-bold">Seu bolso agradece. Aproveite as ofertas antes de todo mundo!</p>
                </div>
            </div>
        </div>
    </>
}