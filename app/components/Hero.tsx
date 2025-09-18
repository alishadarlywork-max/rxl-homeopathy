import Link from 'next/link'
import Image from 'next/image'
import { FaPlay } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-white pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary-600 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-secondary-500 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-primary-400 rounded-full"></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 bg-secondary-400 rounded-full"></div>
      </div>

      <div className="container-custom relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Natural Healing Through
                <span className="text-primary-600 block">Homeopathy</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience the power of natural healing with our expert homeopathic treatments. 
                We provide personalized care for holistic wellness and lasting health.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">500+</div>
                <div className="text-sm text-gray-600">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Book Consultation
              </Link>
              <button className="btn-secondary group">
                <FaPlay className="mr-2 group-hover:translate-x-1 transition-transform" />
                Watch Our Story
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-8">
              <div className="text-sm text-gray-500">Trusted by:</div>
              <div className="flex items-center space-x-4">
                <div className="text-sm font-medium text-gray-700">Health Ministry</div>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="text-sm font-medium text-gray-700">Medical Board</div>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="text-sm font-medium text-gray-700">WHO Guidelines</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/images/hero.jpg"
                alt="Homeopathy consultation"
                width={600}
                height={700}
                className="rounded-2xl shadow-2xl object-cover"
                priority
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg z-20">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-bold text-lg">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">100% Natural</div>
                  <div className="text-sm text-gray-600">Safe & Effective</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg z-20">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
                  <span className="text-secondary-600 font-bold text-lg">24/7</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Support</div>
                  <div className="text-sm text-gray-600">Always Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
