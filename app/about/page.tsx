import type { Metadata } from 'next'
import Image from 'next/image'
import { FaAward, FaGraduationCap, FaUsers, FaClock, FaHeart, FaLeaf } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about our experienced homeopathic practitioners, our clinic\'s history, and our commitment to natural healing and holistic wellness.',
}

const About = () => {
  const achievements = [
    { icon: FaUsers, number: '500+', label: 'Patients Treated' },
    { icon: FaClock, number: '15+', label: 'Years Experience' },
    { icon: FaAward, number: '95%', label: 'Success Rate' },
    { icon: FaHeart, number: '100%', label: 'Patient Satisfaction' },
  ]

  const qualifications = [
    'MD in Homeopathic Medicine',
    'Certified by National Board of Homeopathy',
    'Member of International Homeopathic Association',
    'Specialized in Chronic Disease Management',
    'Advanced Training in Pediatric Homeopathy',
    'Continuing Education in Modern Homeopathic Techniques'
  ]

  const values = [
    {
      icon: FaHeart,
      title: 'Patient-Centered Care',
      description: 'Every treatment plan is tailored to the individual needs, lifestyle, and health goals of our patients.'
    },
    {
      icon: FaLeaf,
      title: 'Natural Healing',
      description: 'We believe in the body\'s natural ability to heal itself with the right homeopathic support.'
    },
    {
      icon: FaGraduationCap,
      title: 'Continuous Learning',
      description: 'We stay updated with the latest research and techniques in homeopathic medicine.'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  About Our
                  <span className="text-primary-600 block">Healing Practice</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  With over 15 years of dedicated service in homeopathic medicine, we have been 
                  committed to providing natural, effective, and compassionate healthcare to our community.
                </p>
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon
                  return (
                    <div key={index} className="text-center p-4 bg-white rounded-xl shadow-lg">
                      <IconComponent className="text-3xl text-primary-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900">{achievement.number}</div>
                      <div className="text-sm text-gray-600">{achievement.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Dr. Sarah Smith - Homeopathic Practitioner"
                  width={600}
                  height={700}
                  className="rounded-2xl shadow-2xl object-cover"
                />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg z-20 max-w-xs">
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900">Dr. Sarah Smith</div>
                  <div className="text-primary-600 font-medium">Chief Homeopathic Practitioner</div>
                  <div className="text-sm text-gray-600 mt-2">Remedy Excel - MD Homeopathy, 15+ Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor's Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our Founder's
                <span className="text-primary-600"> Journey</span>
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Dr. Sarah Smith's journey into homeopathy began with a personal experience of healing. 
                After witnessing the transformative power of natural medicine in her own family, she 
                dedicated her life to mastering this gentle yet powerful healing art.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Education & Training</h3>
                  <ul className="space-y-3">
                    {qualifications.map((qualification, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-3 flex-shrink-0"></div>
                        <span className="text-gray-600">{qualification}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    To provide compassionate, personalized homeopathic care that addresses not just 
                    symptoms, but the whole person - mind, body, and spirit.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    We believe that true healing comes from supporting the body's natural ability 
                    to restore balance and health, using the gentlest and most effective methods possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Core
              <span className="text-primary-600"> Values</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              These principles guide everything we do and ensure that every patient receives 
              the highest quality of care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div
                  key={index}
                  className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="text-2xl text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Clinic Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Natural Healing Clinic Interior"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Our Healing
                <span className="text-primary-600"> Environment</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Our clinic is designed to be a peaceful sanctuary where healing can begin the moment 
                you walk through our doors. Every aspect of our space is thoughtfully created to 
                promote relaxation and wellness.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Comfortable Consultation Rooms</h4>
                    <p className="text-gray-600">Private, peaceful spaces designed for thorough consultations.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Natural Lighting & Ventilation</h4>
                    <p className="text-gray-600">Abundant natural light and fresh air circulation for a healthy environment.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Pharmacy with Quality Remedies</h4>
                    <p className="text-gray-600">On-site pharmacy stocked with high-quality homeopathic medicines.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Accessible & Convenient</h4>
                    <p className="text-gray-600">Easy parking and wheelchair accessible facilities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
