"use client"
import Image from "next/image"
import { useEffect, useState } from "react"

const links = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "Sobre",
    href: "#nossa-historia",
  },
  {
    name: "Club",
    href: "#club",
  },
  {
    name: "Trabalhe Conosco",
    href: "#forms",
  },
  {
    name: "Eventos",
    href: "#events",
  },

];

export default function Hero() {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(() => {
          const doc = document.documentElement
          const maxScroll = doc.scrollHeight - window.innerHeight
          const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0
          setRotation(progress * 360)
          ticking = false
        })
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return <>
    <main id="home" className="flex relative flex-col md:gap-[32px] row-start-2 items-center sm:items-start overflow-hidden">
      <header className="w-full z-1 flex flex-col justify-center items-center bg-[#1E3A80] md:hidden h-auto ">
        <div className="w-full flex  h-[85px] relative" >
          <Image
            className="w-[200px] object-cover mx-auto h-auto"
            src="/logo-fontbranca.webp"
            alt="São Geraldo - Supermercado, orgulho e tradição do sertão central"
            height={200}
            width={200}
            sizes="200px"
            priority
          />
        </div>
        <div className="h-2 w-full bg-orange-500" ></div>
        <nav className="w-full h-auto flex items-center justify-evenly px-2 py-3" role="navigation" aria-label="Menu principal mobile">
          <a href="#unidades" className="font-medium text-white text-sm" >UNIDADES</a>
          <a href="#app-super" className="font-medium text-white text-sm" >BAIXE O APP</a>
          <a href="#club" className="font-medium text-white text-sm" >CLUBE</a>
          <a href="#locais" className="font-medium text-white text-sm" >LOCAIS</a>
        </nav>
      </header>

      <Image
        className="w-full absolute h-auto   md:z-1"
        src="/heroanimate.webp"
        alt="Banner principal São Geraldo - Tradição e qualidade em produtos alimentícios"
        height={600}
        width={1200}
        sizes="100vw"
        priority
        style={{ transform: `rotate(${rotation}deg)`, transformOrigin: "center center", willChange: "transform" }}
      />
      <Image
        className="w-full h-auto z-0"
        src="/hero.webp"
        alt="Banner principal São Geraldo - Tradição e qualidade em produtos alimentícios"
        height={600}
        width={1200}
        sizes="100vw"
        priority
      />
      <div className="hidden md:block w-[350px] absolute z-1 bottom-25 mx-24 xl:mx-42">
        <h1 className="text-secondary left-12 text-[51px] leading-[52px] letter-spacing-[0.5px] font-bold">TRADIÇÃO <br />e ORGULHO</h1>
        <p className="text-secondary  left-12 text-[29px]  -letter-spacing-[0.5px] font-bold">Do Sertão Central</p>
        <p className="text-white mt-6 mb-8 font-medium left-12 text-[20px]  leading-[24px] -letter-spacing-[0.5px] ">Há mais de <span className="font-bold">64 anos</span> presente na vida das famílias, oferecendo <span className="font-bold">qualidade, preço justo e proximidade com você.</span> </p>
        <a href="#app-super" className="bg-[#F28E28] text-white rounded-full px-4 py-2 font-semibold">BAIXE NOSSO APP</a>
      </div>

      <header className="w-full fixed hidden md:block  h-[auto] px-42 z-1 py-8">
        <nav className="w-full h-full flex items-start py-[8px] justify-between" role="navigation" aria-label="Menu principal desktop">
          <div className="w-[179px] ">
            <Image
              src="/logo-azul.webp"
              alt="São Geraldo - Supermercado, orgulho e tradição do sertão central"
              height={179}
              width={179}
              sizes="179px"
              className="w-full h-auto"
              priority
            />
          </div>
          <div className="rounded-full py-[18px] px-[35px] flex gap-[30px] bg-white/20 backdrop-blur-md shadow-sm">
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