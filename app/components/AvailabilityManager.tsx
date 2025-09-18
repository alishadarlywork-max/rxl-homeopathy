'use client'

import { useState, useEffect } from 'react'
import { FaPlus, FaTrash, FaSave, FaClock } from 'react-icons/fa'
import { DoctorAvailability, TimeSlot } from '@/lib/appointment-data'

interface AvailabilityManagerProps {
  initialAvailability: DoctorAvailability
}

const AvailabilityManager = ({ initialAvailability }: AvailabilityManagerProps) => {
  const [availability, setAvailability] = useState<DoctorAvailability>(initialAvailability)
  const [saving, setSaving] = useState(false)

  const saveAvailability = async () => {
    setSaving(true)
    try {
      const response = await fetch('/api/availability', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(availability),
      })

      if (response.ok) {
        alert('Availability updated successfully!')
      } else {
        throw new Error('Failed to save availability')
      }
    } catch (error) {
      console.error('Error saving availability:', error)
      alert('Failed to save availability. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  const toggleWorkingDay = (dayIndex: number) => {
    const newAvailability = { ...availability }
    newAvailability.schedule[dayIndex].isWorking = !newAvailability.schedule[dayIndex].isWorking
    
    // If disabling working day, clear all time slots
    if (!newAvailability.schedule[dayIndex].isWorking) {
      newAvailability.schedule[dayIndex].timeSlots = []
    }
    
    setAvailability(newAvailability)
    saveAvailability()
  }

  const addTimeSlot = (dayIndex: number) => {
    const newAvailability = { ...availability }
    const day = newAvailability.schedule[dayIndex]
    
    // Generate new ID
    const newId = Math.max(...day.timeSlots.map(ts => parseInt(ts.id)), 0) + 1
    
    // Add new time slot (default to next available hour)
    const lastSlot = day.timeSlots[day.timeSlots.length - 1]
    let startTime = '09:00'
    
    if (lastSlot) {
      const [hours, minutes] = lastSlot.endTime.split(':').map(Number)
      const nextHour = hours + 1
      startTime = `${nextHour.toString().padStart(2, '0')}:00`
    }
    
    const endTime = `${(parseInt(startTime.split(':')[0]) + 1).toString().padStart(2, '0')}:00`
    
    const newTimeSlot: TimeSlot = {
      id: newId.toString(),
      startTime,
      endTime,
      isAvailable: true
    }
    
    day.timeSlots.push(newTimeSlot)
    setAvailability(newAvailability)
    saveAvailability()
  }

  const removeTimeSlot = (dayIndex: number, slotIndex: number) => {
    const newAvailability = { ...availability }
    newAvailability.schedule[dayIndex].timeSlots.splice(slotIndex, 1)
    setAvailability(newAvailability)
    saveAvailability()
  }

  const updateTimeSlot = (dayIndex: number, slotIndex: number, field: 'startTime' | 'endTime', value: string) => {
    const newAvailability = { ...availability }
    newAvailability.schedule[dayIndex].timeSlots[slotIndex][field] = value
    setAvailability(newAvailability)
    saveAvailability()
  }

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':')
    const hour = parseInt(hours)
    const ampm = hour >= 12 ? 'PM' : 'AM'
    const displayHour = hour % 12 || 12
    return `${displayHour}:${minutes} ${ampm}`
  }

  return (
    <div className="space-y-6">
      {availability.schedule.map((day, dayIndex) => (
        <div key={day.day} className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <h3 className="text-lg font-semibold text-gray-900">{day.day}</h3>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={day.isWorking}
                  onChange={() => toggleWorkingDay(dayIndex)}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">Working Day</span>
              </label>
            </div>
            
            {day.isWorking && (
              <button
                onClick={() => addTimeSlot(dayIndex)}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <FaPlus className="mr-1" />
                Add Time Slot
              </button>
            )}
          </div>

          {day.isWorking ? (
            <div className="space-y-3">
              {day.timeSlots.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <FaClock className="mx-auto text-3xl mb-2" />
                  <p>No time slots available</p>
                  <p className="text-sm">Click "Add Time Slot" to add availability</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {day.timeSlots.map((slot, slotIndex) => (
                    <div key={slot.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-gray-700">Time Slot {slotIndex + 1}</span>
                        <button
                          onClick={() => removeTimeSlot(dayIndex, slotIndex)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                          title="Remove time slot"
                        >
                          <FaTrash className="text-sm" />
                        </button>
                      </div>
                      
                      <div className="space-y-2">
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Start Time</label>
                          <input
                            type="time"
                            value={slot.startTime}
                            onChange={(e) => updateTimeSlot(dayIndex, slotIndex, 'startTime', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-primary-500 focus:border-primary-500"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">End Time</label>
                          <input
                            type="time"
                            value={slot.endTime}
                            onChange={(e) => updateTimeSlot(dayIndex, slotIndex, 'endTime', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-primary-500 focus:border-primary-500"
                          />
                        </div>
                        
                        <div className="text-xs text-gray-500">
                          Duration: {formatTime(slot.startTime)} - {formatTime(slot.endTime)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <FaClock className="mx-auto text-3xl mb-2" />
              <p>Not a working day</p>
              <p className="text-sm">Enable "Working Day" to add time slots</p>
            </div>
          )}
        </div>
      ))}

      {/* Save Status */}
      {saving && (
        <div className="fixed bottom-4 right-4 bg-primary-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2">
          <FaSave className="animate-spin" />
          <span>Saving changes...</span>
        </div>
      )}
    </div>
  )
}

export default AvailabilityManager
