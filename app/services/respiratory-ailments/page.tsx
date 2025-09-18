import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaHeartbeat, FaCheckCircle, FaArrowRight, FaClock, FaShieldAlt } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Respiratory Ailments Treatment',
  description: 'Evidence-based homeopathic treatment for respiratory ailments including asthma, bronchitis, chronic cough, and breathing difficulties. Safe and effective remedies for all ages.',
}

const RespiratoryAilments = () => {
  const conditions = [
    'Asthma & Bronchitis',
    'Chronic Cough',
    'Allergic Rhinitis',
    'Sinusitis',
    'Lung Infections',
    'Breathing Difficulties',
    'Respiratory Allergies',
    'Pneumonia Recovery',
    'COPD Support',
    'Whooping Cough'
  ]

  const benefits = [
    'Clears blocked air passages naturally',
    'Improves blood circulation',
    'Boosts respiratory immunity',
    'Reduces symptom intensity',
    'Prevents recurrence',
    'Safe for all ages including children'
  ]

  const treatmentApproach = [
    {
      step: 'Assessment',
      description: 'Thorough evaluation of respiratory symptoms, triggers, and medical history'
    },
    {
      step: 'Individualization',
      description: 'Customized remedy selection based on your specific symptoms and constitution'
    },
    {
      step: 'Treatment',
      description: 'Minimal doses to stimulate natural healing and clear respiratory passages'
    },
    {
      step: 'Monitoring',
      description: 'Regular follow-ups to track progress and adjust treatment as needed'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="flex items-center space-x-3 mb-4">
                <FaHeartbeat className="text-3xl text-blue-600" />
                <span className="text-blue-600 font-semibold">Respiratory Care</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Respiratory Ailments
                <span className="text-blue-600 block">Treatment</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Evidence-based homeopathic treatment for respiratory ailments with safe and effective 
                remedies. We provide natural solutions that clear blocked air passages and improve 
                breathing for patients of all ages.
              </p>

              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">94%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">2-8</div>
                  <div className="text-sm text-gray-600">Months Duration</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-gray-600">Natural & Safe</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary bg-blue-600 hover:bg-blue-700">
                  Book Consultation
                </Link>
                <a href="tel:+1234567890" className="btn-secondary border-blue-600 text-blue-600">
                  Call for Emergency
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Respiratory treatment consultation"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl object-cover"
              />
              
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <FaShieldAlt className="text-2xl text-blue-600" />
                  <div>
                    <div className="font-bold text-gray-900">Safe Treatment</div>
                    <div className="text-sm text-gray-600">No Side Effects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Respiratory Conditions We Treat
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our homeopathic approach effectively treats a wide range of respiratory ailments, 
              providing natural relief and long-term healing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((condition, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-center space-x-3">
                  <FaCheckCircle className="text-blue-600 text-xl" />
                  <h3 className="text-lg font-semibold text-gray-900">{condition}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                How Our Treatment Helps
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our homeopathic medicines work by stimulating your body's natural healing mechanisms, 
                clearing blocked airways and improving overall respiratory function.
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <FaCheckCircle className="text-blue-600 text-sm" />
                    </div>
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Natural respiratory treatment"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Treatment Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic, individualized approach to ensure the most effective 
              treatment for your specific respiratory condition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatmentApproach.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.step}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="section-padding bg-blue-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
              Understanding Respiratory Ailments
            </h2>
            
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Any disease or health condition that affects the airways or lungs is known as a respiratory disease. 
                Common symptoms include coughing and breathing difficulties. As long-lasting infections can lead to 
                lifetime lung diseases, it is significant to treat respiratory diseases wisely.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                As one of the best remedies for treating acute respiratory infections, homeopathy offers highly 
                effective remedies. We provide evidence-based homeopathic treatment that is safe and effective, 
                prescribed by professional homeopathic doctors.
              </p>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Treatment Goals</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Free blocked air passages in lungs, windpipes, and trachea</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Make breathing easier and improve blood circulation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Boost the body's immunity system against allergens</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Reduce symptoms, intensity, and recurrence</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Breathe Better?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Don't let respiratory problems hold you back. Our natural homeopathic treatments 
              can help you breathe easier and live healthier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white hover:bg-gray-50 text-blue-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200"
              >
                Book Your Consultation
              </Link>
              <Link 
                href="/services"
                className="bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg border-2 border-white transition-colors duration-200 inline-flex items-center"
              >
                View All Services
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RespiratoryAilments
