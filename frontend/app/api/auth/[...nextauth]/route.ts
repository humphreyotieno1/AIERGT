import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"

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
          // TODO: Replace with actual database query
          // const user = await getUserByEmail(credentials.email)
          
          // For now, return a mock user
          const mockUser = {
            id: "1",
            email: credentials.email as string,
            name: "Test User",
            role: "member",
          }

          // TODO: Verify password with bcrypt
          // const isValidPassword = await bcrypt.compare(credentials.password, user.password)
          
          if (mockUser) {
            return mockUser
          }
        } catch (error) {
          console.error("Auth error:", error)
        }

        return null
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