import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  FaChild, 
  FaFemale, 
  FaBrain, 
  FaHeartbeat, 
  FaAllergies, 
  FaStethoscope,
  FaBone,
  FaEye,
  FaLeaf,
  FaArrowRight,
  FaClock,
  FaCheckCircle
} from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Comprehensive homeopathic treatment services for chronic diseases, pediatric care, women\'s health, mental wellness, allergies, and acute conditions.',
}

const getServiceUrl = (title: string) => {
  const urlMap: { [key: string]: string } = {
    'Respiratory Ailments': '/services/respiratory-ailments',
    'Gastro-intestinal Disorders': '/services/gastrointestinal-disorders',
    'Uro-genital & Kidney Disorders': '/services/kidney-urogenital-disorders',
    'Female Complaints': '/services/female-complaints',
    'Neurological & Psychological Disorders': '/services/psychological-disorders',
    'Chronic Lifestyle Disorders': '/services/lifestyle-disorders'
  }
  return urlMap[title] || '/services'
}

const Services = () => {
  const mainServices = [
    {
      icon: FaHeartbeat,
      title: 'Respiratory Ailments',
      description: 'Evidence-based homeopathic treatment for respiratory ailments with safe and effective remedies for all ages.',
      image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      conditions: [
        'Asthma & Bronchitis',
        'Chronic Cough',
        'Allergic Rhinitis',
        'Sinusitis',
        'Lung Infections',
        'Breathing Difficulties'
      ],
      duration: '2-8 months',
      successRate: '94%'
    },
    {
      icon: FaStethoscope,
      title: 'Gastro-intestinal Disorders',
      description: 'Comprehensive treatment for digestive system disorders with natural remedies that eliminate root causes.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      conditions: [
        'IBS & Gastric Ulcers',
        'GERD & Acid Peptic Disease',
        'Constipation & Piles',
        'Fistula & Fissures',
        'Digestive Problems',
        'Abdominal Pain'
      ],
      duration: '3-10 months',
      successRate: '92%'
    },
    {
      icon: FaAllergies,
      title: 'Uro-genital & Kidney Disorders',
      description: 'Natural remedies for kidney and urogenital disorders with risk-free, effective treatment without surgical intervention.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      conditions: [
        'Kidney Stones',
        'BPH (Enlarged Prostate)',
        'Recurrent UTI',
        'Bladder Stones',
        'Renal Disorders',
        'Urinary Problems'
      ],
      duration: '4-12 months',
      successRate: '88%'
    },
    {
      icon: FaFemale,
      title: 'Female Complaints',
      description: 'Specialized treatment for women\'s health issues including infertility, menstrual disorders, and menopausal symptoms.',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      conditions: [
        'Female Infertility',
        'Menstrual Irregularities',
        'PCOS & Fibroids',
        'PMS & Menstrual Pain',
        'Menopausal Symptoms',
        'Hormonal Imbalances'
      ],
      duration: '3-12 months',
      successRate: '90%'
    },
    {
      icon: FaBrain,
      title: 'Neurological & Psychological Disorders',
      description: 'Holistic treatment for neurological disabilities and psychological conditions affecting the central nervous system.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      conditions: [
        'Depression & Anxiety',
        'Neurological Disorders',
        'Learning Disabilities',
        'Phobias & Panic Attacks',
        'Mood Disorders',
        'Stress Management'
      ],
      duration: '4-15 months',
      successRate: '85%'
    },
    {
      icon: FaChild,
      title: 'Chronic Lifestyle Disorders',
      description: 'Comprehensive treatment for lifestyle-related diseases including diabetes, hypertension, and obesity.',
      image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      conditions: [
        'Diabetes Mellitus',
        'Hypertension',
        'Obesity & Weight Management',
        'Thyroid Disorders',
        'High Cholesterol',
        'Metabolic Disorders'
      ],
      duration: '6-18 months',
      successRate: '91%'
    }
  ]

  const additionalServices = [
    {
      icon: FaBone,
      title: 'Rheumatic & Joint Complaints',
      description: 'Natural treatment for rheumatoid arthritis and autoimmune joint disorders without steroids or synthetic drugs.'
    },
    {
      icon: FaEye,
      title: 'Allergic Disorders',
      description: 'Comprehensive treatment for respiratory allergies, skin allergies, food allergies, and medicine allergies.'
    },
    {
      icon: FaLeaf,
      title: 'Geriatric Care',
      description: 'Safe and effective homeopathic treatment for elderly patients with chronic and degenerative diseases.'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Comprehensive
              <span className="text-primary-600 block">Homeopathic Services</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We offer a complete range of homeopathic treatments tailored to address your specific 
              health needs with natural, effective, and safe solutions for the whole family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Book Consultation
              </Link>
              <a href="tel:+1234567890" className="btn-secondary">
                Call for Emergency Care
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Specialized Treatment Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each service is designed with your specific needs in mind, providing personalized care 
              for optimal health outcomes.
            </p>
          </div>

          <div className="space-y-16">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={`relative ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="relative">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={600}
                        height={400}
                        className="rounded-2xl shadow-xl object-cover"
                      />
                      
                      {/* Stats Overlay */}
                      <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary-600">{service.successRate}</div>
                          <div className="text-sm text-gray-600">Success Rate</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`space-y-6 ${!isEven ? 'lg:col-start-1' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                        <IconComponent className="text-2xl text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                          {service.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                          <div className="flex items-center space-x-1">
                            <FaClock className="text-primary-600" />
                            <span>Duration: {service.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <FaCheckCircle className="text-green-500" />
                            <span>{service.successRate} Success Rate</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-lg text-gray-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Conditions Treated */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Conditions We Treat:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.conditions.map((condition, conditionIndex) => (
                          <div key={conditionIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                            <span className="text-gray-600">{condition}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 space-y-3">
                      <Link 
                        href={getServiceUrl(service.title)}
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold group"
                      >
                        Learn More About {service.title}
                        <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <div>
                        <Link 
                          href="/contact"
                          className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                        >
                          Book Consultation
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Additional Specialized Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We also provide specialized treatments for specific conditions and wellness programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-2xl text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Treatment Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a systematic approach to ensure the best possible outcomes for every patient.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Initial Consultation',
                description: 'Comprehensive health assessment and detailed case history taking.'
              },
              {
                step: '02',
                title: 'Remedy Selection',
                description: 'Careful selection of the most appropriate homeopathic remedy for you.'
              },
              {
                step: '03',
                title: 'Treatment Plan',
                description: 'Personalized treatment plan with clear timelines and expectations.'
              },
              {
                step: '04',
                title: 'Follow-up Care',
                description: 'Regular monitoring and adjustments to ensure optimal progress.'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Complete Range of Specialized Treatments
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach covers all major health conditions with proven homeopathic remedies, 
              ensuring safe and effective treatment for patients of all ages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Detailed Service Cards */}
            {[
              {
                title: 'Allergic Disorders',
                conditions: ['Respiratory Allergies', 'Allergic Rhinitis', 'Allergic Bronchitis', 'Skin Allergies', 'Food Allergies', 'Medicine Allergies'],
                description: 'Comprehensive treatment for all types of allergic reactions with natural remedies.'
              },
              {
                title: 'Rheumatic & Joint Complaints',
                conditions: ['Rheumatoid Arthritis', 'Joint Pain & Swelling', 'Autoimmune Disorders', 'Chronic Inflammation', 'Joint Stiffness', 'Mobility Issues'],
                description: 'Natural treatment for arthritis and joint disorders without steroids or synthetic drugs.'
              },
              {
                title: 'Hormonal Imbalances',
                conditions: ['Thyroid Disorders', 'Adrenal Issues', 'Pancreatic Problems', 'Reproductive Hormones', 'Metabolic Disorders', 'Endocrine System'],
                description: 'Holistic approach to hormonal balance using constitutional homeopathic remedies.'
              },
              {
                title: 'Learning Disabilities',
                conditions: ['ADHD & ADD', 'Dyslexia', 'Autism Spectrum', 'Concentration Issues', 'Memory Problems', 'Academic Performance'],
                description: 'Natural, effective treatment for learning difficulties with improved confidence and performance.'
              },
              {
                title: 'Phobias & Anxiety',
                conditions: ['Specific Phobias', 'Social Anxiety', 'Panic Disorders', 'Fear & Worry', 'Confidence Issues', 'Stress Management'],
                description: 'Safe and effective treatment for various phobias and anxiety disorders without dependency.'
              },
              {
                title: 'Geriatric Care',
                conditions: ['Age-related Disorders', 'Chronic Diseases', 'Degenerative Conditions', 'Sensory Impairments', 'Mental Health', 'Lifestyle Support'],
                description: 'Specialized care for elderly patients with safe, non-toxic homeopathic medicines.'
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 text-sm">Conditions Treated:</h4>
                  <ul className="grid grid-cols-1 gap-1">
                    {service.conditions.map((condition, conditionIndex) => (
                      <li key={conditionIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></div>
                        {condition}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Approach */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Constitutional Approach
              </h2>
              <p className="text-lg text-gray-600">
                We believe in treating the person as a whole, not just the symptoms. Our constitutional 
                homeopathic approach ensures long-lasting results and improved overall health.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Why Choose Our Treatment?</h3>
                <ul className="space-y-4">
                  {[
                    'Individualized treatment based on complete case history',
                    'Safe, natural remedies with no side effects',
                    'Constitutional approach for long-term healing',
                    'Experienced homeopathic practitioners',
                    'Evidence-based treatment protocols',
                    'Comprehensive follow-up care and monitoring'
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FaCheckCircle className="text-primary-600 text-sm" />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Treatment Benefits</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Natural Healing</h4>
                    <p className="text-gray-600 text-sm">Stimulates body's natural healing mechanisms without harmful chemicals.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Root Cause Treatment</h4>
                    <p className="text-gray-600 text-sm">Addresses underlying causes rather than just symptom management.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Holistic Wellness</h4>
                    <p className="text-gray-600 text-sm">Improves overall health including mental, emotional, and physical well-being.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Long-lasting Results</h4>
                    <p className="text-gray-600 text-sm">Provides permanent solutions with reduced recurrence of health issues.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Begin Your Healing Journey?
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Take the first step towards better health with our personalized homeopathic treatments. 
              Book your consultation today and experience the power of natural healing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white hover:bg-gray-50 text-primary-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200"
              >
                Schedule Free Consultation
              </Link>
              <a 
                href="tel:+1234567890"
                className="bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg border-2 border-white transition-colors duration-200"
              >
                Call Now: (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
