import Link from 'next/link'
import { FaPhone, FaCalendarAlt, FaArrowRight } from 'react-icons/fa'

const CTA = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-white rounded-full"></div>
        <div className="absolute bottom-32 right-10 w-40 h-40 bg-white rounded-full"></div>
      </div>

      <div className="container-custom relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
              Ready to Start Your
              <span className="block text-secondary-300">Natural Healing Journey?</span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-primary-100 leading-relaxed max-w-3xl mx-auto">
              Take the first step towards better health with our personalized homeopathic treatments. 
              Book your consultation today and discover the power of natural healing.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-8 h-8 bg-secondary-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <span className="text-primary-100">Free Initial Consultation</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-8 h-8 bg-secondary-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <span className="text-primary-100">Personalized Treatment Plan</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-8 h-8 bg-secondary-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <span className="text-primary-100">24/7 Support Available</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/contact"
                className="bg-white hover:bg-gray-50 text-primary-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center group"
              >
                <FaCalendarAlt className="mr-3 group-hover:scale-110 transition-transform" />
                Book Free Consultation
                <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a 
                href="tel:+1234567890"
                className="bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg border-2 border-white transition-colors duration-200 inline-flex items-center justify-center"
              >
                <FaPhone className="mr-3" />
                Call Now: (555) 123-4567
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-primary-500">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-primary-200">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                  <span className="text-sm">Licensed Practitioners</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                  <span className="text-sm">15+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                  <span className="text-sm">500+ Satisfied Patients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                  <span className="text-sm">95% Success Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
