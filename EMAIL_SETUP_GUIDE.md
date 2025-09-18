# Email Configuration Guide

## Setting Up Email Notifications

To enable email notifications for appointments, you need to configure SMTP settings. Here's how to set it up:

### 1. Gmail Setup (Recommended)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account Settings
   - Security > 2-Step Verification > App passwords
   - Generate a new app password for "Mail"
   - Copy the 16-character password

3. **Update Email Configuration**:
   Edit `lib/email-service.ts` and update the EMAIL_CONFIG:

```typescript
const EMAIL_CONFIG = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'your-email@gmail.com',        // Your Gmail address
    pass: 'your-16-character-app-password' // App password from step 2
  }
}
```

### 2. Other Email Providers

#### Outlook/Hotmail:
```typescript
const EMAIL_CONFIG = {
  host: 'smtp-mail.outlook.com',
  port: 587,
  secure: false,
  auth: {
    user: 'your-email@outlook.com',
    pass: 'your-password'
  }
}
```

#### Yahoo:
```typescript
const EMAIL_CONFIG = {
  host: 'smtp.mail.yahoo.com',
  port: 587,
  secure: false,
  auth: {
    user: 'your-email@yahoo.com',
    pass: 'your-app-password'
  }
}
```

### 3. Environment Variables (Optional)

For better security, you can use environment variables:

1. Create a `.env.local` file in your project root:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
DOCTOR_EMAIL=doctor@remedyexcel.com
```

2. Update `lib/email-service.ts`:
```typescript
const EMAIL_CONFIG = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER || 'your-email@gmail.com',
    pass: process.env.SMTP_PASS || 'your-app-password'
  }
}
```

### 4. Testing Email Configuration

To test if emails are working:

1. Go to `/appointment` page
2. Book a test appointment
3. Check if confirmation emails are sent
4. Check browser console for any email errors

### 5. Troubleshooting

**Common Issues:**

1. **Authentication Failed**: 
   - Make sure you're using an App Password, not your regular password
   - Ensure 2-Factor Authentication is enabled

2. **Connection Timeout**:
   - Check your internet connection
   - Verify SMTP host and port settings

3. **Emails Not Sending**:
   - Check browser console for errors
   - Verify email addresses are correct
   - Check spam folder

### 6. Email Templates

The system sends two types of emails:

1. **Patient Confirmation**: Sent to the patient with appointment details
2. **Doctor Notification**: Sent to the doctor with patient information

Both emails include:
- Appointment date and time
- Consultation type (online/offline)
- Patient contact information
- Google Meet details (for online consultations)
- Clinic address (for offline consultations)

### 7. Google Meet Configuration

For online consultations, update these constants in `lib/appointment-data.ts`:

```typescript
const GOOGLE_MEET_LINK = 'https://meet.google.com/your-meeting-room'
const CLINIC_ADDRESS = 'Your Clinic Address'
const CLINIC_PHONE = 'Your Clinic Phone'
```

### 8. Security Notes

- Never commit email passwords to version control
- Use environment variables for sensitive information
- Regularly rotate app passwords
- Monitor email sending for unusual activity

---

**Need Help?** If you encounter issues, check the browser console for error messages and ensure all email settings are correctly configured.
