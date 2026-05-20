"use client"

import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-l7HcmaZ7gpjBwXcjgR8t48MmtOyRU9.png')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
        {/* Decorative Logo */}
        <div
          className={`flex justify-center mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <svg 
            className="w-20 h-20 text-white/90"
            viewBox="0 0 60 60" 
            fill="none"
          >
            <rect x="15" y="15" width="30" height="30" stroke="currentColor" strokeWidth="1" transform="rotate(45 30 30)" />
            <rect x="20" y="20" width="20" height="20" stroke="currentColor" strokeWidth="0.75" transform="rotate(45 30 30)" />
            <circle cx="30" cy="30" r="3" fill="currentColor" />
            <line x1="30" y1="5" x2="30" y2="12" stroke="currentColor" strokeWidth="0.75" />
            <line x1="30" y1="48" x2="30" y2="55" stroke="currentColor" strokeWidth="0.75" />
            <line x1="5" y1="30" x2="12" y2="30" stroke="currentColor" strokeWidth="0.75" />
            <line x1="48" y1="30" x2="55" y2="30" stroke="currentColor" strokeWidth="0.75" />
          </svg>
        </div>

        {/* Main Title */}
        <h1
          className={`font-serif text-5xl md:text-7xl lg:text-8xl tracking-wider mb-4 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ textShadow: "0 4px 30px rgba(0,0,0,0.4)" }}
        >
          Hacienda La Joya
        </h1>

        {/* Subtitle */}
        <p
          className={`text-sm md:text-base tracking-[0.5em] uppercase mb-8 text-white/80 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Casa de Eventos
        </p>

        {/* Decorative line with year */}
        <div
          className={`flex justify-center items-center gap-6 mb-10 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-20 h-px bg-gradient-to-r from-transparent to-secondary/80" />
          <span className="text-secondary text-xs tracking-[0.4em] font-light">DESDE 1600</span>
          <div className="w-20 h-px bg-gradient-to-l from-transparent to-secondary/80" />
        </div>

        {/* Tagline */}
        <p
          className={`font-serif italic text-2xl md:text-3xl lg:text-4xl max-w-3xl mx-auto mb-12 leading-relaxed text-white/95 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Una verdadera pieza histórica de León, Guanajuato
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-5 justify-center transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="#historia"
            className="group px-10 py-4 bg-transparent border border-white/40 text-white text-xs tracking-[0.25em] uppercase hover:bg-white/10 hover:border-white/60 transition-all duration-300"
          >
            <span className="flex items-center justify-center gap-3">
              Conocer Más
              <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </span>
          </a>
          <a
            href="https://wa.me/524772914712"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs tracking-[0.25em] uppercase hover:bg-primary transition-all duration-300"
          >
            Agendar Visita
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="text-white/40 text-[10px] tracking-[0.4em] uppercase">Explorar</span>
        <div className="w-px h-14 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
