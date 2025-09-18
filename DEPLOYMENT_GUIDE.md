# 🚀 Render Deployment Guide

## Deploy Your Homeopathy Website to Render

### **Step 1: Prepare Your Repository**

✅ **Already Done:**
- ✅ Repository pushed to GitHub
- ✅ `.gitignore` configured
- ✅ `render.yaml` created
- ✅ Environment variables example created

### **Step 2: Deploy to Render**

#### **Option A: Connect GitHub Repository (Recommended)**

1. **Go to Render Dashboard**
   - Visit: https://render.com
   - Sign up/Login with your GitHub account

2. **Create New Web Service**
   - Click "New +" button
   - Select "Web Service"

3. **Connect Your Repository**
   - Click "Connect GitHub"
   - Select your repository: `alishadarlywork-max/rxl-homeopathy`
   - Click "Connect"

4. **Configure Your Service**
   ```
   Name: rxl-homeopathy
   Environment: Node
   Build Command: npm install
   Start Command: npm run start
   Plan: Free
   ```

5. **Set Environment Variables**
   - Click "Advanced" → "Environment Variables"
   - Add the following variables:

   ```
   NODE_ENV = production
   NEXTAUTH_URL = https://rxl-homeopathy.onrender.com
   NEXTAUTH_SECRET = [Generate a random secret key]
   
   # Email Configuration (Optional - for production emails)
   SMTP_HOST = smtp.gmail.com
   SMTP_PORT = 587
   SMTP_USER = your-email@gmail.com
   SMTP_PASS = your-app-password
   
   # Google Meet Link
   GOOGLE_MEET_LINK = https://meet.google.com/abc-defg-hij
   ```

6. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment (5-10 minutes)

#### **Option B: Manual Deploy with render.yaml**

1. **Push render.yaml to GitHub**
   ```bash
   git add render.yaml
   git commit -m "Add Render deployment configuration"
   git push origin main
   ```

2. **Create Blueprint Service**
   - Go to Render Dashboard
   - Click "New +" → "Blueprint"
   - Connect your GitHub repository
   - Render will automatically detect `render.yaml`

### **Step 3: Configure Custom Domain (Optional)**

1. **Get Your Render URL**
   - After deployment, you'll get: `https://rxl-homeopathy.onrender.com`

2. **Add Custom Domain**
   - Go to your service settings
   - Click "Custom Domains"
   - Add your domain (e.g., `www.remedyexcel.com`)

### **Step 4: Update Environment Variables**

After deployment, update these in Render dashboard:

```
NEXTAUTH_URL = https://your-actual-domain.com
GOOGLE_MEET_LINK = https://meet.google.com/your-actual-meeting-id
```

### **Step 5: Test Your Deployment**

1. **Visit your deployed site**
2. **Test appointment booking**
3. **Check email functionality** (if configured)
4. **Verify all pages work**

## 🎯 **Deployment Checklist**

- [ ] Repository connected to Render
- [ ] Environment variables configured
- [ ] Build successful
- [ ] Site accessible
- [ ] Appointment booking works
- [ ] Email notifications work (if configured)
- [ ] Custom domain added (if needed)

## 🔧 **Troubleshooting**

### **Build Fails**
- Check Node.js version (should be 18+)
- Verify all dependencies in `package.json`
- Check build logs in Render dashboard

### **Site Not Loading**
- Verify start command: `npm run start`
- Check environment variables
- Look at service logs

### **Email Not Working**
- Configure SMTP settings in environment variables
- Check email service logs
- Verify Gmail app password (if using Gmail)

## 📞 **Support**

- **Render Documentation**: https://render.com/docs
- **Next.js Deployment**: https://nextjs.org/docs/deployment
- **Email Setup**: See `EMAIL_SETUP_GUIDE.md`

## 🎉 **Success!**

Once deployed, your homeopathy website will be live at:
`https://rxl-homeopathy.onrender.com`

**Features Available:**
- ✅ Responsive design
- ✅ Appointment booking system
- ✅ Blog management
- ✅ Doctor availability management
- ✅ Email notifications
- ✅ SEO optimized
