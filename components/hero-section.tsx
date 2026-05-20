"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        })
      }
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with subtle parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-out"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-l7HcmaZ7gpjBwXcjgR8t48MmtOyRU9.png')`,
          transform: `scale(1.05) translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border-l border-t border-white/20 hidden lg:block" />
      <div className="absolute top-20 right-10 w-32 h-32 border-r border-t border-white/20 hidden lg:block" />
      <div className="absolute bottom-20 left-10 w-32 h-32 border-l border-b border-white/20 hidden lg:block" />
      <div className="absolute bottom-20 right-10 w-32 h-32 border-r border-b border-white/20 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
        {/* Logo Image */}
        <div
          className={`flex justify-center mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <div className="relative w-24 h-24 md:w-32 md:h-32">
            <Image
              src="/images/logo.png"
              alt="Hacienda La Joya Logo"
              fill
              className="object-contain brightness-0 invert opacity-90"
            />
          </div>
        </div>

        {/* Main Title */}
        <h1
          className={`font-serif text-5xl md:text-7xl lg:text-8xl tracking-wider mb-4 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}
        >
          Hacienda La Joya
        </h1>

        {/* Subtitle */}
        <p
          className={`text-sm md:text-base tracking-[0.5em] uppercase mb-10 text-white/80 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Casa de Eventos
        </p>

        {/* Decorative line with year */}
        <div
          className={`flex justify-center items-center gap-6 mb-12 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />
          <span className="text-secondary text-sm tracking-[0.4em] font-serif">DESDE 1600</span>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />
        </div>

        {/* Tagline */}
        <p
          className={`font-serif italic text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto mb-14 leading-relaxed text-white/90 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {'"'}Una verdadera pieza histórica de León, Guanajuato{'"'}
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="#historia"
            className="group px-10 py-4 bg-transparent border-2 border-white/50 text-white text-xs tracking-[0.25em] uppercase hover:bg-white/10 hover:border-white transition-all duration-300"
          >
            <span className="flex items-center justify-center gap-3">
              Descubrir Historia
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
          <a
            href="https://wa.me/524772914712"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-primary text-primary-foreground text-xs tracking-[0.25em] uppercase hover:bg-primary/90 transition-all duration-300 shadow-lg"
          >
            Agendar Visita
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-gentle-pulse">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
