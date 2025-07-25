import Image from "next/image"
import Link from "next/link"

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function AboutSection() {
  return (
    <>
      <Header />
        <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="container mx-auto px-8">
            {/* Titre principal de la section */}
            <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-serif text-white mb-6">L&apos;Atelier.</h2>
            <div className="w-24 h-px bg-amber-400 mx-auto"></div>
            <p className="mt-8 text-neutral-300 text-lg font-light max-w-3xl mx-auto">
                Plus qu&apos;une maison de couture, un lieu où l&apos;art de la mode prend vie.
                Découvrez l&apos;âme créative derrière chaque pièce.
            </p>
            </div>

            {/* Première section: Histoire ou Philosophie */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            {/* Texte de l'histoire */}
            <div>
                <h3 className="text-4xl font-serif text-white mb-6">Notre Histoire</h3>
                <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                Fondé en 2020, l&apos;Atelier. est né de la vision de créer une mode qui transcende le temps et les tendances.
                Notre passion pour l&apos;artisanat et l&apos;innovation nous pousse à explorer de nouvelles frontières,
                créer des pièces intemporelles qui défient les tendances éphémères.
                Chaque création est une ode à l&apos;artisanat français, combinant techniques traditionnelles
                et innovations audacieuses.
                </p>
                <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                Nous croyons en une mode qui célèbre l&apos;individualité et l&apos;élégance, où chaque
                détail compte. Notre parcours est jalonné de collaborations prestigieuses et de moments
                marquants sur les podiums internationaux.
                </p>
                <Link href="/collections" passHref>
                <button className="group relative text-white border-b border-white/30 hover:border-amber-400 pb-2 transition-all duration-300 mt-6">
                    <span className="text-lg font-light tracking-[0.2em] uppercase">Découvrir nos Collections</span>
                    <div className="absolute bottom-0 left-0 w-0 h-px bg-amber-400 group-hover:w-full transition-all duration-500"></div>
                </button>
                </Link>
            </div>

            {/* Image illustrant l'histoire ou l'atelier */}
            <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                src="/atelier_ht.webp"
                alt="L'atelier de couture, histoire"
                fill
                className="object-cover object-center"
                quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            </div>

            {/* Section: Philosophie ou Vision */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            {/* Image d'accompagnement */}
            <div className="relative aspect-[4/5] overflow-hidden lg:order-1">
                <Image
                src="/atelier_vision_ht.webp"
                alt="Vision de l'atelier haute couture"
                fill
                className="object-cover object-center"
                quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            {/* Citation principale */}
            <div className="relative lg:order-2">
                <div className="text-8xl md:text-9xl font-serif text-white/10 absolute -top-8 -left-4">"</div>
                <blockquote className="text-2xl md:text-3xl font-light text-neutral-300 leading-relaxed italic pl-8">
                La mode n&apos;est pas seulement ce que l&apos;on porte, c&apos;est l&apos;expression de notre âme, la poésie de notre époque
                traduite en formes et en matières.
                </blockquote>
                <div className="mt-8 pl-8">
                <div className="w-16 h-px bg-amber-400 mb-4"></div>
                <cite className="text-sm font-medium text-neutral-400 tracking-wider uppercase not-italic">
                    Philosophie Atelier
                </cite>
                </div>
            </div>
            </div>

            {/* Section: Valeurs ou Expertise */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mt-20">
            <div>
                <h4 className="text-amber-400 text-2xl font-serif mb-4">Savoir-Faire</h4>
                <p className="text-neutral-400 text-md leading-relaxed">
                Maîtrise des techniques ancestrales et innovation constante pour des pièces d'exception.
                </p>
            </div>
            <div>
                <h4 className="text-amber-400 text-2xl font-serif mb-4">Intemporalité</h4>
                <p className="text-neutral-400 text-md leading-relaxed">
                Des créations conçues pour traverser les saisons et les générations.
                </p>
            </div>
            <div>
                <h4 className="text-amber-400 text-2xl font-serif mb-4">Éthique</h4>
                <p className="text-neutral-400 text-md leading-relaxed">
                Un engagement pour une mode durable et respectueuse de l&apos;humain et de l&apos;environnement.
                </p>
            </div>
            </div>

            {/* CTA final */}
            <div className="text-center mt-32">
            <h3 className="text-4xl font-serif text-white mb-8">Une Question ?</h3>
            <Link href="/contact" passHref>
                <button className="group relative overflow-hidden bg-amber-400 text-black px-12 py-4 hover:bg-amber-500 transition-all duration-300 hover:scale-105">
                <span className="relative z-10 text-sm font-medium tracking-[0.2em] uppercase">
                    Contactez-nous
                </span>
                </button>
            </Link>
            </div>

        </div>
        </section>
      <Footer />
    </>
  )
}