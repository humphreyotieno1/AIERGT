# AIERGT Website Overhaul Project

## 📋 Project Overview

The **African Institute for Environmental Research and Geospatial Technology (AIERGT)**, known as **Afrikeon**, is leading the way in providing sustainable environmental and geospatial solutions across Africa. This project involves a complete overhaul of their website to create a modern, user-friendly, and secure platform that showcases their expertise and serves their diverse community.

### 🎯 Project Goals

- **Modern Design**: Create an attractive website with Afrikeon's green and map-inspired style
- **Simplified Navigation**: Easy access to services, research, training, and more
- **Enhanced Features**: Geoportal for maps, Training Portal for courses, and events calendar
- **Secure Access**: Role-based login system for members, admins, and other user types
- **Performance**: Fast loading, high Google rankings, and accessibility compliance
- **Flexibility**: Easy to update and maintain
- **Multilingual Support**: Language options with future expansion capabilities
- **Expertise Showcase**: Highlight AIERGT's research, blogs, and media content

## 🏗️ Technical Architecture

### Technology Stack

- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Authentication**: Clerk or NextAuth.js
- **CMS**: Strapi (for content management)
- **Database**: PostgreSQL
- **Hosting**: Vercel (recommended) + CPanel
- **Analytics**: Google Analytics 4

### Development Principles

- **SOLID Principles**: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion
- **DRY Methodology**: Don't Repeat Yourself - reusable components and utilities
- **OOP Principles**: Object-Oriented Programming with encapsulation, inheritance, and polymorphism
- **Clean Architecture**: Separation of concerns with service layers and interfaces

## 📁 Project Structure

```
aiergt-website/
├── app/                           # Next.js App Router
│   ├── (auth)/                   # Authentication routes
│   ├── (dashboard)/              # Dashboard routes
│   ├── (public)/                 # Public website routes
│   ├── api/                      # API endpoints
│   ├── globals.css
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Homepage
├── components/                   # Component library
│   ├── ui/                      # Base UI components
│   ├── layout/                  # Layout components
│   ├── forms/                   # Form components
│   ├── portal/                  # Portal-specific components
│   └── business/                # Business logic components
├── lib/                         # Core utilities
│   ├── store/                   # Zustand stores
│   ├── services/               # Service layer
│   ├── utils/                  # Utility functions
│   ├── hooks/                  # Custom hooks
│   └── config/                 # Configuration
├── types/                      # TypeScript definitions
├── styles/                     # Styling files
├── public/                     # Static assets
├── docs/                       # Documentation
└── tests/                      # Test files
```

## 🎨 Design System

### Color Palette
- **Primary Green**: `#2D5016` (African forest green)
- **Secondary Gold**: `#D4AF37` (African gold)
- **Accent Blue**: `#1E3A8A` (Deep blue)
- **Neutral Gray**: `#6B7280` (Professional gray)
- **Background Cream**: `#FEF7ED` (Warm background)

### Design Principles
- **Clean & Professional**: Modern, academic feel
- **Accessible**: WCAG 2.1 AA compliance
- **Mobile-First**: Responsive design
- **African-Inspired**: Color palette reflecting African heritage
- **Consistent**: Unified design language

## 🚀 Key Features

### 1. Admin Verification System
- **Protected Admin Dashboard**: Secure access for administrators only
- **User Verification**: Admin can verify users who register through the portal
- **Role Management**: Assign and manage user roles and permissions
- **User Analytics**: Track user registration and verification statistics
- **Bulk Operations**: Verify multiple users at once

### 2. AI Chatbot Integration
- **Intelligent Support**: AI-powered chatbot for customer assistance
- **24/7 Availability**: Round-the-clock support for users
- **Context-Aware**: Understands user queries and provides relevant responses
- **Multi-language Support**: Chatbot responses in multiple languages
- **Escalation System**: Handles complex queries by escalating to human support

