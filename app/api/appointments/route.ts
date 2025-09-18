import { NextRequest, NextResponse } from 'next/server'
import { getAppointments, addAppointment, generateUniquePassword, markPasswordAsUsed } from '@/lib/appointment-data'
import { sendAppointmentConfirmationToPatient, sendAppointmentNotificationToDoctor } from '@/lib/email-service'

export async function GET() {
  try {
    const appointments = getAppointments()
    return NextResponse.json(appointments)
  } catch (error) {
    console.error('Error fetching appointments:', error)
    return NextResponse.json({ error: 'Failed to fetch appointments' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    if (!body.patientName || !body.patientEmail || !body.patientPhone || !body.appointmentDate || !body.appointmentTime || !body.consultationType) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Generate Google Meet password for online consultations
    let googleMeetPassword: string | undefined
    if (body.consultationType === 'online') {
      googleMeetPassword = generateUniquePassword()
    }

    // Create appointment
    const appointment = await addAppointment({
      patientName: body.patientName,
      patientEmail: body.patientEmail,
      patientPhone: body.patientPhone,
      appointmentDate: body.appointmentDate,
      appointmentTime: body.appointmentTime,
      consultationType: body.consultationType,
      status: 'confirmed',
      googleMeetPassword,
      notes: body.notes || ''
    })

    // Send emails
    try {
      await Promise.all([
        sendAppointmentConfirmationToPatient(appointment, googleMeetPassword),
        sendAppointmentNotificationToDoctor(appointment)
      ])

      // Mark password as used if it was generated
      if (googleMeetPassword) {
        markPasswordAsUsed(googleMeetPassword, appointment.id)
      }
    } catch (emailError) {
      console.error('Error sending emails:', emailError)
      // Don't fail the appointment creation if email fails
    }

    return NextResponse.json(appointment, { status: 201 })
  } catch (error) {
    console.error('Error creating appointment:', error)
    return NextResponse.json({ error: 'Failed to create appointment' }, { status: 500 })
  }
}
