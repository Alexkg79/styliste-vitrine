"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
        <div className="flex items-center justify-between px-8 py-6">
          {/* Logo */}
          <div className="text-2xl font-serif text-white tracking-wider">
            ATELIER<span className="text-amber-400">.</span>
          </div>

          {/* Menu Burger */}
          <button
            onClick={toggleMenu}
            className="group p-2 text-white hover:text-amber-400 transition-colors duration-300"
            aria-label="Menu"
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`absolute inset-0 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                }`}
              />
              <X
                className={`absolute inset-0 transition-all duration-300 ${
                  isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Menu Plein Écran */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-all duration-700 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex items-center justify-center h-full">
          <nav className="text-center">
            <ul className="space-y-8">
              {["Accueil", "Portfolio", "Collections", "À Propos", "Contact"].map((item, index) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className={`block text-6xl md:text-8xl font-serif text-white hover:text-amber-400 transition-all duration-500 transform hover:scale-105 ${
                      isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                    onClick={toggleMenu}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}
