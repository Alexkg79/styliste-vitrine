import Link from "next/link"

export default function ContactSection() {
  return (
    <section className="py-32 bg-black relative overflow-hidden" id="contact-section">
      {/* Texture de fond */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-8 text-center relative z-10">
        {/* Message principal */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">
            Créons Ensemble
            <span className="block text-amber-400 italic">Votre Vision</span>
          </h2>
          <p className="text-xl text-neutral-300 font-light leading-relaxed">
            Chaque création commence par une conversation. Partageons vos aspirations et donnons vie à vos rêves les
            plus audacieux.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
          <button className="group relative overflow-hidden bg-amber-400 text-black px-12 py-4 hover:bg-amber-500 transition-all duration-300 hover:scale-105">
            <span className="relative z-10 text-sm font-medium tracking-[0.2em] uppercase">
               <Link href="/contact">Demande de Collaboration</Link>
            </span>
          </button>

          <button className="group text-white hover:text-amber-400 transition-colors duration-300">
            <span className="text-sm font-light tracking-[0.15em] uppercase border-b border-white/30 group-hover:border-amber-400 pb-1">
               <Link href="/about">Découvrir l'Atelier</Link>
            </span>
          </button>
        </div>

        {/* Informations de contact */}
        <div className="mt-20 pt-16 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-amber-400 text-sm tracking-wider uppercase mb-3">Atelier</h4>
              <p className="text-neutral-300 font-light">
                15 Rue de la Paix
                <br />
                75001 Paris, France
              </p>
            </div>
            <div>
              <h4 className="text-amber-400 text-sm tracking-wider uppercase mb-3">Contact</h4>
              <p className="text-neutral-300 font-light">
                hello@atelier-couture.fr
                <br />
                +33 1 42 86 87 88
              </p>
            </div>
            <div>
              <h4 className="text-amber-400 text-sm tracking-wider uppercase mb-3">Suivez-nous</h4>
              <div className="flex justify-center space-x-6">
                <Link href="https://www.instagram.com/" className="text-neutral-300 hover:text-amber-400 transition-colors duration-300">
                  Instagram
                </Link>
                <Link href="https://www.pinterest.com/" className="text-neutral-300 hover:text-amber-400 transition-colors duration-300">
                  Pinterest
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
