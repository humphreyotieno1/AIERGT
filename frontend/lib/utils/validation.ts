import { z } from "zod"

// Common validation schemas
export const emailSchema = z.string().email("Please enter a valid email address")
export const passwordSchema = z.string().min(8, "Password must be at least 8 characters")
export const phoneSchema = z.string().regex(/^\+?[\d\s-()]+$/, "Please enter a valid phone number")

// User registration schema
export const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: z.string(),
  phone: phoneSchema.optional(),
  organization: z.string().optional(),
  role: z.enum(["ADMIN", "AFRICAN_CONSULTANT", "PARTNER", "EXPATRIATE_CONSULTANT", "STUDENT"]).default("STUDENT"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

// User login schema
export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, "Password is required"),
})

// Contact form schema
export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: emailSchema,
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  organization: z.string().optional(),
})

// Course enrollment schema
export const courseEnrollmentSchema = z.object({
  courseId: z.string().min(1, "Course ID is required"),
  userId: z.string().min(1, "User ID is required"),
})

// Blog post schema
export const blogPostSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  content: z.string().min(50, "Content must be at least 50 characters"),
  excerpt: z.string().min(20, "Excerpt must be at least 20 characters"),
  tags: z.array(z.string()).optional(),
  published: z.boolean().default(false),
})

export type RegisterFormData = z.infer<typeof registerSchema>
export type LoginFormData = z.infer<typeof loginSchema>
export type ContactFormData = z.infer<typeof contactSchema>
export type CourseEnrollmentData = z.infer<typeof courseEnrollmentSchema>
export type BlogPostData = z.infer<typeof blogPostSchema>
