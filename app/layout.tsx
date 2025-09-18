import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://rxl-homeopathy.onrender.com' : 'http://localhost:3000'),
  title: {
    default: 'Remedy Excel - Specialists in Homeopathy',
    template: '%s | Remedy Excel'
  },
  description: 'Professional homeopathy treatments and natural healing solutions. Expert homeopathic care for holistic wellness and health at Remedy Excel.',
  keywords: ['homeopathy', 'natural healing', 'holistic medicine', 'alternative medicine', 'wellness', 'health', 'remedy excel'],
  authors: [{ name: 'Remedy Excel' }],
  creator: 'Remedy Excel - Specialists in Homeopathy',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://remedyexcel.com',
    title: 'Remedy Excel - Specialists in Homeopathy',
    description: 'Professional homeopathy treatments and natural healing solutions',
    siteName: 'Remedy Excel',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Remedy Excel - Specialists in Homeopathy',
    description: 'Professional homeopathy treatments and natural healing solutions',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ErrorBoundary>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  )
}
