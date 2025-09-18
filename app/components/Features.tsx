import { FaLeaf, FaUserMd, FaHeart, FaShieldAlt, FaClock, FaAward } from 'react-icons/fa'

const Features = () => {
  const features = [
    {
      icon: FaLeaf,
      title: 'Natural Remedies',
      description: 'Pure, natural homeopathic medicines derived from plants, minerals, and organic sources for safe healing.',
    },
    {
      icon: FaUserMd,
      title: 'Expert Practitioners',
      description: 'Certified homeopathic doctors with years of experience in treating various health conditions.',
    },
    {
      icon: FaHeart,
      title: 'Holistic Approach',
      description: 'We treat the whole person, not just symptoms, focusing on mental, emotional, and physical well-being.',
    },
    {
      icon: FaShieldAlt,
      title: 'No Side Effects',
      description: 'Gentle, safe treatments with no harmful side effects, suitable for all ages including children and elderly.',
    },
    {
      icon: FaClock,
      title: 'Long-lasting Results',
      description: 'Address root causes for permanent healing rather than temporary symptom relief.',
    },
    {
      icon: FaAward,
      title: 'Proven Success',
      description: 'Thousands of satisfied patients with successful treatment outcomes over 15+ years of practice.',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Our
            <span className="text-primary-600"> Homeopathy Clinic?</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We combine traditional homeopathic wisdom with modern healthcare practices 
            to provide you with the most effective natural healing solutions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                  <IconComponent className="text-2xl text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-primary-600 font-medium">
            <span>Ready to experience natural healing?</span>
            <div className="w-2 h-2 bg-primary-600 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
