"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/480799721_1137898411362120_7362807075291468413_n-dD4QSeJxcJxxXuMAK65BXslSl1cbqD.jpg",
    alt: "Salón principal con decoración de XV años",
    title: "Salón Principal",
    description: "Techos de madera y candelabros de cristal"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/480694754_1137355528083075_1361804754949943893_n-DeUIEEC0sQuEfr6TS4uJLsva3B5hU2.jpg",
    alt: "Decoración elegante blanco y dorado",
    title: "Decoraciones",
    description: "Elegancia en cada detalle"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/480215813_1137355304749764_8182781643119363802_n-XeqYORVanrxMllHTfZntyTSphGiNXx.jpg",
    alt: "Jardín exterior con arco floral",
    title: "Jardín",
    description: "Espacios al aire libre únicos"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/480539588_1137355354749759_4255518014754394076_n-FsYuncMf23X28hLVWAzhrbytjMABeh.jpg",
    alt: "Mesas preparadas para evento",
    title: "Banquete",
    description: "Montajes espectaculares"
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
      id="galeria"
      ref={sectionRef}
      className="py-24 md:py-32 bg-background"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">Nuestras Instalaciones</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Galería
          </h2>
          <p className="font-serif italic text-2xl md:text-3xl text-primary/80 mb-6">
            ¿Salón o Jardín?
          </p>
          <div className="w-20 h-0.5 bg-primary mx-auto" />
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.title}
              className={`group relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-serif text-xl mb-1">{image.title}</h3>
                <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{image.description}</p>
              </div>

              {/* Border on hover */}
              <div className="absolute inset-2 border border-white/0 group-hover:border-white/30 rounded transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* View more button */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <a
            href="https://wa.me/524776479502?text=Hola,%20me%20gustaría%20conocer%20más%20sobre%20sus%20instalaciones"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border-2 border-primary text-primary px-8 py-4 text-sm tracking-[0.15em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Agenda una visita
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Cerrar"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="relative max-w-5xl max-h-[85vh] w-full aspect-[3/4] md:aspect-video">
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              fill
              className="object-contain"
            />
          </div>

          {/* Navigation */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
            }}
            aria-label="Imagen anterior"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1)
            }}
            aria-label="Imagen siguiente"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  )
}
