import nodemailer from 'nodemailer'
import { Appointment } from './appointment-data'

// Email configuration - you'll need to set these up
const EMAIL_CONFIG = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || 'your-email@gmail.com',
    pass: process.env.SMTP_PASS || 'your-app-password'
  }
}

// Create transporter
const createTransporter = () => {
  // For development/testing, use a test account
  if (process.env.NODE_ENV === 'development' && 
      (EMAIL_CONFIG.auth.user === 'your-email@gmail.com' || 
       !EMAIL_CONFIG.auth.user.includes('@') ||
       EMAIL_CONFIG.auth.pass === 'your-app-password')) {
    console.log('Email service not configured - using test mode')
    return null
  }
  return nodemailer.createTransport(EMAIL_CONFIG)
}

// Email templates
export const sendAppointmentConfirmationToPatient = async (appointment: Appointment, googleMeetPassword?: string) => {
  const transporter = createTransporter()
  
  if (!transporter) {
    // We'll log the email content after it's built
    console.log('Email service not configured - will show email content after building')
  }
  
  const clinicInfo = {
    address: '123 Homeopathy Lane, Wellness City, 54321',
    phone: '(555) 123-4567',
    googleMeetLink: 'https://meet.google.com/abc-defg-hij'
  }

  let emailContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #10b981, #059669); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 28px;">Appointment Confirmed</h1>
        <p style="color: white; margin: 10px 0 0 0; font-size: 16px;">Remedy Excel - Specialists in Homeopathy</p>
      </div>
      
      <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px;">
        <h2 style="color: #1f2937; margin-top: 0;">Hello ${appointment.patientName},</h2>
        
        <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
          Your appointment has been successfully confirmed. Here are the details:
        </p>
        
        <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981;">
          <h3 style="color: #1f2937; margin-top: 0;">Appointment Details</h3>
          <p style="margin: 8px 0;"><strong>Date:</strong> ${new Date(appointment.appointmentDate).toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</p>
          <p style="margin: 8px 0;"><strong>Time:</strong> ${appointment.appointmentTime}</p>
          <p style="margin: 8px 0;"><strong>Consultation Type:</strong> ${appointment.consultationType === 'online' ? 'Online Consultation' : 'In-Person Consultation'}</p>
          <p style="margin: 8px 0;"><strong>Doctor:</strong> Dr. Sarah Smith</p>
        </div>
  `

  if (appointment.consultationType === 'online') {
    emailContent += `
        <div style="background: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6;">
          <h3 style="color: #1e40af; margin-top: 0;">Online Consultation Details</h3>
          <p style="margin: 8px 0;"><strong>Google Meet Link:</strong> <a href="${clinicInfo.googleMeetLink}" style="color: #3b82f6;">${clinicInfo.googleMeetLink}</a></p>
          <p style="margin: 8px 0;"><strong>Meeting Password:</strong> <span style="background: #f3f4f6; padding: 4px 8px; border-radius: 4px; font-family: monospace;">${googleMeetPassword}</span></p>
          <p style="color: #6b7280; font-size: 14px; margin-top: 15px;">
            <strong>Important:</strong> Please join the meeting 5 minutes before your scheduled time. The password is unique to your appointment and can only be used once.
          </p>
        </div>
    `
  } else {
    emailContent += `
        <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981;">
          <h3 style="color: #166534; margin-top: 0;">In-Person Consultation Details</h3>
          <p style="margin: 8px 0;"><strong>Clinic Address:</strong> ${clinicInfo.address}</p>
          <p style="margin: 8px 0;"><strong>Phone:</strong> ${clinicInfo.phone}</p>
          <p style="color: #6b7280; font-size: 14px; margin-top: 15px;">
            <strong>Important:</strong> Please arrive 10 minutes before your scheduled appointment time. Bring any relevant medical reports or documents.
          </p>
        </div>
    `
  }

  emailContent += `
        <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b;">
          <h3 style="color: #92400e; margin-top: 0;">Important Reminders</h3>
          <ul style="color: #6b7280; margin: 0; padding-left: 20px;">
            <li>Please arrive on time for your appointment</li>
            <li>Bring a list of any medications you're currently taking</li>
            <li>Prepare any questions you'd like to discuss</li>
            <li>If you need to reschedule, please contact us at least 24 hours in advance</li>
          </ul>
        </div>
        
        <div style="text-align: center; margin-top: 30px;">
          <p style="color: #6b7280; font-size: 14px;">
            If you have any questions, please don't hesitate to contact us at ${clinicInfo.phone} or reply to this email.
          </p>
          <p style="color: #6b7280; font-size: 14px; margin-top: 20px;">
            Best regards,<br>
            <strong>Dr. Sarah Smith</strong><br>
            Remedy Excel - Specialists in Homeopathy
          </p>
        </div>
      </div>
    </div>
  `

  // Log email content if transporter is null (test mode)
  if (!transporter) {
    console.log('='.repeat(80))
    console.log('APPOINTMENT CONFIRMATION EMAIL (would be sent to patient)')
    console.log('='.repeat(80))
    console.log(`To: ${appointment.patientEmail}`)
    console.log(`Subject: Appointment Confirmed - ${appointment.consultationType === 'online' ? 'Online' : 'In-Person'} Consultation`)
    console.log('Email Content:', emailContent)
    console.log('='.repeat(80))
    return
  }

  const mailOptions = {
    from: EMAIL_CONFIG.auth.user,
    to: appointment.patientEmail,
    subject: `Appointment Confirmed - ${appointment.consultationType === 'online' ? 'Online' : 'In-Person'} Consultation`,
    html: emailContent
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log('Appointment confirmation email sent to patient')
  } catch (error) {
    console.error('Error sending email to patient:', error)
    throw error
  }
}

export const sendAppointmentNotificationToDoctor = async (appointment: Appointment) => {
  const transporter = createTransporter()
  
  if (!transporter) {
    // We'll log the email content after it's built
    console.log('Email service not configured - will show doctor email content after building')
  }
  
  const clinicInfo = {
    address: '123 Homeopathy Lane, Wellness City, 54321',
    phone: '(555) 123-4567'
  }

  let emailContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 28px;">New Appointment Booking</h1>
        <p style="color: white; margin: 10px 0 0 0; font-size: 16px;">Remedy Excel - Specialists in Homeopathy</p>
      </div>
      
      <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px;">
        <h2 style="color: #1f2937; margin-top: 0;">Hello Dr. Sarah Smith,</h2>
        
        <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
          A new appointment has been booked. Here are the details:
        </p>
        
        <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6;">
          <h3 style="color: #1f2937; margin-top: 0;">Appointment Details</h3>
          <p style="margin: 8px 0;"><strong>Patient Name:</strong> ${appointment.patientName}</p>
          <p style="margin: 8px 0;"><strong>Patient Email:</strong> ${appointment.patientEmail}</p>
          <p style="margin: 8px 0;"><strong>Patient Phone:</strong> ${appointment.patientPhone}</p>
          <p style="margin: 8px 0;"><strong>Date:</strong> ${new Date(appointment.appointmentDate).toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</p>
          <p style="margin: 8px 0;"><strong>Time:</strong> ${appointment.appointmentTime}</p>
          <p style="margin: 8px 0;"><strong>Consultation Type:</strong> ${appointment.consultationType === 'online' ? 'Online Consultation' : 'In-Person Consultation'}</p>
          <p style="margin: 8px 0;"><strong>Status:</strong> ${appointment.status}</p>
          ${appointment.notes ? `<p style="margin: 8px 0;"><strong>Notes:</strong> ${appointment.notes}</p>` : ''}
        </div>
  `

  if (appointment.consultationType === 'online') {
    emailContent += `
        <div style="background: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6;">
          <h3 style="color: #1e40af; margin-top: 0;">Online Consultation Details</h3>
          <p style="margin: 8px 0;"><strong>Google Meet Link:</strong> <a href="https://meet.google.com/abc-defg-hij" style="color: #3b82f6;">https://meet.google.com/abc-defg-hij</a></p>
          <p style="margin: 8px 0;"><strong>Meeting Password:</strong> <span style="background: #f3f4f6; padding: 4px 8px; border-radius: 4px; font-family: monospace;">${appointment.googleMeetPassword}</span></p>
          <p style="color: #6b7280; font-size: 14px; margin-top: 15px;">
            The patient has been provided with the Google Meet link and password. Please be ready for the online consultation at the scheduled time.
          </p>
        </div>
    `
  } else {
    emailContent += `
        <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981;">
          <h3 style="color: #166534; margin-top: 0;">In-Person Consultation Details</h3>
          <p style="margin: 8px 0;"><strong>Clinic Address:</strong> ${clinicInfo.address}</p>
          <p style="margin: 8px 0;"><strong>Phone:</strong> ${clinicInfo.phone}</p>
          <p style="color: #6b7280; font-size: 14px; margin-top: 15px;">
            The patient will visit the clinic for an in-person consultation. Please ensure the consultation room is ready.
          </p>
        </div>
    `
  }

  emailContent += `
        <div style="text-align: center; margin-top: 30px;">
          <p style="color: #6b7280; font-size: 14px;">
            This appointment was booked on ${new Date(appointment.createdAt).toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}.
          </p>
        </div>
      </div>
    </div>
  `

  // Log email content if transporter is null (test mode)
  if (!transporter) {
    console.log('='.repeat(80))
    console.log('DOCTOR NOTIFICATION EMAIL (would be sent to doctor)')
    console.log('='.repeat(80))
    console.log(`To: doctor@remedyexcel.com`)
    console.log(`Subject: New Appointment Booking - ${appointment.consultationType === 'online' ? 'Online' : 'In-Person'} Consultation`)
    console.log('Email Content:', emailContent)
    console.log('='.repeat(80))
    return
  }

  const mailOptions = {
    from: EMAIL_CONFIG.auth.user,
    to: 'doctor@remedyexcel.com', // Doctor's email
    subject: `New Appointment Booking - ${appointment.consultationType === 'online' ? 'Online' : 'In-Person'} Consultation`,
    html: emailContent
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log('Appointment notification email sent to doctor')
  } catch (error) {
    console.error('Error sending email to doctor:', error)
    throw error
  }
}
