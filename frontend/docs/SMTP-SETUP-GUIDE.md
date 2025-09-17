# SMTP Configuration Guide for AIERGT

## 📧 **Email Testing Setup with SMTP**

This guide will help you configure SMTP for email testing with Mailinator.

---

## 🚀 **Option 1: Gmail (Recommended for Testing)**

### **Step 1: Enable 2-Factor Authentication**
1. Go to your Google Account: https://myaccount.google.com/
2. Click **Security** → **2-Step Verification**
3. Enable 2-Step Verification if not already enabled

### **Step 2: Generate App Password**
1. Go to **Security** → **App passwords**
2. Select **Mail** and your device
3. Generate a 16-character app password
4. **Copy this password** - you'll need it for SMTP

### **Step 3: Configure .env File**
Add these variables to your `.env` file:

```env
# SMTP Configuration for Gmail
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-16-character-app-password"
SMTP_FROM="noreply@aiergt.africa"

# Email Configuration
ADMIN_EMAILS="admin@aiergt.africa"
SUPPORT_EMAIL="support@aiergt.africa"
```

### **Step 4: Test Email Configuration**
```bash
cd /home/techbite/Humprey/AIERGT/frontend
bun run test:auth
```

---

## 🔧 **Option 2: Other Email Providers**

### **Outlook/Hotmail**
```env
SMTP_HOST="smtp-mail.outlook.com"
SMTP_PORT="587"
SMTP_USER="your-email@outlook.com"
SMTP_PASS="your-password"
SMTP_FROM="noreply@aiergt.africa"
```

### **Yahoo Mail**
```env
SMTP_HOST="smtp.mail.yahoo.com"
SMTP_PORT="587"
SMTP_USER="your-email@yahoo.com"
SMTP_PASS="your-app-password"
SMTP_FROM="noreply@aiergt.africa"
```

### **Custom SMTP Server**
```env
SMTP_HOST="your-smtp-server.com"
SMTP_PORT="587"
SMTP_USER="your-username"
SMTP_PASS="your-password"
SMTP_FROM="noreply@aiergt.africa"
```

---

## 🧪 **Testing with Mailinator**

### **Step 1: Set Up Mailinator**
1. Go to: https://www.mailinator.com/
2. Use any email address like: `aiergt-test@mailinator.com`
3. No registration required!

### **Step 2: Test Email Flow**
1. **Register a user** with Mailinator email
2. **Check Mailinator inbox** for welcome email
3. **Test password reset** functionality
4. **Verify user** from admin panel
5. **Check for verification email**

### **Step 3: Test All Email Types**
- ✅ Welcome email (user registration)
- ✅ Admin notification (new user registration)
- ✅ Password reset email
- ✅ User verification email
- ✅ User rejection email
- ✅ Password change confirmation

---

## 🔍 **Troubleshooting SMTP Issues**

### **Common Issues & Solutions**

#### **❌ "Authentication Failed"**
```
Solution: Use App Password instead of regular password
- Gmail: Generate App Password in Google Account
- Yahoo: Enable App Passwords in Account Security
```

#### **❌ "Connection Refused"**
```
Solution: Check firewall and port settings
- Port 587 (TLS) - Recommended
- Port 465 (SSL) - Alternative
- Port 25 (Unencrypted) - Not recommended
```

#### **❌ "TLS/SSL Error"**
```
Solution: Update SMTP configuration
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_SECURE="false"  # Use TLS, not SSL
```

#### **❌ "Rate Limited"**
```
Solution: Add delays between emails
- Gmail: 100 emails/day (free), 2000/day (paid)
- Add delays in production
```

---

## 📋 **Complete .env Template**

Create or update your `.env` file with these settings:

```env
# Database
DATABASE_URL="postgresql://postgres:password@localhost:5432/aiergt"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Google OAuth (Optional)
NEXTAUTH_GOOGLE_CLIENT_ID="your-google-client-id"
NEXTAUTH_GOOGLE_CLIENT_SECRET="your-google-client-secret"

# SMTP Configuration (Gmail Example)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-16-character-app-password"
SMTP_FROM="noreply@aiergt.africa"

# Email Configuration
ADMIN_EMAILS="admin@aiergt.africa"
SUPPORT_EMAIL="support@aiergt.africa"

# Test Email (Use Mailinator)
TEST_EMAIL="aiergt-test@mailinator.com"
```

---

## 🧪 **Testing Commands**

### **Test Email Configuration**
```bash
# Test complete authentication with email
bun run test:auth

# Test without email (database only)
bun run test:auth-no-email

# Test specific email functionality
curl -X POST http://localhost:3000/api/auth/forgot-password \
  -H "Content-Type: application/json" \
  -d '{"email":"aiergt-test@mailinator.com"}'
```

### **Manual Testing Steps**
1. **Start development server**: `bun run dev`
2. **Register user**: http://localhost:3000/auth/register
3. **Check Mailinator**: https://www.mailinator.com/
4. **Test password reset**: http://localhost:3000/auth/forgot-password
5. **Verify user**: http://localhost:3000/admin/users

---

## 🚀 **Production SMTP Setup**

### **For Production Deployment**
1. **Use dedicated email service**:
   - SendGrid
   - Mailgun
   - Amazon SES
   - Postmark

2. **Example with SendGrid**:
```env
SMTP_HOST="smtp.sendgrid.net"
SMTP_PORT="587"
SMTP_USER="apikey"
SMTP_PASS="your-sendgrid-api-key"
SMTP_FROM="noreply@aiergt.africa"
```

3. **Configure DNS records**:
   - SPF record
   - DKIM record
   - DMARC policy

---

## 📊 **Email Testing Checklist**

### **✅ Pre-Testing Setup**
- [ ] SMTP credentials configured in .env
- [ ] Mailinator email address ready
- [ ] Development server running
- [ ] Database seeded with test data

### **✅ Email Flow Testing**
- [ ] User registration email
- [ ] Admin notification email
- [ ] Password reset email
- [ ] User verification email
- [ ] User rejection email
- [ ] Password change email

### **✅ Email Content Verification**
- [ ] Email templates render correctly
- [ ] Links work properly
- [ ] Branding consistent
- [ ] No broken images
- [ ] Mobile-friendly layout

---

## 🎯 **Quick Start Guide**

### **5-Minute Setup**
1. **Enable Gmail App Password** (2 minutes)
2. **Add SMTP config to .env** (1 minute)
3. **Restart development server** (1 minute)
4. **Test with Mailinator** (1 minute)

### **Test Command**
```bash
# Quick email test
curl -X POST http://localhost:3000/api/auth/forgot-password \
  -H "Content-Type: application/json" \
  -d '{"email":"test@mailinator.com"}'
```

---

## 📞 **Need Help?**

### **Common Solutions**
- **Gmail App Password**: https://support.google.com/accounts/answer/185833
- **Mailinator**: https://www.mailinator.com/
- **SMTP Ports**: Use 587 (TLS) or 465 (SSL)

### **Debug Email Issues**
1. Check `.env` file configuration
2. Verify app password is correct
3. Test SMTP connection
4. Check Mailinator inbox
5. Review server logs

---

**Ready to test emails? Follow the Gmail setup above and run `bun run test:auth`!** 🚀