### 3. Email Integration System
- **Automated Notifications**: Email alerts for user registration, course enrollment, etc.
- **Newsletter System**: Regular updates and announcements to members
- **Course Reminders**: Automated reminders for course deadlines and events
- **Admin Notifications**: Email alerts for admin actions and system events
- **SMTP Configuration**: Secure email delivery with proper authentication

### 4. Training Portal Management
- **Course Enrollment**: Members can register for courses through the training portal
- **Progress Tracking**: Monitor course completion and progress
- **Certificate Generation**: Automatic certificate generation upon course completion
- **Course Materials**: Access to course resources and materials
- **Instructor Management**: Manage instructors and course content

### 5. Unified Portal System
Instead of separate portals, create a unified dashboard with role-based access:
- **Member Dashboard**: Profile, courses, certificates
- **Professional Dashboard**: Projects, tools, analytics
- **Admin Dashboard**: User management, content management, user verification
- **Training Portal**: Course enrollment and management for registered members

### 6. Content Management
- **Blog System**: Markdown-based with rich editor
- **Course Management**: Structured course content
- **Event Management**: Calendar integration
- **Document Library**: File management system

### 7. Data Visualization
- **Regional Statistics**: Interactive maps
- **Member Analytics**: Dashboard charts
- **Project Tracking**: Progress indicators
- **Resource Usage**: Usage analytics

### 8. Search & Discovery
- **Global Search**: Across all content types
- **Filtered Search**: By category, type, region
- **Advanced Search**: Multiple criteria
- **Search Suggestions**: Auto-complete

## 🔐 Security Features

### Authentication Options

#### Option 1: Clerk
- **Pre-built UI**: Ready-to-use authentication components
- **User Management**: Built-in user dashboard and management
- **Social Providers**: Easy integration with Google, GitHub, etc.
- **Multi-Factor Auth**: Built-in 2FA support
- **Session Management**: Automatic session handling
- **Webhooks**: Real-time user events
- **Analytics**: Built-in user analytics

#### Option 2: NextAuth.js
- **Customizable**: Full control over authentication flow
- **Multiple Providers**: Support for 50+ authentication providers
- **Database Sessions**: Flexible session storage options
- **JWT Support**: Stateless authentication
- **Custom Pages**: Complete control over UI/UX
- **Middleware**: Route protection and redirects

### Authentication Security
- **JWT Tokens**: Secure token management
- **Password Hashing**: bcrypt implementation
- **Rate Limiting**: API rate limiting
- **CSRF Protection**: CSRF tokens
- **Session Management**: Secure sessions
- **Multi-Factor Authentication**: Optional 2FA support
- **Social Login**: Google, GitHub, LinkedIn integration

### Data Protection
- **Input Validation**: Zod schema validation
- **SQL Injection**: Parameterized queries
- **XSS Protection**: Content sanitization
- **HTTPS**: SSL/TLS encryption
- **Data Encryption**: Sensitive data encryption

## 📱 Information Architecture

### Simplified Navigation Structure
```
Home
├── About
│   ├── Mission & Vision
│   ├── Leadership Team
│   ├── Our Story
│   └── Contact
├── Services
│   ├── Environmental Assessment
│   ├── Geospatial Solutions
│   ├── Training & Development
│   └── Research & Innovation
├── Solutions
│   ├── Apps Portal
│   ├── Data & Analytics
│   ├── Geoportal
│   └── Modeling Tools
├── Learning
│   ├── Courses
│   ├── Certifications
│   ├── Webinars
│   └── Resources
├── Community
│   ├── Members Portal
│   ├── Events
│   ├── Blog
│   └── News
└── Support
    ├── Help Center
    ├── Documentation
    └── Contact
```

## 🛠️ Development Phases

### Phase 1: Foundation & Architecture (Weeks 1-2)
- [ ] Next.js 14 App Router setup
- [ ] SOLID principles implementation
- [ ] Base service layer architecture
- [ ] Zustand store structure
- [ ] Component library foundation

### Phase 2: Core Components (Weeks 3-4)
- [ ] DRY component implementation
- [ ] OOP service classes
- [ ] Authentication system
- [ ] Base UI components
- [ ] Form system with validation

