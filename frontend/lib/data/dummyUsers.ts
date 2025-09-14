import bcrypt from 'bcryptjs'

export interface DummyUser {
  id: string
  email: string
  password: string
  name: string
  phone?: string
  organization?: string
  role: 'africanConsultant' | 'partner' | 'expatriateConsultant' | 'student' | 'admin'
  isVerified: boolean
  createdAt: Date
  updatedAt: Date
}

// Dummy users for testing
export const dummyUsers: DummyUser[] = [
  // Admin User
  {
    id: "admin-001",
    email: "admin@aiergt.africa",
    password: "$2a$12$SW6zz27.RpXG6B2D5WRoQ.ZYNZYoWLv8VrCEDZi7lN35LXV75AAR2", // "admin123"
    name: "Test Admin",
    phone: "+254 700 123 456",
    organization: "AIERGT",
    role: "admin",
    isVerified: true,
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-15"),
  },
  
  // African Consultant
  {
    id: "consultant-001",
    email: "consultant@aiergt.africa",
    password: "$2a$12$UYQ9MW4rvVGIGlPjidXu7eMPl76rqra9xt0.n8C5XzkSr/fdm1b4K", // "consultant123"
    name: "Test Consultant",
    phone: "+234 800 123 456",
    organization: "Environmental Solutions Ltd",
    role: "africanConsultant",
    isVerified: true,
    createdAt: new Date("2024-02-01"),
    updatedAt: new Date("2024-02-01"),
  },
  
  // Partner Organization
  {
    id: "partner-001",
    email: "partner@aiergt.africa",
    password: "$2a$12$VRnWCTIsmlIJGmfUBAR3zOmp/Koz6iIB.cAvAwsIfIk7/.aTP1MJK", // "partner123"
    name: "Test Partner",
    phone: "+27 11 123 456",
    organization: "African Environmental Institute",
    role: "partner",
    isVerified: true,
    createdAt: new Date("2024-02-15"),
    updatedAt: new Date("2024-02-15"),
  },
  
  // Expatriate Consultant
  {
    id: "expat-001",
    email: "expat@aiergt.africa",
    password: "$2a$12$3dTr3k7SVySAcoFkNpv2c.lhJZwoZeEVmHsZfbKtUqXJuPqjrXz0O", // "expat123"
    name: "Test Expatriate",
    phone: "+1 555 123 456",
    organization: "Global Environmental Consultants",
    role: "expatriateConsultant",
    isVerified: true,
    createdAt: new Date("2024-03-01"),
    updatedAt: new Date("2024-03-01"),
  },
  
  // Student
  {
    id: "student-001",
    email: "student@aiergt.africa",
    password: "$2a$12$QUmf91lRc8PW6ll6Be9eJeEXwF03465CPQ2YOXb0hx5jlk/22pZDy", // "student123"
    name: "Test Student",
    phone: "+254 700 987 654",
    organization: "University of Nairobi",
    role: "student",
    isVerified: true,
    createdAt: new Date("2024-03-15"),
    updatedAt: new Date("2024-03-15"),
  },
  
  // Additional Admin for testing
  {
    id: "admin-002",
    email: "superadmin@aiergt.africa",
    password: "$2a$12$vxYsrKMdvBrhIjTypzHN9.5YpGcXppvDUOGpjG2u6KJ2rbCCKelRG", // "superadmin123"
    name: "Test Super Admin",
    phone: "+254 700 555 123",
    organization: "AIERGT",
    role: "admin",
    isVerified: true,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
  },
]

// Helper function to find user by email
export function findUserByEmail(email: string): DummyUser | undefined {
  return dummyUsers.find(user => user.email.toLowerCase() === email.toLowerCase())
}

// Helper function to verify password
export async function verifyPassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
  return await bcrypt.compare(plainPassword, hashedPassword)
}

// Helper function to hash password
export async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, 12)
}

// Test credentials for easy reference
export const testCredentials = {
  admin: {
    email: "admin@aiergt.africa",
    password: "admin123",
    name: "Test Admin",
    role: "admin"
  },
  superAdmin: {
    email: "superadmin@aiergt.africa", 
    password: "superadmin123",
    name: "Test Super Admin",
    role: "admin"
  },
  consultant: {
    email: "consultant@aiergt.africa",
    password: "consultant123", 
    name: "Test Consultant",
    role: "africanConsultant"
  },
  partner: {
    email: "partner@aiergt.africa",
    password: "partner123",
    name: "Test Partner", 
    role: "partner"
  },
  expat: {
    email: "expat@aiergt.africa",
    password: "expat123",
    name: "Test Expatriate",
    role: "expatriateConsultant"
  },
  student: {
    email: "student@aiergt.africa",
    password: "student123",
    name: "Test Student",
    role: "student"
  }
}
