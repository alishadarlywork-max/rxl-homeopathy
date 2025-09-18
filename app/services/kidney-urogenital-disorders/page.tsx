import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaAllergies, FaCheckCircle, FaArrowRight, FaShieldAlt } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Kidney & Urogenital Disorders Treatment',
  description: 'Natural homeopathic remedies for kidney stones, BPH, recurrent UTI, and urogenital disorders. Risk-free, effective treatment without surgical intervention.',
}

const KidneyUrogenitalDisorders = () => {
  const conditions = [
    'Kidney Stones',
    'BPH (Enlarged Prostate)',
    'Recurrent UTI',
    'Bladder Stones',
    'Renal Disorders',
    'Urinary Problems',
    'Ureteric Stones',
    'Kidney Function Issues',
    'Urinary Incontinence',
    'Prostate Problems'
  ]

  const benefits = [
    'Controls pain and discomfort naturally',
    'Dissolves stones and removes them in urine',
    'Improves kidney and excretory organ function',
    'Reduces nighttime urination frequency',
    'Prevents recurrence of kidney problems',
    'Avoids need for surgical interventions'
  ]

  const treatmentApproach = [
    {
      step: 'Assessment',
      description: 'Thorough evaluation of kidney function, urinary symptoms, and medical history'
    },
    {
      step: 'Control',
      description: 'Begin by controlling the condition and preventing further kidney damage'
    },
    {
      step: 'Treatment',
      description: 'Natural medicines to purify and improve excretory organ function'
    },
    {
      step: 'Prevention',
      description: 'Eliminate causes and prevent recurrence of kidney-related disorders'
    }
  ]

  const treatmentBenefits = [
    {
      title: 'Natural Stone Dissolution',
      description: 'Our remedies work to break down large kidney stones naturally and remove them through urine without painful medical interventions.',
      icon: '🔬'
    },
    {
      title: 'Kidney Function Improvement',
      description: 'Natural medicines purify and enhance the function of kidneys and excretory organs to maintain essential fluids and nutrients.',
      icon: '💧'
    },
    {
      title: 'Pain Relief',
      description: 'Effective control of intense pain associated with kidney stones and urogenital disorders using natural remedies.',
      icon: '🌿'
    },
    {
      title: 'Recurrence Prevention',
      description: 'Our treatment approach focuses on preventing the recurrence of kidney stones and urogenital problems.',
      icon: '🛡️'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-teal-50 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="flex items-center space-x-3 mb-4">
                <FaAllergies className="text-3xl text-teal-600" />
                <span className="text-teal-600 font-semibold">Kidney & Urogenital Care</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Kidney & Urogenital
                <span className="text-teal-600 block">Disorders Treatment</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Natural homeopathic remedies for kidney and urogenital disorders. Risk-free, 
                effective treatment for kidney stones, BPH, UTI, and other urinary conditions 
                without the need for surgical intervention.
              </p>

              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">88%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">4-12</div>
                  <div className="text-sm text-gray-600">Months Duration</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">100%</div>
                  <div className="text-sm text-gray-600">Natural & Safe</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary bg-teal-600 hover:bg-teal-700">
                  Book Consultation
                </Link>
                <a href="tel:+1234567890" className="btn-secondary border-teal-600 text-teal-600">
                  Emergency Care
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Kidney and urogenital health consultation"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl object-cover"
              />
              
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <FaShieldAlt className="text-2xl text-teal-600" />
                  <div>
                    <div className="font-bold text-gray-900">Risk-Free</div>
                    <div className="text-sm text-gray-600">No Surgery Required</div>
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
              Kidney & Urogenital Conditions We Treat
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized homeopathic treatment addresses all types of kidney and urogenital 
              disorders with natural, effective remedies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((condition, index) => (
              <div key={index} className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                <div className="flex items-center space-x-3">
                  <FaCheckCircle className="text-teal-600 text-xl" />
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
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              How Our Treatment Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our natural approach focuses on healing and restoring kidney function while 
              providing effective relief from symptoms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treatmentBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Benefits List */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Natural kidney treatment"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Benefits of Our Natural Treatment
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our homeopathic medicines are highly effective in treating urogenital and kidney-related 
                disorders while being completely safe and natural.
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <FaCheckCircle className="text-teal-600 text-sm" />
                    </div>
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="section-padding bg-teal-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Treatment Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach that begins with controlling the condition and 
              progresses to complete healing and prevention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatmentApproach.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
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
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
              Understanding Kidney & Urogenital Disorders
            </h2>
            
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Homeopathic medicines are highly effective in treating urogenital and kidney-related 
                disorders. Besides being safe and effective, they can also help relieve the intense 
                pain associated with kidney-related issues.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Homeopathy begins with controlling the condition and preventing further kidney damage 
                so that no additional harm is caused to the kidneys, and later eliminates the causes 
                of kidney disease.
              </p>

              <div className="bg-teal-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Treatment Goals</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <FaCheckCircle className="text-teal-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Control pain and discomfort by dissolving stones naturally</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <FaCheckCircle className="text-teal-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Break down large kidney stones without painful medical interventions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <FaCheckCircle className="text-teal-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Purify and improve kidney and excretory organ function</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <FaCheckCircle className="text-teal-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Create customized treatment plans based on medical history and symptoms</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-l-4 border-teal-600 p-6 rounded-r-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Conditions We Successfully Treat:</h4>
                <p className="text-gray-700">
                  BPH (Benign Prostatic Hyperplasia), Recurrent UTI (Urinary Tract Infections), 
                  Renal stones, Ureteric stones, and Bladder stones can all be efficiently treated 
                  with homeopathy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-teal-600 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Heal Your Kidneys Naturally?
            </h2>
            <p className="text-xl text-teal-100 mb-8 leading-relaxed">
              Don't let kidney problems affect your quality of life. Our natural, risk-free 
              homeopathic treatments can help you achieve optimal kidney health without surgery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white hover:bg-gray-50 text-teal-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200"
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

export default KidneyUrogenitalDisorders
