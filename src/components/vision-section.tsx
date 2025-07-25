import Image from "next/image"


export default function VisionSection() {
  return (
    <section className="py-32 bg-neutral-50 relative overflow-hidden">
      {/* Élément décoratif */}
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Citation principale */}
          <div className="relative">
            <div className="text-8xl md:text-9xl font-serif text-black/10 absolute -top-8 -left-4">&quot;</div>
            <blockquote className="text-2xl md:text-3xl font-light text-neutral-800 leading-relaxed italic pl-8">
              La mode n&apos;est pas seulement ce que l&apos;on porte, c&apos;est l&apos;expression de notre âme, la poésie de notre époque
              traduite en formes et en matières.
            </blockquote>
            <div className="mt-8 pl-8">
              <div className="w-16 h-px bg-amber-400 mb-4"></div>
              <cite className="text-sm font-medium text-neutral-600 tracking-wider uppercase not-italic">
                Philosophie Atelier
              </cite>
            </div>
          </div>

          {/* Image d'accompagnement */}
          <div className="relative">
            <div className="aspect-[4/5] bg-black/5 relative overflow-hidden">
              <div className="absolute inset-4 bg-white shadow-2xl overflow-hidden">
                <Image
                  src="/img_philo.webp"
                  alt="Vision de l'atelier haute couture"
                  fill
                  className="object-cover"
                  quality={90}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
