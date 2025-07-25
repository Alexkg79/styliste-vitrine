"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current && textRef.current) {
        const scrolled = window.pageYOffset
        const parallax = scrolled * 0.5
        const textParallax = scrolled * 0.3

        heroRef.current.style.transform = `translateY(${parallax}px)`
        textRef.current.style.transform = `translateY(${-textParallax}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Image avec effet parallaxe */}
      <div ref={heroRef} className="absolute inset-0 scale-110">
        <Image
          src="/hero-fashion-portrait2.webp"
          alt="Création haute couture signature"
          fill
          className="object-cover object-center"
          priority
          quality={95}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* Contenu textuel */}
      <div ref={textRef} className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-8 max-w-6xl">
          {/* Titre principal avec animation */}
          <div className="mb-12">
            <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-serif text-white leading-[0.8] tracking-tighter">
              <span className="block opacity-90">HAUTE</span>
              <span className="block text-amber-400 italic -mt-4 md:-mt-8">Couture</span>
            </h1>

            {/* Ligne décorative */}
            <div className="flex items-center justify-center mt-8 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-32"></div>
              <div className="mx-6 w-2 h-2 bg-amber-400 rotate-45"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-32"></div>
            </div>
          </div>

          {/* CTA non conventionnel */}
          <div className="relative">
            <button className="group relative overflow-hidden bg-transparent border-2 border-white/30 text-white px-12 py-4 hover:border-amber-400 transition-all duration-700">
              <span className="relative z-10 text-sm font-light tracking-[0.3em] uppercase">Explorer l&apos;Univers</span>

              {/* Effet de remplissage */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/20 to-amber-400/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Indicateur de scroll artistique */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60">
        <div className="flex flex-col items-center animate-bounce">
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-white/50 mb-2"></div>
          <div className="w-1 h-1 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
