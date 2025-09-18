'use client'

import { useState, useEffect } from 'react'
import { FaCalendarAlt, FaClock, FaUser, FaPhone, FaEnvelope, FaStethoscope } from 'react-icons/fa'

interface FormData {
  patientName: string
  patientEmail: string
  patientPhone: string
  appointmentDate: string
  appointmentTime: string
  consultationType: 'online' | 'offline'
  notes: string
}

const AppointmentBooking = () => {
  const [formData, setFormData] = useState<FormData>({
    patientName: '',
    patientEmail: '',
    patientPhone: '',
    appointmentDate: '',
    appointmentTime: '',
    consultationType: '' as 'online' | 'offline',
    notes: ''
  })

  const [availableSlots, setAvailableSlots] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        const error = await response.json()
        alert(`Failed to book appointment: ${error.error}`)
      }
    } catch (error) {
      console.error('Error booking appointment:', error)
      alert('Failed to book appointment. Please try again.')
    } finally {
      setLoading(false)
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

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <FaStethoscope className="text-green-600 text-3xl" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Appointment Booked Successfully!</h2>
        <p className="text-lg text-gray-600 mb-6">
          Your appointment has been confirmed. You will receive an email confirmation shortly with all the details.
        </p>
        <div className="bg-green-50 rounded-lg p-6 max-w-md mx-auto">
          <h3 className="font-semibold text-green-800 mb-2">What happens next?</h3>
          <ul className="text-sm text-green-700 space-y-1 text-left">
            <li>• Check your email for confirmation details</li>
            <li>• {formData.consultationType === 'online' ? 'Google Meet link and password will be included' : 'Clinic address and directions will be provided'}</li>
            <li>• Dr. Sarah Smith will be notified of your appointment</li>
            <li>• Please arrive on time for your consultation</li>
          </ul>
        </div>
        <button
          onClick={() => {
            setSubmitted(false)
            setFormData({
              patientName: '',
              patientEmail: '',
              patientPhone: '',
              appointmentDate: '',
              appointmentTime: '',
              consultationType: 'online',
              notes: ''
            })
          }}
          className="mt-6 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Book Another Appointment
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Book Your Consultation</h2>
        <p className="text-gray-600">Fill out the form below to schedule your appointment</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="patientName" className="block text-sm font-semibold text-gray-700 mb-2">
              <FaUser className="inline mr-2" />
              Full Name *
            </label>
            <input
              type="text"
              id="patientName"
              name="patientName"
              value={formData.patientName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="patientEmail" className="block text-sm font-semibold text-gray-700 mb-2">
              <FaEnvelope className="inline mr-2" />
              Email Address *
            </label>
            <input
              type="email"
              id="patientEmail"
              name="patientEmail"
              value={formData.patientEmail}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <label htmlFor="patientPhone" className="block text-sm font-semibold text-gray-700 mb-2">
              <FaPhone className="inline mr-2" />
              Phone Number *
            </label>
            <input
              type="tel"
              id="patientPhone"
              name="patientPhone"
              value={formData.patientPhone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Enter your phone number"
            />
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
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
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

        {/* Appointment Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="appointmentDate" className="block text-sm font-semibold text-gray-700 mb-2">
              <FaCalendarAlt className="inline mr-2" />
              Preferred Date *
            </label>
            <input
              type="date"
              id="appointmentDate"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleInputChange}
              required
              min={getMinDate()}
              max={getMaxDate()}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
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
              onChange={handleInputChange}
              required
              disabled={!formData.appointmentDate || availableSlots.length === 0}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-100"
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

        {/* Notes */}
        <div>
          <label htmlFor="notes" className="block text-sm font-semibold text-gray-700 mb-2">
            Additional Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-vertical"
            placeholder="Any specific concerns or information you'd like to share with Dr. Sarah Smith..."
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={loading || !formData.appointmentDate || !formData.appointmentTime || !formData.consultationType}
            className="bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 disabled:cursor-not-allowed"
          >
            {loading ? 'Booking Appointment...' : 'Book Appointment'}
          </button>
          {(!formData.consultationType || !formData.appointmentDate || !formData.appointmentTime) && (
            <p className="text-sm text-gray-500 mt-2">
              Please fill in all required fields to book your appointment
            </p>
          )}
        </div>
      </form>

        {/* Consultation Type Information */}
        {formData.consultationType && (
          <div className="mt-6 bg-green-50 rounded-lg p-6 border border-green-200">
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

        {/* Information */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Important Information</h3>
          <ul className="space-y-2 text-sm text-blue-800">
            <li>• Appointments are confirmed via email within minutes</li>
            <li>• For online consultations, Google Meet link and password will be provided</li>
            <li>• For in-person consultations, clinic address and directions will be provided</li>
            <li>• Please arrive 10 minutes before your scheduled time</li>
            <li>• If you need to reschedule, please contact us at least 24 hours in advance</li>
          </ul>
        </div>
    </div>
  )
}

export default AppointmentBooking
