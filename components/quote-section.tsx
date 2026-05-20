"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function QuoteSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-40 overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-f2r88KDaNYU75Z0pzkoi75lCn065N5.png')`,
        }}
      >
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 border border-white rotate-45" />
        <div className="absolute bottom-10 right-10 w-40 h-40 border border-white rotate-45" />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-white rotate-45" />
        <div className="absolute top-1/2 right-1/4 w-20 h-20 border border-white rotate-45" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          {/* Quote Mark */}
          <div className="mb-8">
            <svg className="w-16 h-16 mx-auto text-secondary/60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
          </div>

          {/* Quote */}
          <blockquote className={`font-serif italic text-2xl md:text-4xl lg:text-5xl text-white leading-relaxed mb-10 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            El esplendor del lugar se mantuvo intacto a través de los siglos, 
            llevando hasta ustedes una atmósfera inigualable
          </blockquote>

          {/* Decorative Divider */}
          <div className={`flex justify-center items-center gap-6 mb-10 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
            <div className="w-16 h-px bg-secondary/60" />
            <Image
              src="/images/logo.png"
              alt="Hacienda La Joya"
              width={50}
              height={50}
              className="brightness-0 invert opacity-60"
            />
            <div className="w-16 h-px bg-secondary/60" />
          </div>

          {/* Attribution */}
          <p className={`text-secondary text-sm tracking-[0.4em] uppercase transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            Hacienda La Joya - Desde 1600
          </p>
        </div>
      </div>
    </section>
  )
}
