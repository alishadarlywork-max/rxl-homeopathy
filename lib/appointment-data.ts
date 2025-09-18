import fs from 'fs'
import path from 'path'
import crypto from 'crypto'

export interface TimeSlot {
  id: string
  startTime: string
  endTime: string
  isAvailable: boolean
}

export interface DaySchedule {
  day: string
  isWorking: boolean
  timeSlots: TimeSlot[]
}

export interface DoctorAvailability {
  id: string
  doctorName: string
  schedule: DaySchedule[]
  lastUpdated: string
}

export interface Appointment {
  id: string
  patientName: string
  patientEmail: string
  patientPhone: string
  appointmentDate: string
  appointmentTime: string
  consultationType: 'online' | 'offline'
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed'
  googleMeetPassword?: string
  createdAt: string
  notes?: string
}

export interface UsedPassword {
  password: string
  usedAt: string
  appointmentId: string
}

const AVAILABILITY_FILE = path.join(process.cwd(), 'data', 'doctor-availability.json')
const APPOINTMENTS_FILE = path.join(process.cwd(), 'data', 'appointments.json')
const PASSWORDS_FILE = path.join(process.cwd(), 'data', 'used-passwords.json')

// Ensure data directory exists
const ensureDataDirectory = () => {
  const dataDir = path.join(process.cwd(), 'data')
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
}

// Default doctor availability
const defaultAvailability: DoctorAvailability = {
  id: '1',
  doctorName: 'Dr. Sarah Smith',
  schedule: [
    {
      day: 'Monday',
      isWorking: true,
      timeSlots: [
        { id: '1', startTime: '09:00', endTime: '10:00', isAvailable: true },
        { id: '2', startTime: '10:00', endTime: '11:00', isAvailable: true },
        { id: '3', startTime: '11:00', endTime: '12:00', isAvailable: true },
        { id: '4', startTime: '14:00', endTime: '15:00', isAvailable: true },
        { id: '5', startTime: '15:00', endTime: '16:00', isAvailable: true },
        { id: '6', startTime: '16:00', endTime: '17:00', isAvailable: true }
      ]
    },
    {
      day: 'Tuesday',
      isWorking: true,
      timeSlots: [
        { id: '7', startTime: '09:00', endTime: '10:00', isAvailable: true },
        { id: '8', startTime: '10:00', endTime: '11:00', isAvailable: true },
        { id: '9', startTime: '11:00', endTime: '12:00', isAvailable: true },
        { id: '10', startTime: '14:00', endTime: '15:00', isAvailable: true },
        { id: '11', startTime: '15:00', endTime: '16:00', isAvailable: true },
        { id: '12', startTime: '16:00', endTime: '17:00', isAvailable: true }
      ]
    },
    {
      day: 'Wednesday',
      isWorking: true,
      timeSlots: [
        { id: '13', startTime: '09:00', endTime: '10:00', isAvailable: true },
        { id: '14', startTime: '10:00', endTime: '11:00', isAvailable: true },
        { id: '15', startTime: '11:00', endTime: '12:00', isAvailable: true },
        { id: '16', startTime: '14:00', endTime: '15:00', isAvailable: true },
        { id: '17', startTime: '15:00', endTime: '16:00', isAvailable: true },
        { id: '18', startTime: '16:00', endTime: '17:00', isAvailable: true }
      ]
    },
    {
      day: 'Thursday',
      isWorking: true,
      timeSlots: [
        { id: '19', startTime: '09:00', endTime: '10:00', isAvailable: true },
        { id: '20', startTime: '10:00', endTime: '11:00', isAvailable: true },
        { id: '21', startTime: '11:00', endTime: '12:00', isAvailable: true },
        { id: '22', startTime: '14:00', endTime: '15:00', isAvailable: true },
        { id: '23', startTime: '15:00', endTime: '16:00', isAvailable: true },
        { id: '24', startTime: '16:00', endTime: '17:00', isAvailable: true }
      ]
    },
    {
      day: 'Friday',
      isWorking: true,
      timeSlots: [
        { id: '25', startTime: '09:00', endTime: '10:00', isAvailable: true },
        { id: '26', startTime: '10:00', endTime: '11:00', isAvailable: true },
        { id: '27', startTime: '11:00', endTime: '12:00', isAvailable: true },
        { id: '28', startTime: '14:00', endTime: '15:00', isAvailable: true },
        { id: '29', startTime: '15:00', endTime: '16:00', isAvailable: true },
        { id: '30', startTime: '16:00', endTime: '17:00', isAvailable: true }
      ]
    },
    {
      day: 'Saturday',
      isWorking: false,
      timeSlots: []
    },
    {
      day: 'Sunday',
      isWorking: false,
      timeSlots: []
    }
  ],
  lastUpdated: new Date().toISOString()
}

// Google Meet constants
const GOOGLE_MEET_LINK = 'https://meet.google.com/abc-defg-hij'
const CLINIC_ADDRESS = '123 Homeopathy Lane, Wellness City, 54321'
const CLINIC_PHONE = '(555) 123-4567'

