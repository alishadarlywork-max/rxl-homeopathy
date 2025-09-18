import { NextRequest, NextResponse } from 'next/server'
import { getDoctorAvailability, updateDoctorAvailability, getAvailableTimeSlots } from '../../../lib/appointment-data'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const date = searchParams.get('date')
    
    if (date) {
      // Return available time slots for specific date
      const slots = getAvailableTimeSlots(date)
      return NextResponse.json(slots)
    } else {
      // Return full availability
      const availability = getDoctorAvailability()
      return NextResponse.json(availability)
    }
  } catch (error) {
    console.error('Error fetching availability:', error)
    return NextResponse.json({ error: 'Failed to fetch availability' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    
    const updatedAvailability = updateDoctorAvailability(body)
    return NextResponse.json(updatedAvailability)
  } catch (error) {
    console.error('Error updating availability:', error)
    return NextResponse.json({ error: 'Failed to update availability' }, { status: 500 })
  }
}
