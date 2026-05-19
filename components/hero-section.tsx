"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)
    
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/480799721_1137898411362120_7362807075291468413_n-dD4QSeJxcJxxXuMAK65BXslSl1cbqD.jpg"
          alt="La Haciendita - Salón de Eventos"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Decorative element */}
        <div 
          className={`mb-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <svg className="w-16 h-16 mx-auto text-primary opacity-80" viewBox="0 0 100 100" fill="currentColor">
            <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1"/>
            <path d="M50 15 L55 35 L75 35 L60 48 L65 68 L50 55 L35 68 L40 48 L25 35 L45 35 Z" opacity="0.6"/>
          </svg>
        </div>

        {/* Main Title */}
        <h1 
          className={`font-serif text-5xl md:text-7xl lg:text-8xl font-semibold tracking-wide mb-4 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Tienes que
        </h1>
        
        {/* Script Text */}
        <p 
          className={`font-serif italic text-6xl md:text-8xl lg:text-9xl text-primary mb-8 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Vivirlo
        </p>

        {/* Subtitle */}
        <p 
          className={`text-lg md:text-xl tracking-[0.3em] uppercase text-white/80 mb-10 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Tu evento soñado hecho realidad
        </p>

        {/* CTA Button */}
        <a
          href="#nosotros"
          className={`inline-flex items-center gap-2 border-2 border-white/50 px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-foreground transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0 delay-800" : "opacity-0 translate-y-8"
          }`}
        >
          Descubre más
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
