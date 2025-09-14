import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import { findUserByEmail, verifyPassword } from "@/lib/data/dummyUsers"

// Extend NextAuth types
declare module "next-auth" {
  interface User {
    role?: string
  }
  
  interface Session {
    user: {
      id: string
      name?: string | null
      email?: string | null
      image?: string | null
      role?: string
    }
  }
}

const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.NEXTAUTH_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NEXTAUTH_GOOGLE_CLIENT_SECRET!,
    }),
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        try {
          // Find user in dummy users
          const user = findUserByEmail(credentials.email as string)
          
          if (!user) {
            console.log("User not found:", credentials.email)
            return null
          }

          // Verify password
          const isValidPassword = await verifyPassword(credentials.password as string, user.password)
          
          // Debug logging
          console.log("Debug - Email:", credentials.email)
          console.log("Debug - Password:", credentials.password)
          console.log("Debug - Stored hash:", user.password)
          console.log("Debug - Verification result:", isValidPassword)
          
          if (!isValidPassword) {
            console.log("Invalid password for:", credentials.email)
            return null
          }

          // Return user data (without password)
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
          }
        } catch (error) {
          console.error("Auth error:", error)
          return null
        }
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.sub!
        session.user.role = token.role as string
      }
      return session
    },
  },
  pages: {
    signIn: "/auth/login",
  },
})

export const { GET, POST } = handlers