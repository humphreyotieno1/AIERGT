# AIERGT Frontend Setup Guide

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Setup
Create a `.env.local` file in the root directory with the following variables:

```env
# NextAuth Configuration (Required)
NEXTAUTH_SECRET="your-secret-key-here-change-this-in-production"
NEXTAUTH_URL="http://localhost:3000"

# Google OAuth (Optional)
NEXTAUTH_GOOGLE_CLIENT_ID="your-google-client-id"
NEXTAUTH_GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Database (For future use)
DATABASE_URL="postgresql://username:password@localhost:5432/aiergt"

# Email Configuration (For future use)
SMTP_HOST="your-smtp-host"
SMTP_PORT="587"
SMTP_USER="your-email@domain.com"
SMTP_PASS="your-email-password"

# Chatbot Configuration (For future use)
OPENAI_API_KEY="your-openai-key"
CHATBOT_MODEL="gpt-3.5-turbo"

# Admin Configuration (For future use)
ADMIN_EMAIL="admin@aiergt.africa"
ADMIN_VERIFICATION_ENABLED="true"

# Google Analytics (For future use)
GA_TRACKING_ID="your-ga-id"
```

### 3. Generate NextAuth Secret
You can generate a secure secret using:
```bash
openssl rand -base64 32
```

**Important**: The `.env.local` file has been automatically created with a secure secret for you. The NextAuth error should now be resolved.

### 4. Start Development Server
```bash
npm run dev
```

### 5. Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Features Included

- ✅ Next.js 15 with App Router
- ✅ Tailwind CSS with AIERGT theme
- ✅ Poppins & Montserrat fonts
- ✅ NextAuth.js v5 authentication
- ✅ Zustand state management
- ✅ Zod form validation
- ✅ Responsive design
- ✅ TypeScript support

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📁 Project Structure

```
frontend/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Homepage
├── components/            # Component library
│   ├── ui/               # Base UI components
│   ├── layout/           # Layout components
│   └── providers/        # Context providers
├── lib/                  # Core utilities
│   ├── store/           # Zustand stores
│   └── utils/           # Utility functions
└── types/               # TypeScript definitions
```

## 🎯 Next Steps

1. **Create Authentication Pages**: Build login/register forms
2. **Portal Development**: Create member, geoportal, and training portals
3. **API Integration**: Connect to backend services
4. **Admin Dashboard**: User verification and management
5. **Chatbot Integration**: AI support system
6. **Email System**: Notification and communication

## 🐛 Troubleshooting

### Dependencies Issues
If you encounter dependency conflicts:
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
Run type checking:
```bash
npm run type-check
```

### Build Issues
Clear Next.js cache:
```bash
rm -rf .next
npm run build
```

---

**Ready to build the future of environmental research in Africa!** 🌍
