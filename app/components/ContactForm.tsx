'use client'

import { useState, useEffect } from 'react'
import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaCommentDots, FaPaperPlane, FaClock, FaStethoscope } from 'react-icons/fa'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    appointmentDate: '',
    appointmentTime: '',
    consultationType: '',
    message: '',
    urgency: 'normal'
  })

  const [availableSlots, setAvailableSlots] = useState<any[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Get available time slots when date changes
  useEffect(() => {
    const fetchAvailableSlots = async () => {
      if (formData.appointmentDate) {
        try {
          const response = await fetch(`/api/availability?date=${formData.appointmentDate}`)
          if (response.ok) {
            const slots = await response.json()
            setAvailableSlots(slots)
            // Reset selected time if it's no longer available
            if (formData.appointmentTime && !slots.find((slot: any) => slot.startTime === formData.appointmentTime)) {
              setFormData(prev => ({ ...prev, appointmentTime: '' }))
            }
          }
        } catch (error) {
          console.error('Error fetching available slots:', error)
          setAvailableSlots([])
        }
      } else {
        setAvailableSlots([])
      }
    }

    fetchAvailableSlots()
  }, [formData.appointmentDate])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          patientName: formData.name,
          patientEmail: formData.email,
          patientPhone: formData.phone,
          appointmentDate: formData.appointmentDate,
          appointmentTime: formData.appointmentTime,
          consultationType: formData.consultationType,
          notes: formData.message
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          appointmentDate: '',
          appointmentTime: '',
          consultationType: '',
          message: '',
          urgency: 'normal'
        })
      } else {
        const error = await response.json()
        alert(`Failed to book appointment: ${error.error}`)
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error booking appointment:', error)
      alert('Failed to book appointment. Please try again.')
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Get minimum date (today)
  const getMinDate = () => {
    const today = new Date()
    return today.toISOString().split('T')[0]
  }

  // Get maximum date (3 months from today)
  const getMaxDate = () => {
    const maxDate = new Date()
    maxDate.setMonth(maxDate.getMonth() + 3)
    return maxDate.toISOString().split('T')[0]
  }

  if (submitStatus === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <FaPaperPlane className="text-2xl text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Appointment Booked Successfully!</h3>
        <p className="text-green-700 mb-4">
          Your appointment has been confirmed. You will receive an email confirmation shortly with all the details.
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="text-green-600 hover:text-green-700 font-medium"
        >
          Book Another Appointment
        </button>
      </div>
    )
  }

  return (
    <div id="contact-form">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name *
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your full name"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address *
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your email address"
              />
            </div>
          </div>
        </div>

        {/* Contact and Consultation Type */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number *
            </label>
            <div className="relative">
              <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          <div>
            <label htmlFor="consultationType" className="block text-sm font-semibold text-gray-700 mb-2">
              <FaStethoscope className="inline mr-2" />
              Consultation Type *
            </label>
            <select
              id="consultationType"
              name="consultationType"
              value={formData.consultationType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white"
            >
              <option value="">Select consultation type</option>
              <option value="online">Online Consultation (Google Meet)</option>
              <option value="offline">In-Person Consultation</option>
            </select>
            <p className="text-sm text-gray-500 mt-1">
              Current selection: {formData.consultationType === 'online' ? 'Online Consultation' : formData.consultationType === 'offline' ? 'In-Person Consultation' : 'Not selected'}
            </p>
          </div>
        </div>

        {/* Appointment Date and Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="appointmentDate" className="block text-sm font-semibold text-gray-700 mb-2">
              <FaCalendarAlt className="inline mr-2" />
              Preferred Date *
            </label>
            <div className="relative">
              <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="date"
                id="appointmentDate"
                name="appointmentDate"
                value={formData.appointmentDate}
                onChange={handleChange}
                required
                min={getMinDate()}
                max={getMaxDate()}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          <div>
            <label htmlFor="appointmentTime" className="block text-sm font-semibold text-gray-700 mb-2">
              <FaClock className="inline mr-2" />
              Preferred Time *
            </label>
            <select
              id="appointmentTime"
              name="appointmentTime"
              value={formData.appointmentTime}
              onChange={handleChange}
              required
              disabled={!formData.appointmentDate || availableSlots.length === 0}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 disabled:bg-gray-100"
            >
              <option value="">
                {!formData.appointmentDate 
                  ? 'Select a date first' 
                  : availableSlots.length === 0 
                    ? 'No available slots' 
                    : 'Select a time slot'
                }
              </option>
              {availableSlots.map((slot) => (
                <option key={slot.id} value={slot.startTime}>
                  {slot.startTime} - {slot.endTime}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Urgency Level */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Urgency Level
          </label>
          <div className="flex space-x-4">
            {[
              { value: 'normal', label: 'Normal', color: 'bg-green-100 text-green-800' },
              { value: 'urgent', label: 'Urgent', color: 'bg-yellow-100 text-yellow-800' },
              { value: 'emergency', label: 'Emergency', color: 'bg-red-100 text-red-800' }
            ].map((option) => (
              <label key={option.value} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="urgency"
                  value={option.value}
                  checked={formData.urgency === option.value}
                  onChange={handleChange}
                  className="mr-2 text-primary-600 focus:ring-primary-500"
                />
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${option.color}`}>
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Message / Health Concerns
          </label>
          <div className="relative">
            <FaCommentDots className="absolute left-3 top-3 text-gray-400" />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-vertical"
              placeholder="Please describe your health concerns or any specific questions you have..."
            ></textarea>
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">
            <strong>Privacy Notice:</strong> Your information is confidential and will only be used to contact you 
            regarding your appointment. We comply with all healthcare privacy regulations.
          </p>
        </div>

        {/* Consultation Type Information */}
        {formData.consultationType && (
          <div className="bg-green-50 rounded-lg p-6 border border-green-200">
            <h3 className="text-lg font-semibold text-green-900 mb-3">
              {formData.consultationType === 'online' ? 'Online Consultation Details' : 'In-Person Consultation Details'}
            </h3>
            {formData.consultationType === 'online' ? (
              <ul className="space-y-2 text-sm text-green-800">
                <li>• You'll receive a Google Meet link and unique password via email</li>
                <li>• Please ensure you have a stable internet connection</li>
                <li>• Join the meeting 5 minutes before your scheduled time</li>
                <li>• The password can only be used once for security</li>
              </ul>
            ) : (
              <ul className="space-y-2 text-sm text-green-800">
                <li>• You'll receive clinic address and directions via email</li>
                <li>• Please arrive 10 minutes before your scheduled time</li>
                <li>• Bring any relevant medical reports or documents</li>
                <li>• Our clinic is located at: 123 Homeopathy Lane, Wellness City, 54321</li>
              </ul>
            )}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting || !formData.appointmentDate || !formData.appointmentTime || !formData.consultationType}
          className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-200 ${
            isSubmitting || !formData.appointmentDate || !formData.appointmentTime || !formData.consultationType
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-primary-600 hover:bg-primary-700 hover:transform hover:scale-[1.02]'
          }`}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Booking Appointment...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-2">
              <FaPaperPlane />
              <span>Book Appointment</span>
            </div>
          )}
        </button>

        {(!formData.consultationType || !formData.appointmentDate || !formData.appointmentTime) && (
          <p className="text-sm text-gray-500 text-center mt-2">
            Please fill in all required fields to book your appointment
          </p>
        )}

        {/* Contact Alternative */}
        <div className="text-center pt-4 border-t border-gray-200">
          <p className="text-gray-600 mb-2">Prefer to call directly?</p>
          <a
            href="tel:+15551234567"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            <FaPhone className="mr-2" />
            (555) 123-4567
          </a>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
