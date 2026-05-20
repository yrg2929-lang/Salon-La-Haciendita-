"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#historia", label: "Historia" },
  { href: "#espacios", label: "Espacios" },
  { href: "#contacto", label: "Contacto" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="#inicio" className="flex items-center gap-3 group">
          {/* Geometric Logo inspired by the hacienda's logo */}
          <div className="relative">
            <svg 
              className={`w-12 h-12 transition-all duration-300 ${
                isScrolled ? "text-primary" : "text-white"
              }`}
              viewBox="0 0 60 60" 
              fill="none"
            >
              <rect x="15" y="15" width="30" height="30" stroke="currentColor" strokeWidth="1.5" transform="rotate(45 30 30)" />
              <rect x="20" y="20" width="20" height="20" stroke="currentColor" strokeWidth="1" transform="rotate(45 30 30)" />
              <circle cx="30" cy="30" r="4" fill="currentColor" />
              <line x1="30" y1="5" x2="30" y2="15" stroke="currentColor" strokeWidth="1" />
              <line x1="30" y1="45" x2="30" y2="55" stroke="currentColor" strokeWidth="1" />
              <line x1="5" y1="30" x2="15" y2="30" stroke="currentColor" strokeWidth="1" />
              <line x1="45" y1="30" x2="55" y2="30" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
          <div className={`transition-colors duration-300 ${isScrolled ? "text-foreground" : "text-white"}`}>
            <h1 className="font-serif text-lg md:text-xl tracking-wide">Hacienda La Joya</h1>
            <p className="text-[10px] tracking-[0.25em] uppercase opacity-70">Casa de Eventos</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:opacity-60 ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://wa.me/524772914712"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-2.5 text-xs tracking-[0.15em] uppercase transition-all duration-300 border ${
              isScrolled
                ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                : "border-white/60 text-white hover:bg-white/10"
            }`}
          >
            Reservar
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md shadow-lg transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-foreground text-sm tracking-[0.2em] uppercase py-2 border-b border-border/30"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://wa.me/524772914712"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-6 py-3 text-xs tracking-[0.15em] uppercase text-center mt-2"
          >
            Reservar Ahora
          </Link>
        </nav>
      </div>
    </header>
  )
}
