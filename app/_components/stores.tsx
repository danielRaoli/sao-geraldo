import StoreLocation from "./sotore-location";

export default function Stores() {
    return <>
        <div className="w-full h-auto text-center min-h-screen px-4 md:px-42 py-20">
            <h2 className="text-xl hidden md:block md:text-[48px] text-center font-bold text-[#035C94] " >Encontre o <span className="bg-gradient-to-r from-[#035C94] to-[#172D50] bg-clip-text mb-8 text-transparent text-4xl  md:text-[58px]">Super São Geraldo</span></h2>
            <h2 className="text-xl block md:hidden md:text-[48px] text-center font-bold text-[#035C94] " >Encontre o <br /> <span className="bg-gradient-to-r from-[#035C94] to-[#172D50] bg-clip-text mb-8 text-transparent text-4xl  md:text-[58px]">Super São Geraldo</span></h2>
            <h2 className="text-xl md:text-[48px] text-center font-bold bg-gradient-to-r from-[#F08B26] to-[#EB6128] bg-clip-text mb-8 text-transparent" >mais próximo de você</h2>

            <StoreLocation />

        </div>
    </>
}