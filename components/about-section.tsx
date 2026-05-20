"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      title: "Arquitectura Colonial",
      description: "Arcos de cantera, muros de piedra y techos de teja que transportan a otra época"
    },
    {
      title: "Jardines Históricos",
      description: "Amplios jardines con vegetación centenaria, fuentes y senderos iluminados"
    },
    {
      title: "Espacios Versátiles",
      description: "Salones, terrazas y áreas al aire libre para eventos de cualquier tamaño"
    }
  ]

  return (
    <section
      id="historia"
      ref={sectionRef}
      className="py-24 md:py-32 bg-background"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4">Nuestra Historia</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Más de 400 Años de Historia
          </h2>
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="w-12 h-px bg-primary/40" />
            <div className="w-2 h-2 bg-primary rotate-45" />
            <div className="w-12 h-px bg-primary/40" />
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Hacienda La Joya es una verdadera pieza histórica de León, Guanajuato del año de 1600. 
            A través de los años, el esplendor del lugar se mantuvo intacto, llevando hasta ustedes 
            una atmósfera inigualable para el día de su evento.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image */}
          <div 
            className={`relative transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hAwBjUubTOimMDChP2YT50NZWD3n0f.png"
                alt="Arcos coloniales de Hacienda La Joya con buganvilias"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative corner elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-l-2 border-t-2 border-primary/40" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-r-2 border-b-2 border-primary/40" />
          </div>

          {/* Content */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}>
            <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              El Escenario Perfecto Para Sus Sueños
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Ubicada en un entorno privilegiado de León, nuestra hacienda combina la majestuosidad 
              de la arquitectura colonial mexicana con todas las comodidades modernas. Cada rincón 
              cuenta una historia, cada espacio fue diseñado para crear momentos inolvidables.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Desde íntimas reuniones hasta grandes celebraciones, Hacienda La Joya ofrece 
              el marco ideal para bodas, XV años, eventos corporativos y sociales que 
              perdurarán en la memoria de todos sus invitados.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className={`flex items-start gap-5 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${600 + index * 150}ms` }}
                >
                  <div className="w-10 h-10 flex items-center justify-center border border-primary/30 shrink-0">
                    <div className="w-2 h-2 bg-primary rotate-45" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-border transition-all duration-1000 delay-600 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          {[
            { number: "1600", label: "Año de Fundación" },
            { number: "400+", label: "Años de Historia" },
            { number: "5", label: "Espacios Únicos" },
            { number: "1000+", label: "Eventos Realizados" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-4xl md:text-5xl text-primary mb-2">{stat.number}</p>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
