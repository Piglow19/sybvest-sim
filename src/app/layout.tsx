import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import Footer from '@/components/footer'

import './globals.css'
import Header from '@/components/header'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font_montserrat',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: "Simulateur d'investissement | Mathieu Touillet",
  description:
    "Simulateur d'investissement par Mathieu Touillet & Pacque Axel", //TODO: Change description
}

export default function RootLayout(
  { children }: { children: React.ReactNode }
) {
  return (
    <html lang="fr" className={`${montserrat.variable} dark`}>
      <body className="relative flex flex-col min-h-svh">
        <Header />
        <main className="grow flex flex-col px-16 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
