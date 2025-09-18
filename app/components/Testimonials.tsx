'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Mother of Two',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'Dr. Smith\'s homeopathic treatment completely transformed my daughter\'s health. Her chronic allergies are now under control, and she\'s much happier. The natural approach gave us peace of mind.',
      rating: 5,
      condition: 'Pediatric Allergies'
    },
    {
      name: 'Michael Chen',
      role: 'Business Executive',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'After years of struggling with chronic stress and anxiety, the homeopathic treatment here has been life-changing. I feel more balanced and energetic than I have in years.',
      rating: 5,
      condition: 'Stress & Anxiety'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Teacher',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'The personalized care and attention to detail is remarkable. My arthritis pain has significantly reduced, and I can enjoy my daily activities again without relying on painkillers.',
      rating: 5,
      condition: 'Arthritis Management'
    },
    {
      name: 'David Thompson',
      role: 'Retiree',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'I was skeptical about homeopathy at first, but the results speak for themselves. My blood pressure is now stable, and I feel more energetic. The doctors here truly care about their patients.',
      rating: 5,
      condition: 'Hypertension'
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentData = testimonials[currentTestimonial]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Patients
            <span className="text-primary-600"> Say About Us</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Real stories from real people who have experienced the healing power of homeopathy.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-3xl p-8 lg:p-12 shadow-xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary-100 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>
            
            {/* Quote Icon */}
            <FaQuoteLeft className="text-4xl text-primary-600 mb-6 opacity-20" />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(currentData.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-lg" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed italic">
                  "{currentData.content}"
                </blockquote>
                
                {/* Patient Info */}
                <div className="space-y-2">
                  <div className="font-bold text-gray-900 text-lg">{currentData.name}</div>
                  <div className="text-gray-600">{currentData.role}</div>
                  <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                    Treated for: {currentData.condition}
                  </div>
                </div>
              </div>
              
              {/* Patient Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-2xl">
                    <Image
                      src={currentData.image}
                      alt={currentData.name}
                      width={160}
                      height={160}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                    <FaStar className="text-white text-sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-white hover:bg-primary-600 hover:text-white text-gray-600 rounded-full shadow-lg transition-all duration-200"
            >
              <FaChevronLeft />
            </button>
            
            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentTestimonial ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-3 bg-white hover:bg-primary-600 hover:text-white text-gray-600 rounded-full shadow-lg transition-all duration-200"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">500+</div>
            <div className="text-gray-600">Happy Patients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">95%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">4.9</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
