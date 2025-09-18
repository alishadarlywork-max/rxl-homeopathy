import type { Metadata } from 'next'
import Hero from './components/Hero'
import Features from './components/Features'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import ImageTest from './components/ImageTest'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Natural Healing Homeopathy Clinic - Your trusted partner in holistic health and natural healing solutions.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <ImageTest />
      <Features />
      <Services />
      <Testimonials />
      <CTA />
    </>
  )
}
