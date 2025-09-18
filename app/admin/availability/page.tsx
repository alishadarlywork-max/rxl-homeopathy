import Link from 'next/link'
import { FaArrowLeft, FaSave, FaPlus, FaTrash, FaClock } from 'react-icons/fa'
import { getDoctorAvailability, updateDoctorAvailability } from '../../../lib/appointment-data'
import AvailabilityManager from '../../components/AvailabilityManager'

const AvailabilityPage = () => {
  const availability = getDoctorAvailability()

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container-custom py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                href="/admin"
                className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors"
              >
                <FaArrowLeft className="mr-2" />
                Back to Admin
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-2xl font-bold text-gray-900">Manage Availability</h1>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center text-sm text-gray-600">
                <FaClock className="mr-2" />
                Last updated: {new Date(availability.lastUpdated).toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Doctor: {availability.doctorName}
            </h2>
            <p className="text-gray-600">
              Manage your weekly schedule and available time slots. Patients can only book appointments during your available times.
            </p>
          </div>

          <AvailabilityManager initialAvailability={availability} />
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-dashed border-gray-300">
            <div className="text-center">
              <FaPlus className="mx-auto text-3xl text-gray-400 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Add Time Slot</h3>
              <p className="text-gray-600 text-sm">Add new available time slots to any day</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-dashed border-gray-300">
            <div className="text-center">
              <FaClock className="mx-auto text-3xl text-gray-400 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Set Working Days</h3>
              <p className="text-gray-600 text-sm">Enable or disable working days</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-dashed border-gray-300">
            <div className="text-center">
              <FaSave className="mx-auto text-3xl text-gray-400 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Save Changes</h3>
              <p className="text-gray-600 text-sm">All changes are automatically saved</p>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">How to Manage Availability</h3>
          <div className="space-y-3 text-sm text-blue-800">
            <div className="flex items-start">
              <span className="font-semibold mr-2">1.</span>
              <span>Toggle "Working Day" to enable or disable entire days</span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold mr-2">2.</span>
              <span>Add time slots by clicking "Add Time Slot" for each day</span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold mr-2">3.</span>
              <span>Remove time slots by clicking the trash icon</span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold mr-2">4.</span>
              <span>Time slots are automatically saved when you make changes</span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold mr-2">5.</span>
              <span>Patients can only book appointments during your available time slots</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AvailabilityPage
