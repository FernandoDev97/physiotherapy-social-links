import { Montserrat, Bree_Serif } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

const breeSerif = Bree_Serif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bree-serif'
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${breeSerif.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
