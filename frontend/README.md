# AIERGT Frontend

This is the frontend application for the African Institute for Environmental Research and Geospatial Technology (AIERGT) website.

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom AIERGT theme
- **Typography**: Poppins (body) + Montserrat (headings)
- **State Management**: Zustand
- **Authentication**: NextAuth.js v5
- **Form Validation**: Zod + React Hook Form
- **UI Components**: Custom components with Radix UI primitives
- **Icons**: Lucide React

## 📁 Project Structure

```
frontend/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── auth/          # NextAuth configuration
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Homepage
├── components/            # Component library
│   ├── ui/               # Base UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── Card.tsx
│   ├── layout/           # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── providers/        # Context providers
│       └── Providers.tsx
├── lib/                  # Core utilities
│   ├── store/           # Zustand stores
│   │   ├── authStore.ts
│   │   ├── portalStore.ts
│   │   └── uiStore.ts
│   └── utils/           # Utility functions
│       ├── cn.ts        # Class name utility
│       └── validation.ts # Zod schemas
└── types/               # TypeScript definitions
    ├── auth.types.ts
    └── portal.types.ts
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#87ceeb` (Sky blue - primary brand color)
- **Secondary Blue**: `#6497b1` (Medium blue - secondary brand color)
- **Accent Blue**: `#b3cde0` (Light blue - accent brand color)
- **Background Cream**: `#FEF7ED` (Warm background)

### Components
- **Button**: Multiple variants including AIERGT-specific styles
- **Input**: Form input with consistent styling
- **Card**: Content containers with proper spacing
- **Header**: Responsive navigation with authentication
- **Footer**: Comprehensive footer with links

## 🔐 Authentication

Configured with NextAuth.js supporting:
- Credentials provider (email/password)
- Google OAuth (optional)
- JWT sessions
- Protected routes

## 📦 State Management

Zustand stores for:
- **Auth Store**: User authentication state
- **Portal Store**: Portal-specific data and actions
- **UI Store**: Global UI state (modals, notifications, etc.)

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📝 Environment Variables

Required environment variables:
- `NEXTAUTH_SECRET` - Secret for NextAuth
- `NEXTAUTH_URL` - Base URL for the application
- `NEXTAUTH_GOOGLE_CLIENT_ID` - Google OAuth client ID (optional)
- `NEXTAUTH_GOOGLE_CLIENT_SECRET` - Google OAuth client secret (optional)

## 🎯 Next Steps

1. **Create authentication pages** (login/register)
2. **Build portal components** (member, geoportal, training)
3. **Implement API routes** for data fetching
4. **Add form components** with validation
5. **Create admin dashboard** for user management
6. **Add chatbot integration**
7. **Implement email notifications**

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [NextAuth.js](https://next-auth.js.org/)
- [Zustand](https://github.com/pmndrs/zustand)
- [Zod](https://zod.dev/)

---

**Preparing Africa For Tomorrow** 🌍