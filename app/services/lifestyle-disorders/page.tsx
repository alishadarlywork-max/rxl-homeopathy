import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaChild, FaCheckCircle, FaArrowRight, FaHeartbeat } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Lifestyle Disorders Treatment',
  description: 'Comprehensive homeopathic treatment for lifestyle disorders including diabetes mellitus, hypertension, obesity, and thyroid disorders. Natural solutions for modern health challenges.',
}

const LifestyleDisorders = () => {
  const conditions = [
    'Diabetes Mellitus',
    'Hypertension (High Blood Pressure)',
    'Obesity & Weight Management',
    'Thyroid Disorders',
    'High Cholesterol',
    'Metabolic Disorders',
    'Heart Disease',
    'Atherosclerosis',
    'Stroke Prevention',
    'Addiction Recovery Support'
  ]

  const benefits = [
    'Improves overall immune system',
    'Addresses root causes of lifestyle diseases',
    'Prevents diabetic complications',
    'Boosts insulin sensitivity and secretion',
    'Regenerates beta cells naturally',
    'Combines traditional values with modern practices'
  ]

  const treatmentApproach = [
    {
      step: 'Assessment',
      description: 'Comprehensive evaluation of lifestyle factors, diet, stress levels, and medical history'
    },
    {
      step: 'Root Cause Analysis',
      description: 'Identify underlying causes of metabolic and lifestyle-related disorders'
    },
    {
      step: 'Lifestyle Management',
      description: 'Integrated approach combining homeopathic treatment with lifestyle modifications'
    },
    {
      step: 'Long-term Care',
      description: 'Ongoing monitoring and adjustment for sustained health improvement'
    }
  ]

  const specialConditions = [
    {
      title: 'Diabetes Mellitus',
      description: 'Complete treatment solutions for diabetes with natural medicines to improve insulin sensitivity and prevent complications.',
      features: ['Blood sugar control', 'Insulin sensitivity improvement', 'Complication prevention'],
      color: 'bg-red-50 border-red-100',
      iconColor: 'text-red-600'
    },
    {
      title: 'Hypertension',
      description: 'Natural blood pressure treatment that identifies root causes and provides customized herbal solutions.',
      features: ['Root cause identification', 'Toxin removal', 'Natural blood pressure reduction'],
      color: 'bg-blue-50 border-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Obesity',
      description: 'Safe and effective treatment plans to remove excess fat accumulation and regulate body metabolism.',
      features: ['Metabolism boost', 'Fat reduction', 'Detoxification support'],
      color: 'bg-green-50 border-green-100',
      iconColor: 'text-green-600'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-orange-50 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="flex items-center space-x-3 mb-4">
                <FaChild className="text-3xl text-orange-600" />
                <span className="text-orange-600 font-semibold">Lifestyle Medicine</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Lifestyle Disorders
                <span className="text-orange-600 block">Treatment</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Comprehensive homeopathic treatment for lifestyle-related diseases including diabetes, 
                hypertension, and obesity. Natural solutions that address the root causes of modern 
                health challenges with safe, effective remedies.
              </p>

              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">91%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">6-18</div>
                  <div className="text-sm text-gray-600">Months Duration</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">100%</div>
                  <div className="text-sm text-gray-600">Natural & Safe</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary bg-orange-600 hover:bg-orange-700">
                  Book Consultation
                </Link>
                <a href="tel:+1234567890" className="btn-secondary border-orange-600 text-orange-600">
                  Call for Guidance
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Lifestyle disorders consultation"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl object-cover"
              />
              
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <FaHeartbeat className="text-2xl text-orange-600" />
                  <div>
                    <div className="font-bold text-gray-900">Holistic Care</div>
                    <div className="text-sm text-gray-600">Complete Wellness</div>
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
              Lifestyle Disorders We Treat
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach addresses the full range of lifestyle-related health conditions 
              with natural, effective homeopathic remedies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((condition, index) => (
              <div key={index} className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                <div className="flex items-center space-x-3">
                  <FaCheckCircle className="text-orange-600 text-xl" />
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
              Our Specialized Lifestyle Treatments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each condition requires a unique approach. Our specialized treatments target the specific 
              challenges of modern lifestyle disorders.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {specialConditions.map((condition, index) => (
              <div key={index} className={`${condition.color} p-8 rounded-2xl border hover:shadow-lg transition-shadow duration-300`}>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{condition.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{condition.description}</p>
                <ul className="space-y-2">
                  {condition.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <FaCheckCircle className={`${condition.iconColor} text-sm`} />
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
                Our integrated approach combines traditional homeopathic values with modern therapeutic 
                technologies, providing complete lifestyle management alongside disease recovery.
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <FaCheckCircle className="text-orange-600 text-sm" />
                    </div>
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Natural lifestyle disorder treatment"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="section-padding bg-orange-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Treatment Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a comprehensive approach that addresses both the symptoms and underlying 
              lifestyle factors contributing to your health condition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatmentApproach.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
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
              Understanding Lifestyle Disorders
            </h2>
            
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Lifestyle disorders have risen significantly in recent years. The primary reason is 
                an unhealthy lifestyle combined with a poor diet. Atherosclerosis, heart disease, 
                stroke, type 2 diabetes, as well as disorders linked to smoking and alcohol and 
                drug addiction, are examples of lifestyle diseases.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Homeopathy provides effective treatment solutions for the majority of lifestyle diseases. 
                Diabetes, high blood pressure, thyroid disorders, depression, and many other lifestyle 
                diseases can be correctly diagnosed and healed with homeopathy.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-orange-50 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our mission as a homeopathic treatment facility is to combine traditional values 
                    with modern therapeutic technologies and practices. We trust that all ailments 
                    brought about by human nature have a natural treatment.
                  </p>
                </div>

                <div className="bg-white border border-orange-200 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our healthcare system is different in that it combines entire lifestyle management 
                    with illness recovery, making us the ideal option for all of our patients seeking 
                    comprehensive wellness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-orange-600 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform Your Lifestyle?
            </h2>
            <p className="text-xl text-orange-100 mb-8 leading-relaxed">
              Don't let lifestyle disorders control your life. Our comprehensive homeopathic approach 
              can help you achieve lasting health and wellness through natural healing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white hover:bg-gray-50 text-orange-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200"
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

export default LifestyleDisorders
