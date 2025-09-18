# Email Setup Guide

## Quick Setup for Testing

To receive actual emails, you need to configure SMTP settings. Here are the steps:

### Option 1: Gmail (Recommended)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
3. **Create `.env.local` file** in your project root with:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-character-app-password
```

### Option 2: Outlook/Hotmail

```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

### Option 3: Custom SMTP Server

```env
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@yourdomain.com
SMTP_PASS=your-password
```

## Testing Without Real Email (Current Mode)

The system is currently in **test mode** and will:
- ✅ Still save appointments successfully
- ✅ Show success message to users
- ✅ Log email content to console (for testing)
- ❌ Not send actual emails
- ✅ No authentication errors

**Test mode is active when:**
- No `.env.local` file exists, OR
- Email credentials are set to default placeholder values

## After Setup

1. Create the `.env.local` file with your settings
2. Restart the development server (`npm run dev`)
3. Test the contact form
4. Check your email for confirmations

## Troubleshooting

- **Gmail**: Make sure to use App Password, not regular password
- **Port**: Try 465 with SMTP_SECURE=true if 587 doesn't work
- **Check console**: Look for email service logs in terminal
