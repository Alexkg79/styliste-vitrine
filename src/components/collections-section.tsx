"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import collections from "@/data/collections";

interface CollectionsSectionProps {
  showCTA?: boolean;
  showAllCollections?: boolean;
}

export default function CollectionsSection({ showCTA = false, showAllCollections = false }: CollectionsSectionProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const collectionsToDisplay = showAllCollections ? collections : collections.slice(0, 4);

  return (
    <section className="py-32 bg-black relative" id="collections-section">
      <div className="container mx-auto px-8">
        {/* Titre de section */}
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-8xl font-serif text-white mb-6">Collections</h2>
          <div className="w-24 h-px bg-amber-400 mx-auto"></div>
        </div>

        {/* Grille asymétrique */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> 
          {collectionsToDisplay.map((collection, index) => (
            <div
              key={collection.id}
              className={`group cursor-pointer
                ${
                  // Sur les grands écrans (lg), applique le décalage pour la 2ème carte (index 1)
                  index % 4 === 1 ? "lg:translate-y-16" : ""
                }
                ${
                  // Sur les très grands écrans (xl), applique le décalage pour la 4ème carte (index 3)
                  index % 4 === 3 ? "xl:translate-y-32" : ""
                }
                ${
                  showAllCollections && index % 4 === 1 ? "lg:translate-y-16" : ""
                }
                ${
                  showAllCollections && index % 4 === 3 ? "xl:translate-y-32" : ""
                }
              `}
              onMouseEnter={() => setHoveredId(collection.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Carte de collection */}
              <div className="relative overflow-hidden bg-neutral-900 aspect-[3/4]">
                <Image
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.title}
                  fill
                  className={`object-cover transition-all duration-700 ${
                    hoveredId === collection.id ? "scale-110" : "scale-100"
                  }`}
                />

                {/* Overlay avec contenu */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500 ${
                    hoveredId === collection.id ? "opacity-100" : "opacity-60"
                  }`}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div
                      className={`transform transition-all duration-500 ${
                        hoveredId === collection.id ? "translate-y-0 opacity-100" : "translate-y-4 opacity-80"
                      }`}
                    >
                      <h3 className="text-2xl font-serif text-white mb-2">{collection.title}</h3>
                      <p className="text-amber-400 text-sm font-light tracking-wider uppercase mb-3">
                        {collection.subtitle}
                      </p>
                      <p
                        className={`text-neutral-300 text-sm leading-relaxed transition-all duration-500 ${
                          hoveredId === collection.id ? "opacity-100 max-h-20" : "opacity-0 max-h-0"
                        }`}
                      >
                        {collection.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Numéro décoratif */}
                <div className="absolute top-4 right-4 text-6xl font-serif text-white/10">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Collections : Conditionnel si showCTA est true */}
        {showCTA && (
          <div className="text-center mt-20">
            <Link href="/collections" passHref>
              <button className="group relative text-white border-b border-white/30 hover:border-amber-400 pb-2 transition-all duration-300">
                <span className="text-lg font-light tracking-[0.2em] uppercase">Voir Toutes les Collections</span>
                <div className="absolute bottom-0 left-0 w-0 h-px bg-amber-400 group-hover:w-full transition-all duration-500"></div>
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}