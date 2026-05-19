import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'La Haciendita | Salón de Eventos - León, Gto',
  description: 'Salón de eventos para bodas, XV años y celebraciones especiales en León, Guanajuato. Un espacio rústico y elegante para hacer realidad tu evento soñado.',
  keywords: ['salón de eventos', 'bodas', 'XV años', 'León', 'Guanajuato', 'La Haciendita', 'eventos especiales'],
  openGraph: {
    title: 'La Haciendita | Salón de Eventos',
    description: 'Tu evento soñado hecho realidad en León, Guanajuato',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
