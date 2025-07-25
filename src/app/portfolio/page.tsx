"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import portfolioItems from "@/data/portfolio";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function PortfolioSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <>
      <Header />
        <section className="py-32 bg-black relative" id="portfolio-section">
          <div className="container mx-auto px-8">
            {/* Titre de section */}
            <div className="text-center mb-20">
              <h2 className="text-6xl md:text-8xl font-serif text-white mb-6">Portfolio</h2>
              <div className="w-24 h-px bg-amber-400 mx-auto"></div>
            </div>

            {/* Grille asymétrique */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {portfolioItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`group cursor-pointer ${
                    index === 1 ? "md:translate-y-5" : ""
                  } ${index === 3 ? "lg:translate-y-32" : ""}`}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Carte de projet */}
                  <div className="relative overflow-hidden bg-neutral-900 aspect-[3/4]">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className={`object-cover transition-all duration-700 ${
                        hoveredId === item.id ? "scale-110" : "scale-100"
                      }`}
                    />

                    {/* Overlay avec contenu */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500 ${
                        hoveredId === item.id ? "opacity-100" : "opacity-60"
                      }`}
                    >
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div
                          className={`transform transition-all duration-500 ${
                            hoveredId === item.id ? "translate-y-0 opacity-100" : "translate-y-4 opacity-80"
                          }`}
                        >
                          <h3 className="text-2xl font-serif text-white mb-2">{item.title}</h3>
                          <p className="text-amber-400 text-sm font-light tracking-wider uppercase mb-3">
                            {item.subtitle}
                          </p>
                          <p
                            className={`text-neutral-300 text-sm leading-relaxed transition-all duration-500 ${
                              hoveredId === item.id ? "opacity-100 max-h-20" : "opacity-0 max-h-0"
                            }`}
                          >
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Numéro décoratif ou année */}
                    <div className="absolute top-4 right-4 text-6xl font-serif text-white/10">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA (si besoin de voir plus de projets) */}
            <div className="text-center mt-20">
              <Link href="/contact" passHref> {/* Tu peux changer ce lien si tu as une page portfolio complète */}
                <button className="group relative text-white border-b border-white/30 hover:border-amber-400 pb-2 transition-all duration-300">
                  <span className="text-lg font-light tracking-[0.2em] uppercase">Demander une Consultation</span>
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-amber-400 group-hover:w-full transition-all duration-500"></div>
                </button>
              </Link>
            </div>
          </div>
        </section>
      <Footer />
    </>
  )
}