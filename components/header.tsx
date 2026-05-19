"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#galeria", label: "Galería" },
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
          ? "bg-background/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="#inicio" className="flex items-center gap-3">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/408286313_860976749054289_6104217929239417335_n-lgQZRVZnsdr0tt9tjQkJNZodzm2y14.jpg"
            alt="La Haciendita Logo"
            width={60}
            height={60}
            className={`transition-all duration-300 ${isScrolled ? "w-12 h-12" : "w-14 h-14"}`}
          />
          <div className={`transition-colors duration-300 ${isScrolled ? "text-foreground" : "text-white"}`}>
            <h1 className="font-serif text-xl font-semibold tracking-wide">La Haciendita</h1>
            <p className="text-xs tracking-[0.2em] uppercase opacity-80">Salón de Eventos</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:opacity-70 ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://wa.me/524776479502"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-6 py-2.5 text-sm tracking-[0.1em] uppercase hover:bg-primary/90 transition-all duration-300"
          >
            Reservar
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md shadow-lg transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-foreground text-sm tracking-[0.15em] uppercase py-2 border-b border-border/50"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://wa.me/524776479502"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-6 py-3 text-sm tracking-[0.1em] uppercase text-center mt-2"
          >
            Reservar
          </Link>
        </nav>
      </div>
    </header>
  )
}
