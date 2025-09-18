import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight, FaChild, FaFemale, FaBrain, FaHeartbeat, FaAllergies, FaStethoscope } from 'react-icons/fa'

const getServiceUrl = (title: string) => {
  const urlMap: { [key: string]: string } = {
    'Respiratory Ailments': '/services/respiratory-ailments',
    'Gastro-intestinal Disorders': '/services/gastrointestinal-disorders',
    'Kidney & Urogenital Disorders': '/services/kidney-urogenital-disorders',
    'Female Complaints': '/services/female-complaints',
    'Psychological Disorders': '/services/psychological-disorders',
    'Lifestyle Disorders': '/services/lifestyle-disorders'
  }
  return urlMap[title] || '/services'
}

const Services = () => {
  const services = [
    {
      icon: FaHeartbeat,
      title: 'Respiratory Ailments',
      description: 'Evidence-based homeopathic treatment for respiratory conditions with safe remedies.',
      image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      features: ['Asthma & Bronchitis', 'Chronic Cough', 'Breathing Difficulties']
    },
    {
      icon: FaStethoscope,
      title: 'Gastro-intestinal Disorders',
      description: 'Comprehensive treatment for digestive disorders eliminating root causes.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      features: ['IBS & Gastric Ulcers', 'GERD Treatment', 'Digestive Problems']
    },
    {
      icon: FaFemale,
      title: 'Female Complaints',
      description: 'Specialized treatment for women\'s health including infertility and menstrual disorders.',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      features: ['Female Infertility', 'Menstrual Issues', 'PCOS & Fibroids']
    },
    {
      icon: FaBrain,
      title: 'Psychological Disorders',
      description: 'Natural approaches to mental health conditions without side effects.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      features: ['Depression & Anxiety', 'Learning Disabilities', 'Phobias Treatment']
    },
    {
      icon: FaAllergies,
      title: 'Kidney & Urogenital Disorders',
      description: 'Risk-free treatment for kidney stones and urogenital conditions.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      features: ['Kidney Stones', 'BPH Treatment', 'Recurrent UTI']
    },
    {
      icon: FaChild,
      title: 'Lifestyle Disorders',
      description: 'Comprehensive treatment for diabetes, hypertension, and obesity.',
      image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      features: ['Diabetes Mellitus', 'Hypertension', 'Weight Management']
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Specialized
            <span className="text-primary-600"> Treatment Services</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We offer comprehensive homeopathic treatments tailored to address your specific health needs 
            with natural, effective solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 rounded-xl flex items-center justify-center">
                    <IconComponent className="text-primary-600 text-xl" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link 
                    href={getServiceUrl(service.title)}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group-hover:translate-x-1 transition-all duration-200"
                  >
                    Learn More
                    <FaArrowRight className="ml-2 text-sm" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services