// Read doctor availability
export const getDoctorAvailability = (): DoctorAvailability => {
  try {
    ensureDataDirectory()
    
    if (!fs.existsSync(AVAILABILITY_FILE)) {
      fs.writeFileSync(AVAILABILITY_FILE, JSON.stringify(defaultAvailability, null, 2))
      return defaultAvailability
    }
    
    const data = fs.readFileSync(AVAILABILITY_FILE, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading doctor availability:', error)
    return defaultAvailability
  }
}

// Update doctor availability
export const updateDoctorAvailability = (availability: DoctorAvailability): DoctorAvailability => {
  try {
    ensureDataDirectory()
    const updatedAvailability = {
      ...availability,
      lastUpdated: new Date().toISOString()
    }
    fs.writeFileSync(AVAILABILITY_FILE, JSON.stringify(updatedAvailability, null, 2))
    return updatedAvailability
  } catch (error) {
    console.error('Error updating doctor availability:', error)
    throw error
  }
}

// Read appointments
export const getAppointments = (): Appointment[] => {
  try {
    ensureDataDirectory()
    
    if (!fs.existsSync(APPOINTMENTS_FILE)) {
      fs.writeFileSync(APPOINTMENTS_FILE, JSON.stringify([], null, 2))
      return []
    }
    
    const data = fs.readFileSync(APPOINTMENTS_FILE, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading appointments:', error)
    return []
  }
}

// Add new appointment
export const addAppointment = (appointment: Omit<Appointment, 'id' | 'createdAt'>): Appointment => {
  try {
    const appointments = getAppointments()
    const newId = Math.max(...appointments.map(a => parseInt(a.id)), 0) + 1
    
    const newAppointment: Appointment = {
      ...appointment,
      id: newId.toString(),
      createdAt: new Date().toISOString()
    }
    
    const updatedAppointments = [...appointments, newAppointment]
    fs.writeFileSync(APPOINTMENTS_FILE, JSON.stringify(updatedAppointments, null, 2))
    
    return newAppointment
  } catch (error) {
    console.error('Error adding appointment:', error)
    throw error
  }
}

// Update appointment status
export const updateAppointmentStatus = (id: string, status: Appointment['status']): Appointment | null => {
  try {
    const appointments = getAppointments()
    const appointmentIndex = appointments.findIndex(a => a.id === id)
    
    if (appointmentIndex === -1) {
      return null
    }
    
    appointments[appointmentIndex].status = status
    fs.writeFileSync(APPOINTMENTS_FILE, JSON.stringify(appointments, null, 2))
    
    return appointments[appointmentIndex]
  } catch (error) {
    console.error('Error updating appointment status:', error)
    throw error
  }
}

// Generate unique Google Meet password
export const generateGoogleMeetPassword = (): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let password = ''
  
  for (let i = 0; i < 8; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  
  return password
}

// Check if password is already used
export const isPasswordUsed = (password: string): boolean => {
  try {
    ensureDataDirectory()
    
    if (!fs.existsSync(PASSWORDS_FILE)) {
      fs.writeFileSync(PASSWORDS_FILE, JSON.stringify([], null, 2))
      return false
    }
    
    const data = fs.readFileSync(PASSWORDS_FILE, 'utf8')
    const usedPasswords: UsedPassword[] = JSON.parse(data)
    
    return usedPasswords.some(up => up.password === password)
  } catch (error) {
    console.error('Error checking password:', error)
    return false
  }
}

// Mark password as used
export const markPasswordAsUsed = (password: string, appointmentId: string): void => {
  try {
    ensureDataDirectory()
    
    let usedPasswords: UsedPassword[] = []
    if (fs.existsSync(PASSWORDS_FILE)) {
      const data = fs.readFileSync(PASSWORDS_FILE, 'utf8')
      usedPasswords = JSON.parse(data)
    }
    
    usedPasswords.push({
      password,
      usedAt: new Date().toISOString(),
      appointmentId
    })
    
    fs.writeFileSync(PASSWORDS_FILE, JSON.stringify(usedPasswords, null, 2))
  } catch (error) {
    console.error('Error marking password as used:', error)
  }
}

// Generate unique password that hasn't been used
export const generateUniquePassword = (): string => {
  let password: string
  let attempts = 0
  
  do {
    password = generateGoogleMeetPassword()
    attempts++
  } while (isPasswordUsed(password) && attempts < 100)
  
  if (attempts >= 100) {
    throw new Error('Unable to generate unique password')
  }
  
  return password
}

// Get available time slots for a specific date
export const getAvailableTimeSlots = (date: string): TimeSlot[] => {
  const availability = getDoctorAvailability()
  const dayName = new Date(date).toLocaleDateString('en-US', { weekday: 'long' })
  
  const daySchedule = availability.schedule.find(s => s.day === dayName)
  
  if (!daySchedule || !daySchedule.isWorking) {
    return []
  }
  
  // Filter out slots that are already booked
  const appointments = getAppointments()
  const bookedSlots = appointments
    .filter(a => a.appointmentDate === date && a.status !== 'cancelled')
    .map(a => a.appointmentTime)
  
  return daySchedule.timeSlots.filter(slot => 
    slot.isAvailable && !bookedSlots.includes(slot.startTime)
  )
}

// Get clinic information
export const getClinicInfo = () => {
  return {
    address: CLINIC_ADDRESS,
    phone: CLINIC_PHONE,
    googleMeetLink: GOOGLE_MEET_LINK
  }
}
