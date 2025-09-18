import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaFemale, FaCheckCircle, FaArrowRight, FaHeart } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Female Complaints & Women\'s Health Treatment',
  description: 'Specialized homeopathic treatment for women\'s health including female infertility, menstrual disorders, PCOS, fibroids, and menopausal symptoms. Safe and effective care.',
}

const FemaleComplaints = () => {
  const conditions = [
    'Female Infertility',
    'Menstrual Irregularities',
    'PCOS & Fibroids',
    'PMS & Menstrual Pain',
    'Menopausal Symptoms',
    'Hormonal Imbalances',
    'Premenstrual Syndrome',
    'Pregnancy Care',
    'Postpartum Support',
    'Fibromyalgia'
  ]

  const benefits = [
    'Addresses physical, mental, and genetic makeup',
    'Eliminates underlying causes without side effects',
    'Improves body\'s fertility naturally',
    'Reduces time to conceive',
    'Removes genetic and acquired diseases',
    'Safe for all stages of women\'s life'
  ]

  const treatmentApproach = [
    {
      step: 'Assessment',
      description: 'Comprehensive evaluation of hormonal balance, menstrual history, and overall health'
    },
    {
      step: 'Root Cause Analysis',
      description: 'Identify underlying causes of hormonal imbalances and reproductive issues'
    },
    {
      step: 'Constitutional Treatment',
      description: 'Personalized homeopathic remedies based on individual constitution'
    },
    {
      step: 'Holistic Care',
      description: 'Ongoing support for complete women\'s health and wellness'
    }
  ]

  const specializations = [
    {
      title: 'Infertility Treatment',
      description: 'Constitutional homeopathic remedy under professional guidance stimulates natural conception progressively.',
      features: ['Individual-based therapies', 'Genetic constitution focus', 'Natural conception support']
    },
    {
      title: 'Menstrual Irregularities',
      description: 'Effective treatment for irregular periods by addressing hormonal imbalances and underlying health issues.',
      features: ['Hormonal balance restoration', 'Natural cycle regulation', 'Safe and effective']
    },
    {
      title: 'Menopausal Care',
      description: 'Natural approaches to manage menopausal symptoms without harmful hormone preparations.',
      features: ['Symptom relief', 'Emotional support', 'Long-term wellness']
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-pink-50 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="flex items-center space-x-3 mb-4">
                <FaFemale className="text-3xl text-pink-600" />
                <span className="text-pink-600 font-semibold">Women's Health</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Female Complaints &
                <span className="text-pink-600 block">Women's Health</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Specialized homeopathic treatment for women's health issues including infertility, 
                menstrual disorders, and menopausal symptoms. Safe, effective care tailored to 
                women's unique health needs throughout all life stages.
              </p>

              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600">90%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600">3-12</div>
                  <div className="text-sm text-gray-600">Months Duration</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600">100%</div>
                  <div className="text-sm text-gray-600">Natural & Safe</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary bg-pink-600 hover:bg-pink-700">
                  Book Consultation
                </Link>
                <a href="tel:+1234567890" className="btn-secondary border-pink-600 text-pink-600">
                  Call for Support
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Women's health consultation"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl object-cover"
              />
              
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <FaHeart className="text-2xl text-pink-600" />
                  <div>
                    <div className="font-bold text-gray-900">Compassionate Care</div>
                    <div className="text-sm text-gray-600">For All Life Stages</div>
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
              Women's Health Conditions We Treat
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive care for the full spectrum of women's health issues, 
              from reproductive health to hormonal balance and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((condition, index) => (
              <div key={index} className="bg-pink-50 p-6 rounded-xl border border-pink-100">
                <div className="flex items-center space-x-3">
                  <FaCheckCircle className="text-pink-600 text-xl" />
                  <h3 className="text-lg font-semibold text-gray-900">{condition}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Treatments */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Specialized Treatments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each treatment is designed to address the specific needs of women at different 
              life stages with personalized homeopathic care.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {specializations.map((spec, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{spec.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{spec.description}</p>
                <ul className="space-y-2">
                  {spec.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Natural women's health treatment"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                How Our Treatment Helps
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our holistic approach addresses the complete woman - physical, mental, and emotional 
                aspects - providing comprehensive care for lasting health and wellness.
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <FaCheckCircle className="text-pink-600 text-sm" />
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
      <section className="section-padding bg-pink-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Treatment Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a patient-centric approach that considers your unique constitution, 
              health history, and individual needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatmentApproach.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
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
              Understanding Women's Health Challenges
            </h2>
            
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                The women of today are part of the working generation and live a modern lifestyle. 
                There are a variety of stressful situations and emotional conflicts to which they are 
                exposed, which can lead to various health issues.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Many women suffer from several health conditions, such as female infertility, 
                premenstrual & menstrual irregularities, menstruation pain, PMS, PCOS, Fibroid, 
                Fibromyalgia, and other menopausal symptoms. Homeopathy has effective treatment for 
                a wide range of health issues related to women.
              </p>

              <div className="bg-pink-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Approach to Women's Health</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <FaCheckCircle className="text-pink-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Individualized treatment based on symptoms, conditions, and body constitution</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <FaCheckCircle className="text-pink-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Determine and address the root cause of the disease</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <FaCheckCircle className="text-pink-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Safe and free of side effects for all ages</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <FaCheckCircle className="text-pink-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Patient-centric system with incredibly effective results</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-pink-600 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Prioritize Your Health?
            </h2>
            <p className="text-xl text-pink-100 mb-8 leading-relaxed">
              Take control of your health and well-being with our specialized women's health treatments. 
              Experience the gentle power of homeopathy designed specifically for women.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white hover:bg-gray-50 text-pink-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200"
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

export default FemaleComplaints