### Phase 3: Portal System (Weeks 5-6)
- [ ] Unified portal architecture
- [ ] Role-based access control
- [ ] Portal-specific components
- [ ] Dashboard implementations
- [ ] Data visualization

### Phase 4: Content & Features (Weeks 7-8)
- [ ] Content management system
- [ ] Blog and course systems
- [ ] Search functionality
- [ ] File management
- [ ] API integrations
- [ ] AI Chatbot implementation
- [ ] Email integration system
- [ ] Admin user verification dashboard
- [ ] Training portal course management

### Phase 5: Optimization & Testing (Weeks 9-10)
- [ ] Performance optimization
- [ ] Unit and integration tests
- [ ] Accessibility compliance
- [ ] SEO implementation
- [ ] Deployment preparation

## 📊 Success Metrics

### Technical Metrics
- **Code Quality**: 90%+ test coverage
- **Performance**: < 2s page load time
- **Accessibility**: WCAG 2.1 AA compliance
- **Maintainability**: SOLID principles adherence

### Business Metrics
- **User Engagement**: 50% increase in portal usage
- **Conversion Rate**: 30% increase in registrations
- **User Satisfaction**: 4.5+ rating
- **Support Reduction**: 40% fewer support tickets

## 🔧 Current Website Issues Identified

### Technical Problems
- Modal/popup functionality issues
- Contact form errors
- Multiple login portals creating confusion
- Broken pages and incomplete content

### Content Issues
- Placeholder content ("ggggg", "CyberX", "Dom")
- Incomplete regional member data
- Generic blog content
- Outdated design and navigation

### User Experience Issues
- Complex navigation structure
- Multiple overlapping portal systems
- Inconsistent design elements
- Poor mobile responsiveness

## 🌍 Regional Focus

### Current Member Distribution
- **East Africa**: 62 members
- **South Africa**: 2 members
- **West Africa**: 8 members
- **Central Africa**: 0 members
- **North Africa**: 0 members

### Target Improvements
- Increase member engagement across all regions
- Improve portal usage by 75%
- Enhance course completion rates by 60%
- Reduce support tickets by 40%

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- PostgreSQL database
- Strapi CMS instance

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd aiergt-website

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

### Environment Variables
```env
# Database
DATABASE_URL=postgresql://username:password@localhost:5432/aiergt

# Authentication (Choose one: Clerk or NextAuth)
# Option 1: Clerk
CLERK_PUBLISHABLE_KEY=pk_test_your-clerk-key
CLERK_SECRET_KEY=sk_test_your-clerk-secret

# Option 2: NextAuth
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_GOOGLE_CLIENT_ID=your-google-client-id
NEXTAUTH_GOOGLE_CLIENT_SECRET=your-google-client-secret

# Strapi CMS
STRAPI_API_URL=http://localhost:1337
STRAPI_API_TOKEN=your-strapi-token

# Google Analytics
GA_TRACKING_ID=your-ga-id

# Email Configuration
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email@domain.com
SMTP_PASS=your-email-password

# Chatbot Configuration
OPENAI_API_KEY=your-openai-key
CHATBOT_MODEL=gpt-3.5-turbo

# Admin Configuration
ADMIN_EMAIL=admin@aiergt.africa
ADMIN_VERIFICATION_ENABLED=true

# Hosting Configuration
VERCEL_URL=your-vercel-url
CPANEL_HOST=your-cpanel-host
CPANEL_USERNAME=your-cpanel-username
CPANEL_PASSWORD=your-cpanel-password
```

## 📚 Documentation

- [API Documentation](./docs/API.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)
- [Contributing Guidelines](./docs/CONTRIBUTING.md)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is proprietary to AIERGT/Afrikeon.

## 📞 Contact

For questions or support, contact:
- **Email**: humphreyotieno04@gmail.com
- **Website**: https://aiergt.africa/

---

**Preparing Africa For Tomorrow** 🌍
