import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaBrain, FaCheckCircle, FaArrowRight, FaShieldAlt } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Psychological Disorders & Mental Health Treatment',
  description: 'Natural homeopathic treatment for psychological disorders including depression, anxiety, learning disabilities, and phobias. Safe, effective mental health care without side effects.',
}

const PsychologicalDisorders = () => {
  const conditions = [
    'Depression & Mood Disorders',
    'Anxiety & Panic Attacks',
    'Learning Disabilities',
    'ADHD & ADD',
    'Phobias & Fears',
    'Stress Management',
    'Neurological Disorders',
    'Behavioral Problems',
    'Lack of Confidence',
    'Cognitive Issues'
  ]

  const benefits = [
    'Controls illnesses and prevents recurrence',
    'Addresses underlying psychological causes',
    'Safe treatment without side effects',
    'Improves cognitive and affective functions',
    'Enhances overall mental well-being',
    'Suitable for all ages including children'
  ]

  const treatmentApproach = [
    {
      step: 'Assessment',
      description: 'Comprehensive analysis of mental, physical, and psychological status'
    },
    {
      step: 'Diagnosis',
      description: 'Identify root causes and specific psychological patterns'
    },
    {
      step: 'Treatment',
      description: 'Individualized homeopathic remedies based on symptoms and history'
    },
    {
      step: 'Support',
      description: 'Ongoing counseling and monitoring for complete mental wellness'
    }
  ]

  const specializations = [
    {
      title: 'Depression Treatment',
      description: 'Thorough homeopathic medicine can fully eliminate numerous depressive symptoms, focusing on individual characteristics.',
      features: ['Individual-focused treatment', 'Natural mood stabilization', 'Long-term recovery']
    },
    {
      title: 'Anxiety & Phobias',
      description: 'Safe and effective treatment for anxiety disorders and specific phobias without dependency or side effects.',
      features: ['Root cause treatment', 'Confidence building', 'Stress reduction']
    },
    {
      title: 'Learning Disabilities',
      description: 'Natural treatment for learning difficulties with improved confidence and academic performance.',
      features: ['Concentration improvement', 'Memory enhancement', 'Academic support']
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-purple-50 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="flex items-center space-x-3 mb-4">
                <FaBrain className="text-3xl text-purple-600" />
                <span className="text-purple-600 font-semibold">Mental Health Care</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Psychological Disorders &
                <span className="text-purple-600 block">Mental Health</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Natural homeopathic treatment for psychological disorders and mental health conditions. 
                Safe, effective care for depression, anxiety, learning disabilities, and phobias 
                without harmful side effects.
              </p>

              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">85%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">4-15</div>
                  <div className="text-sm text-gray-600">Months Duration</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">100%</div>
                  <div className="text-sm text-gray-600">Natural & Safe</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary bg-purple-600 hover:bg-purple-700">
                  Book Consultation
                </Link>
                <a href="tel:+1234567890" className="btn-secondary border-purple-600 text-purple-600">
                  Call for Support
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Mental health consultation"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl object-cover"
              />
              
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <FaShieldAlt className="text-2xl text-purple-600" />
                  <div>
                    <div className="font-bold text-gray-900">Safe & Natural</div>
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
              Mental Health Conditions We Treat
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach addresses a wide range of psychological and neurological 
              conditions with natural, effective homeopathic remedies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((condition, index) => (
              <div key={index} className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                <div className="flex items-center space-x-3">
                  <FaCheckCircle className="text-purple-600 text-xl" />
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
              Our Specialized Mental Health Treatments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each treatment is carefully designed to address the specific needs of mental health 
              conditions with personalized homeopathic care.
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
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
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
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                How Our Treatment Helps
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our homeopathic approach to mental health is natural and humanistic, addressing 
                the root causes of psychological conditions for lasting healing and wellness.
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <FaCheckCircle className="text-purple-600 text-sm" />
                    </div>
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Natural mental health treatment"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="section-padding bg-purple-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Treatment Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a comprehensive approach that considers your complete mental, physical, 
              and emotional well-being for holistic healing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatmentApproach.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
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
              Understanding Psychological Disorders
            </h2>
            
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Today's highly competitive and stressful world is a breeding ground for illnesses affecting 
                mental health. Most people experience anxiety, fear, phobias, mood disorders, depression, 
                and various psychological challenges. Maintaining a healthy balance between physical and 
                mental health is crucial to leading a happy and healthy life.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Homeopathy effectively treats psychological disorders without the risk of side effects. 
                It is a natural and humanistic treatment that not only controls your illnesses but also 
                prevents them from recurring by addressing the underlying cause of the problem.
              </p>

              <div className="bg-purple-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mental Health Approach</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <FaCheckCircle className="text-purple-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Comprehensive analysis of mental, physical, and psychological status</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <FaCheckCircle className="text-purple-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Assists patients in overcoming cognitive and affective issues</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <FaCheckCircle className="text-purple-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Considers individual symptoms and health history</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <FaCheckCircle className="text-purple-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">High success rate with effective treatment outcomes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-purple-600 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Improve Your Mental Well-being?
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Take the first step towards better mental health with our natural, safe, and effective 
              homeopathic treatments. Experience healing without harmful side effects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white hover:bg-gray-50 text-purple-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200"
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

export default PsychologicalDisorders
