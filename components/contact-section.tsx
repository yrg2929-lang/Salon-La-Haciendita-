"use client"

import { useEffect, useRef, useState } from "react"

export function ContactSection() {
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

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-L5RVoJloJvRwEyt9OZaVIs8K9k0Ebj.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <p className="text-secondary text-xs tracking-[0.4em] uppercase mb-4">Contacto</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Haz Realidad Tu Evento
            </h2>
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="w-12 h-px bg-secondary/50" />
              <div className="w-2 h-2 bg-secondary rotate-45" />
              <div className="w-12 h-px bg-secondary/50" />
            </div>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Permítenos ser parte de tus momentos más especiales. 
              Agenda una visita y descubre la magia de Hacienda La Joya.
            </p>
          </div>

          {/* Contact Grid */}
          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            {/* Location */}
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center border border-secondary/30">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-white mb-2">Ubicación</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Blvd Aristóteles 1961<br />
                Ejido La Joya, CP 37178<br />
                León, Guanajuato
              </p>
            </div>

            {/* Phone */}
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center border border-secondary/30">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-white mb-2">Teléfono</h3>
              <a 
                href="tel:+524772914712" 
                className="text-white/60 text-sm hover:text-secondary transition-colors"
              >
                477 291 4712
              </a>
            </div>

            {/* Email */}
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center border border-secondary/30">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-white mb-2">Email</h3>
              <a 
                href="mailto:exhaciendalajoya@outlook.es" 
                className="text-white/60 text-sm hover:text-secondary transition-colors break-all"
              >
                exhaciendalajoya@outlook.es
              </a>
            </div>

            {/* Schedule */}
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center border border-secondary/30">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-white mb-2">Horario</h3>
              <p className="text-white/60 text-sm">
                Lunes a Domingo<br />
                Previa Cita
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className={`text-center transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <a
              href="https://wa.me/524772914712?text=Hola,%20me%20gustaría%20agendar%20una%20visita%20a%20Hacienda%20La%20Joya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-primary text-primary-foreground px-12 py-5 text-sm tracking-[0.2em] uppercase hover:bg-primary/90 transition-all duration-300"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Reservar por WhatsApp
            </a>
            <p className="mt-6 text-white/50 text-sm">
              o llámanos al <a href="tel:+524772914712" className="text-secondary hover:underline">477 291 4712</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
