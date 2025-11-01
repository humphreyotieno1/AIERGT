import NextAuth from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

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

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
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
          // Find user in database
          const user = await prisma.user.findUnique({
            where: { email: credentials.email as string },
            include: { profile: true }
          })
          
          if (!user) {
            console.log("User not found:", credentials.email)
            return null
          }

          // Check password against stored hash
          if (user.password) {
            const isValidPassword = await bcrypt.compare(
              credentials.password as string, 
              user.password
            )
            
            if (!isValidPassword) {
              console.log("Invalid password for:", credentials.email)
              return null
            }
          } else {
            console.log("No password set for user:", credentials.email)
            return null
          }

          if (!user.isVerified) {
            throw new Error("ACCOUNT_NOT_VERIFIED")
          }

          if (!user.isActive) {
            throw new Error("ACCOUNT_INACTIVE")
          }

          // Return user data (without password)
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
          }
        } catch (error) {
          if (error instanceof Error && (error.message === "ACCOUNT_NOT_VERIFIED" || error.message === "ACCOUNT_INACTIVE")) {
            throw error
          }
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
