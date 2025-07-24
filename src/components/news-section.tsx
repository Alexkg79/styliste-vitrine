const news = [
  {
    date: "2024",
    title: "Paris Fashion Week",
    description: "Présentation de la collection Éternité Noire",
    type: "Défilé",
  },
  {
    date: "2024",
    title: "Vogue Italia",
    description: "Portrait exclusif et interview créative",
    type: "Presse",
  },
  {
    date: "2023",
    title: "Collaboration Hermès",
    description: "Création d'une capsule exclusive",
    type: "Partenariat",
  },
]

export default function NewsSection() {
  return (
    <section className="py-32 bg-neutral-100 relative">
      <div className="container mx-auto px-8">
        {/* Titre */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-serif text-black mb-4">Actualités</h2>
          <p className="text-neutral-600 text-lg font-light">Les derniers moments forts de l'atelier</p>
        </div>

        {/* Timeline */}
        <div className="space-y-16">
          {news.map((item, index) => (
            <div key={index} className="group">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
                {/* Date */}
                <div className="lg:text-right">
                  <div className="text-6xl font-serif text-amber-400 mb-2">{item.date}</div>
                  <div className="text-sm text-neutral-500 tracking-wider uppercase">{item.type}</div>
                </div>

                {/* Ligne décorative */}
                <div className="hidden lg:flex items-center justify-center">
                  <div className="w-full h-px bg-neutral-300 group-hover:bg-amber-400 transition-colors duration-500"></div>
                  <div className="w-3 h-3 bg-amber-400 rounded-full mx-4 group-hover:scale-125 transition-transform duration-300"></div>
                  <div className="w-full h-px bg-neutral-300 group-hover:bg-amber-400 transition-colors duration-500"></div>
                </div>

                {/* Contenu */}
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-serif text-black mb-3 group-hover:text-amber-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
