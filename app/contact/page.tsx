import type { Metadata } from 'next'
import ContactForm from '../components/ContactForm'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCalendarAlt, FaWhatsapp } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Natural Healing Homeopathy Clinic. Book your consultation, find our location, and contact our expert homeopathic practitioners.',
}

const Contact = () => {
  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone Number',
      details: ['(555) 123-4567', '(555) 123-4568'],
      action: 'tel:+15551234567'
    },
    {
      icon: FaEnvelope,
      title: 'Email Address',
      details: ['info@naturalhealing.com', 'appointments@naturalhealing.com'],
      action: 'mailto:info@naturalhealing.com'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Clinic Address',
      details: ['123 Wellness Street', 'Health City, HC 12345'],
      action: 'https://maps.google.com'
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      details: ['+1 (555) 123-4567', 'Quick consultation'],
      action: 'https://wa.me/15551234567'
    }
  ]

  const clinicHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: '10:00 AM - 2:00 PM' },
    { day: 'Emergency', hours: '24/7 On Call' }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Get In Touch
              <span className="text-primary-600 block">With Our Experts</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Ready to start your natural healing journey? Book your appointment online or contact us 
              to learn more about our homeopathic treatments and consultation options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+15551234567" className="btn-primary">
                <FaPhone className="mr-2" />
                Call Now
              </a>
              <a href="#contact-form" className="btn-secondary">
                <FaCalendarAlt className="mr-2" />
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-2xl text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                  <a
                    href={info.action}
                    className="inline-block mt-3 text-primary-600 hover:text-primary-700 font-medium transition-colors"
                  >
                    Contact Now →
                  </a>
                </div>
              )
            })}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Book Your Appointment
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Fill out the form below to book your appointment instantly. You'll receive email 
                  confirmation with all the details. Choose between online or in-person consultation.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Clinic Information */}
            <div className="space-y-8">
              {/* Clinic Hours */}
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex items-center space-x-3 mb-6">
                  <FaClock className="text-2xl text-primary-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Clinic Hours</h3>
                </div>
                <div className="space-y-4">
                  {clinicHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                      <span className="font-medium text-gray-900">{schedule.day}</span>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
                <h3 className="text-lg font-bold text-red-800 mb-3">Emergency Contact</h3>
                <p className="text-red-700 mb-4">
                  For urgent health concerns outside clinic hours, please call our emergency line:
                </p>
                <a 
                  href="tel:+15551234567"
                  className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  <FaPhone className="mr-2" />
                  Emergency: (555) 123-4567
                </a>
              </div>

              {/* What to Expect */}
              <div className="bg-primary-50 p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-gray-900 mb-4">What to Expect</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Free 15-minute initial consultation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Detailed health history discussion</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Personalized treatment plan</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Follow-up care and support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Find Our Clinic
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're conveniently located in the heart of Health City with easy access to public 
              transportation and ample parking.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map Placeholder */}
            <div className="lg:col-span-2">
              <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-center">
                  <FaMapMarkerAlt className="text-4xl text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Interactive Map</p>
                  <p className="text-sm text-gray-500">123 Wellness Street, Health City, HC 12345</p>
                </div>
              </div>
            </div>

            {/* Directions */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Getting Here</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">By Car</h4>
                    <p className="text-gray-600 text-sm">Free parking available in our clinic lot</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">By Public Transport</h4>
                    <p className="text-gray-600 text-sm">Bus routes 12, 34, 56 stop nearby</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Accessibility</h4>
                    <p className="text-gray-600 text-sm">Wheelchair accessible entrance and facilities</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="font-bold text-gray-900 mb-3">Nearby Landmarks</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• City General Hospital (0.5 miles)</li>
                  <li>• Wellness Shopping Center (0.2 miles)</li>
                  <li>• Central Park (0.3 miles)</li>
                  <li>• Metro Station (0.4 miles)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Common questions about appointments, treatments, and our clinic policies.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Do I need a referral to book an appointment?",
                answer: "No referral is needed. You can book directly with us for homeopathic consultations."
              },
              {
                question: "What should I bring to my first appointment?",
                answer: "Please bring any recent medical reports, current medications list, and your health insurance card."
              },
              {
                question: "How long does a typical consultation last?",
                answer: "Initial consultations typically last 60-90 minutes, while follow-up appointments are usually 30-45 minutes."
              },
              {
                question: "Do you accept health insurance?",
                answer: "We accept most major health insurance plans. Please contact us to verify your specific coverage."
              },
              {
                question: "Can I get homeopathic treatment alongside conventional medicine?",
                answer: "Yes, homeopathy can complement conventional treatments. We'll coordinate with your other healthcare providers."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
