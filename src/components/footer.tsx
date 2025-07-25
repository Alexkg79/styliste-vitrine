export default function Footer() {
  return (
    <footer className="bg-neutral-900 py-16">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-serif text-white tracking-wider mb-8 md:mb-0">
            ATELIER<span className="text-amber-400">.</span>
          </div>

          {/* Navigation footer */}
          <nav className="mb-8 md:mb-0">
            <ul className="flex flex-wrap justify-center md:justify-end space-x-8">
              {["Mentions Légales", "Politique de Confidentialité", "CGV"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-amber-400 text-sm font-light transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-700 mt-12 pt-8 text-center">
          <p className="text-neutral-500 text-sm font-light">© 2024 Atelier Haute Couture. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
