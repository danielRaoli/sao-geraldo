import Image from "next/image"
export default function AppSuper() {
    return <>
        <div className="w-full px-4 pt-8 md:px-42 md:pt-24  flex flex-col-reverse md:flex-row gap-4" >
            <div className="flex-1 relative">
                <Image className="w-full h-auto" src="/mockup.png" alt="Imagem do super são geraldo, orgulos e tradição do sertão central" height={0} width={0} sizes="100vw" />
                <div className="flex md:hidden justify-center gap-4 w-full">
                    <a href="https://play.google.com/store/apps/details?id=com.saogeraldo.saogeraldo" target="_blank" rel="noopener noreferrer">
                        <Image className="h-auto" src="/googleplay.svg" alt="Baixe o app no Google Play" height={0} width={150} />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.saogeraldo.saogeraldo" target="_blank" rel="noopener noreferrer">
                        <Image className=" h-auto" src="/appstore.svg" alt="Baixe o app no Google Play" height={0} width={150} />
                    </a>
                </div>
            </div>
            <div className="flex-1 my-auto">
                <h3 className=" hidden md:block text-[48px] font-bold  bg-gradient-to-r from-[#187EF1] to-[#084A96]  bg-clip-text text-transparent leading-[1]">Tenha o<br />
                    <span className="text-[66px] font-bold ">Super <br /> São Geraldo</span> </h3>
                <h3 className=" md:hidden text-[24px] font-bold text-center bg-gradient-to-r from-[#187EF1] to-[#084A96]  bg-clip-text text-transparent leading-[1]">Tenha o <br />
                    <span className="text-[32px] font-bold ">Super  São Geraldo</span> </h3>
                <h4 className="text-2xl md:text-[52px] text-center md:text-start md:-mt-2 bg-gradient-to-r from-[#F28E28] font-bold to-[#EB6028] leading-[1.2] bg-clip-text text-transparent">na palma da sua mão!</h4>
                <p className="text-xl md:text-2xl text-center md:text-start mb-4 text-black">Acompanhe ofertas exclusivas, encontre a loja mais perto de você e aproveite benefícios do nosso clube de descontos diretamente no app.</p>
                <div className="md:flex hidden gap-4 w-full">
                    <a href="https://play.google.com/store/apps/details?id=com.saogeraldo.saogeraldo" target="_blank" rel="noopener noreferrer">
                        <Image className="h-auto" src="/googleplay.svg" alt="Baixe o app no Google Play" height={0} width={150} />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.saogeraldo.saogeraldo" target="_blank" rel="noopener noreferrer">
                        <Image className=" h-auto" src="/appstore.svg" alt="Baixe o app no Google Play" height={0} width={150} />
                    </a>
                </div>
            </div>
        </div>
    </>
}