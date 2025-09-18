import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaStethoscope, FaCheckCircle, FaArrowRight, FaShieldAlt } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Gastrointestinal Disorders Treatment',
  description: 'Comprehensive homeopathic treatment for digestive disorders including IBS, gastric ulcers, GERD, constipation, and piles. Natural remedies that eliminate root causes.',
}

const GastrointestinalDisorders = () => {
  const conditions = [
    'IBS & Gastric Ulcers',
    'GERD & Acid Peptic Disease',
    'Constipation & Piles/Hemorrhoids',
    'Fistula & Fissures',
    'Digestive Problems',
    'Abdominal Pain',
    'Chronic Indigestion',
    'Inflammatory Bowel Disease',
    'Food Intolerance',
    'Stomach Disorders'
  ]

  const benefits = [
    'Enables smooth food passage',
    'Improves nutrient absorption',
    'Energizes natural healing process',
    'Controls symptoms and reduces pain',
    'Improves stool motility',
    'Treats root causes, not just symptoms'
  ]

  const treatmentApproach = [
    {
      step: 'Evaluation',
      description: 'Detailed assessment of digestive symptoms, dietary habits, and medical history'
    },
    {
      step: 'Diagnosis',
      description: 'Identify root causes and specific digestive system imbalances'
    },
    {
      step: 'Treatment',
      description: 'Individualized homeopathic remedies to restore digestive harmony'
    },
    {
      step: 'Follow-up',
      description: 'Monitor progress and adjust treatment for optimal digestive health'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-green-50 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="flex items-center space-x-3 mb-4">
                <FaStethoscope className="text-3xl text-green-600" />
                <span className="text-green-600 font-semibold">Digestive Care</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Gastrointestinal
                <span className="text-green-600 block">Disorders Treatment</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Comprehensive homeopathic treatment for digestive system disorders with natural 
                remedies that eliminate root causes. Safe, effective solutions for all digestive 
                problems without side effects.
              </p>

              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">92%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">3-10</div>
                  <div className="text-sm text-gray-600">Months Duration</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-gray-600">Natural & Safe</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary bg-green-600 hover:bg-green-700">
                  Book Consultation
                </Link>
                <a href="tel:+1234567890" className="btn-secondary border-green-600 text-green-600">
                  Call for Help
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Digestive health consultation"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl object-cover"
              />
              
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <FaShieldAlt className="text-2xl text-green-600" />
                  <div>
                    <div className="font-bold text-gray-900">Painless Treatment</div>
                    <div className="text-sm text-gray-600">Effective & Natural</div>
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
              Digestive Conditions We Treat
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our homeopathic approach effectively treats the entire range of gastrointestinal 
              disorders, restoring your digestive system's natural balance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((condition, index) => (
              <div key={index} className="bg-green-50 p-6 rounded-xl border border-green-100">
                <div className="flex items-center space-x-3">
                  <FaCheckCircle className="text-green-600 text-xl" />
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
                Our homeopathic medicines work to restore your digestive system's natural intelligence, 
                enabling proper absorption of nutrients and elimination of waste.
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <FaCheckCircle className="text-green-600 text-sm" />
                    </div>
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Natural digestive treatment"
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
              We follow a comprehensive approach to identify and treat the root causes of 
              your digestive problems for lasting relief.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatmentApproach.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
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
      <section className="section-padding bg-green-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
              Understanding Gastrointestinal Disorders
            </h2>
            
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                The gastrointestinal system is one of the most intelligent systems within the human body 
                since it can absorb what is necessary and eliminate what is not. Your digestive system 
                is a series of tubes connected by hollow organs.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                If your digestion is not proper, it can cause several gastrointestinal disorders. 
                Discomfort caused by digestive problems can hinder one's daily activities. Homeopathy 
                has the best curing solutions for both stomach and digestive problems.
              </p>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Treatment Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Completely safe without any side effects</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Substantial benefits in the long run</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Energizes your own healing process</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">State-of-the-art infrastructure for patient convenience</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-green-600 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Restore Your Digestive Health?
            </h2>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Don't let digestive problems control your life. Our natural homeopathic treatments 
              can restore your digestive system's natural balance and function.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white hover:bg-gray-50 text-green-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200"
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

export default GastrointestinalDisorders
