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

  const services = [
    {
      title: "Bodas",
      description: "El día más especial de tu vida merece un lugar mágico"
    },
    {
      title: "XV Años",
      description: "Celebra tu presentación en sociedad con elegancia"
    },
    {
      title: "Eventos Especiales",
      description: "Bautizos, graduaciones y más celebraciones"
    }
  ]

  return (
    <section
      id="nosotros"
      ref={sectionRef}
      className="py-24 md:py-32 bg-secondary"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            {/* Section Title */}
            <div className="mb-8">
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">Bienvenidos a</p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
                La Haciendita
              </h2>
              <div className="w-20 h-0.5 bg-primary" />
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Un espacio único en León, Guanajuato, donde la elegancia rústica se 
              encuentra con la sofisticación moderna. Nuestro salón de eventos ofrece 
              un ambiente cálido y acogedor con techos de madera, candelabros de cristal 
              y jardines que harán de tu celebración un momento inolvidable.
            </p>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="font-serif text-2xl text-foreground">Nuestros Servicios</h3>
              <div className="grid gap-4">
                {services.map((service, index) => (
                  <div 
                    key={service.title}
                    className={`flex items-start gap-4 p-4 bg-card rounded-lg shadow-sm transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${300 + index * 150}ms` }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                    <div>
                      <h4 className="font-serif text-lg text-foreground mb-1">{service.title}</h4>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/524776479502"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 bg-primary text-primary-foreground px-8 py-4 text-sm tracking-[0.15em] uppercase hover:bg-primary/90 transition-all duration-300"
            >
              Agenda tu visita
            </a>
          </div>

          {/* Image */}
          <div 
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/480694754_1137355528083075_1361804754949943893_n-DeUIEEC0sQuEfr6TS4uJLsva3B5hU2.jpg"
                alt="Decoración elegante para XV años en La Haciendita"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/30 rounded-lg -z-10" />
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl">
              <p className="font-serif text-3xl font-semibold">León</p>
              <p className="text-sm tracking-wider">Guanajuato</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
