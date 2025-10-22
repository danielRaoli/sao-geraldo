import Image from "next/image"

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Sobre",
    href: "/sobre",
  },
  {
    name: "Contato",
    href: "/contato",
  },
  {
    name: "Trabalhe Conosco",
    href: "/contato",
  },
  {
    name: "Eventos",
    href: "/contato",
  },

];

export default function Hero() {
  return <>

    <main className="flex flex-col md:gap-[32px] row-start-2 items-center sm:items-start ">
      <header className="w-full flex flex-col justify-center items-center bg-[#1E3A80] md:hidden h-auto ">
        <div className="w-full flex  h-[85px] relative" >
          <Image className="w-[200px] object-cover mx-auto   h-auto" src="/logo-fontbranca.png" alt="Logo do super são geraldo, orgulos e tradição do sertão central" height={0} width={0} sizes="100vw" />
        </div>
        <div className="h-2 w-full bg-orange-500" ></div>
        <nav className="w-full h-auto flex items-center justify-evenly px-2 py-3">
            <a href="" className="font-medium text-white text-sm" >UNIDADES</a>
            <a href="" className="font-medium text-white text-sm" >BAIXE O APP</a>
            <a href="" className="font-medium text-white text-sm" >CONTATO</a>
            <a href="" className="font-medium text-white text-sm" >LOCAIS</a>
            
        </nav>
      </header>

      <Image className="w-full h-auto  z-0" src="/banner2.png" alt="Logo do super são geraldo, orgulos e tradição do sertão central" height={0} width={0} sizes="100vw" />
      <header className="w-full hidden md:block absolute h-[auto] px-42 z-1 py-8">
        <nav className="w-full h-full flex items-start  py-[8px] justify-between">
          <div className="w-[179px] -mt-[60px]">
            <Image src="/logo.png" alt="Logo do super são geraldo, orgulos e tradição do sertão central" height={0} width={0} sizes="100vw" className="w-full h-auto" />
          </div>
          <div className="rounded-full py-[18px] px-[35px] flex gap-[30px] bg-white/20 backdrop-blur-md  shadow-sm">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="text-[20px] font-medium text-primary transition-all duration-200 hover:text-primary-hover hover:font-bold">{link.name}</a>
            ))}
          </div>
          <a href="/#unidades" className="bg-primary text-white rounded-full py-[14px] px-[28px] text-[18px] font-medium hover:bg-primary-hover transition-all duration-300 transform hover:scale-105 ">veja as unidades</a>
        </nav>
      </header>
    </main>
  </>
}