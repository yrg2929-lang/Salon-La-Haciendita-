import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ex-Hacienda La Joya | Casa de Eventos - León, Gto',
  description: 'Hacienda La Joya es una verdadera pieza histórica de León, Guanajuato del año 1600. Una atmósfera inigualable para bodas, XV años y eventos especiales.',
  keywords: ['hacienda', 'bodas', 'XV años', 'León', 'Guanajuato', 'La Joya', 'eventos', 'histórico', 'colonial'],
  openGraph: {
    title: 'Ex-Hacienda La Joya | Casa de Eventos',
    description: 'Una verdadera pieza histórica de León desde 1600',
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
