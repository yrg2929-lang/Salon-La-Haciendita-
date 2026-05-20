import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              {/* Logo */}
              <svg 
                className="w-12 h-12 text-secondary"
                viewBox="0 0 60 60" 
                fill="none"
              >
                <rect x="15" y="15" width="30" height="30" stroke="currentColor" strokeWidth="1" transform="rotate(45 30 30)" />
                <rect x="20" y="20" width="20" height="20" stroke="currentColor" strokeWidth="0.75" transform="rotate(45 30 30)" />
                <circle cx="30" cy="30" r="3" fill="currentColor" />
              </svg>
              <div>
                <h3 className="font-serif text-2xl text-background">Hacienda La Joya</h3>
                <p className="text-xs tracking-[0.3em] uppercase text-background/50">Casa de Eventos</p>
              </div>
            </div>
            <p className="text-background/60 leading-relaxed max-w-md mb-6">
              Una verdadera pieza histórica de León, Guanajuato del año 1600. 
              El esplendor del lugar se mantiene intacto para sus eventos más especiales.
            </p>
            <p className="text-xs tracking-[0.2em] uppercase text-secondary">Desde 1600</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-background mb-6">Navegación</h4>
            <nav className="flex flex-col gap-3">
              <Link href="#inicio" className="text-background/60 hover:text-secondary text-sm transition-colors">
                Inicio
              </Link>
              <Link href="#historia" className="text-background/60 hover:text-secondary text-sm transition-colors">
                Historia
              </Link>
              <Link href="#espacios" className="text-background/60 hover:text-secondary text-sm transition-colors">
                Espacios
              </Link>
              <Link href="#contacto" className="text-background/60 hover:text-secondary text-sm transition-colors">
                Contacto
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-background mb-6">Contacto</h4>
            <div className="space-y-4 text-sm text-background/60">
              <p className="leading-relaxed">
                Blvd Aristóteles 1961<br />
                Ejido La Joya, CP 37178<br />
                León, Guanajuato
              </p>
              <a href="tel:+524772914712" className="block hover:text-secondary transition-colors">
                477 291 4712
              </a>
              <a href="mailto:exhaciendalajoya@outlook.es" className="block hover:text-secondary transition-colors break-all">
                exhaciendalajoya@outlook.es
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://wa.me/524772914712"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-background/20 hover:border-secondary hover:text-secondary transition-all"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/exhaciendalajoya"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-background/20 hover:border-secondary hover:text-secondary transition-all"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm">
            © {currentYear} Ex-Hacienda La Joya. Todos los derechos reservados.
          </p>
          <p className="text-background/40 text-xs tracking-wider">
            León, Guanajuato, México
          </p>
        </div>
      </div>
    </footer>
  )
}
