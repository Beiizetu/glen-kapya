"use client"

import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation'
import './globals.css'
import { LanguageProvider } from '@/context/language-context'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <div className="min-h-screen flex flex-col">
            {!usePathname()?.startsWith('/admin') && <Navbar />}
            <main className="flex-grow">
              {children}
            </main>
            {!usePathname()?.startsWith('/admin') && <Footer />}
          </div>
        </LanguageProvider>
        <script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          async
        ></script>
      </body>
    </html>
  )
}