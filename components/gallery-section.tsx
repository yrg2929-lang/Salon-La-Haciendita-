"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hAwBjUubTOimMDChP2YT50NZWD3n0f.png",
    alt: "Corredores coloniales con arcos y buganvilias",
    title: "Corredores Coloniales",
    category: "Arquitectura"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-f2r88KDaNYU75Z0pzkoi75lCn065N5.png",
    alt: "Kiosco y jardines al atardecer",
    title: "Kiosco y Jardines",
    category: "Exteriores"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-L5RVoJloJvRwEyt9OZaVIs8K9k0Ebj.png",
    alt: "Senderos iluminados de noche",
    title: "Jardines de Noche",
    category: "Iluminación"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-l7HcmaZ7gpjBwXcjgR8t48MmtOyRU9.png",
    alt: "Vista panorámica de la hacienda",
    title: "Vista Principal",
    category: "Hacienda"
  }
]

export function GallerySection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="espacios"
      ref={sectionRef}
      className="py-24 md:py-32 bg-muted"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4">Descubre</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Nuestros Espacios
          </h2>
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="w-12 h-px bg-primary/40" />
            <div className="w-2 h-2 bg-primary rotate-45" />
            <div className="w-12 h-px bg-primary/40" />
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cada rincón de nuestra hacienda ha sido cuidadosamente preservado 
            para ofrecerte un escenario único e inolvidable
          </p>
        </div>

        {/* Masonry-style Gallery */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Large Image */}
          <div
            className={`relative aspect-[4/5] md:row-span-2 overflow-hidden cursor-pointer group transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            onClick={() => setSelectedImage(0)}
          >
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-xs tracking-[0.3em] uppercase text-white/70 mb-2">{galleryImages[0].category}</p>
              <h3 className="font-serif text-2xl">{galleryImages[0].title}</h3>
            </div>
            {/* Corner accents */}
            <div className="absolute top-4 left-4 w-12 h-12 border-l border-t border-white/0 group-hover:border-white/40 transition-all duration-500" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-r border-b border-white/0 group-hover:border-white/40 transition-all duration-500" />
          </div>

          {/* Right column images */}
          {galleryImages.slice(1, 3).map((image, index) => (
            <div
              key={image.title}
              className={`relative aspect-[4/3] overflow-hidden cursor-pointer group transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              onClick={() => setSelectedImage(index + 1)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-xs tracking-[0.3em] uppercase text-white/70 mb-1">{image.category}</p>
                <h3 className="font-serif text-xl">{image.title}</h3>
              </div>
              <div className="absolute top-4 left-4 w-10 h-10 border-l border-t border-white/0 group-hover:border-white/40 transition-all duration-500" />
              <div className="absolute bottom-4 right-4 w-10 h-10 border-r border-b border-white/0 group-hover:border-white/40 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Full width bottom image */}
        <div
          className={`relative aspect-[21/9] overflow-hidden cursor-pointer group transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          onClick={() => setSelectedImage(3)}
        >
          <Image
            src={galleryImages[3].src}
            alt={galleryImages[3].alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <p className="text-xs tracking-[0.3em] uppercase text-white/70 mb-2">{galleryImages[3].category}</p>
            <h3 className="font-serif text-2xl md:text-3xl">{galleryImages[3].title}</h3>
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <p className="text-muted-foreground mb-6">Visita nuestras instalaciones y enamórate del lugar</p>
          <a
            href="https://wa.me/524772914712?text=Hola,%20me%20gustaría%20agendar%20una%20visita%20a%20Hacienda%20La%20Joya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-primary/90 transition-all duration-300"
          >
            Agendar Visita
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10"
            onClick={() => setSelectedImage(null)}
            aria-label="Cerrar"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="relative max-w-6xl max-h-[85vh] w-full aspect-video">
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              fill
              className="object-contain"
            />
          </div>

          {/* Navigation */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-3 transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
            }}
            aria-label="Imagen anterior"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-3 transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1)
            }}
            aria-label="Imagen siguiente"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image info */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white">
            <p className="text-xs tracking-[0.3em] uppercase text-white/60 mb-1">{galleryImages[selectedImage].category}</p>
            <h3 className="font-serif text-xl">{galleryImages[selectedImage].title}</h3>
          </div>
        </div>
      )}
    </section>
  )
}
