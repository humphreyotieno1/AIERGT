"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { User, Globe, BookOpen, ArrowLeft, Users, Building, GraduationCap, Eye, EyeOff } from "lucide-react"
import Link from "next/link"

const loginTypes = {
  member: {
    name: "Member Portal",
    icon: User,
    description: "Access your member dashboard, courses, and resources",
    color: "bg-[#2D5016]"
  },
  geoportal: {
    name: "Geoportal",
    icon: Globe,
    description: "Access geospatial data, maps, and analysis tools",
    color: "bg-[#1E3A8A]"
  },
  training: {
    name: "Training Portal",
    icon: BookOpen,
    description: "Access training courses, certifications, and learning materials",
    color: "bg-[#D4AF37]"
  }
}

function LoginPageContent() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  
  const searchParams = useSearchParams()
  const router = useRouter()
  
  const loginType = searchParams.get("type") as keyof typeof loginTypes || "member"
  const currentLoginType = loginTypes[loginType]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: `/dashboard/${loginType}`
      })

      if (result?.error) {
        setError("Invalid credentials. Please try again.")
      } else if (result?.ok) {
        router.push(`/dashboard/${loginType}`)
      }
    } catch (error) {
      setError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Back Button */}
        <div className="flex justify-start">
          <Link href="/" className="flex items-center text-gray-600 hover:text-[#2D5016] transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Login Type Header */}
        <div className="text-center">
          <div className={`mx-auto w-16 h-16 ${currentLoginType.color} rounded-full flex items-center justify-center mb-4`}>
            <currentLoginType.icon className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {currentLoginType.name}
          </h2>
          <p className="text-gray-600">
            {currentLoginType.description}
          </p>
        </div>

        {/* Login Form */}
        <Card>
          <CardHeader>
            <CardTitle>Sign in to your account</CardTitle>
            <CardDescription>
              Enter your credentials to access the {currentLoginType.name}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                  {error}
                </div>
              )}
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Enter your password"
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              
              <Button
                type="submit"
                className="w-full"
                disabled={isLoading}
                style={{ backgroundColor: currentLoginType.color.replace('bg-', '#') }}
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>
            </form>
            
            {/* Forgot Password Link */}
            <div className="mt-4 text-center">
              <Link 
                href="/auth/forgot-password" 
                className="text-sm text-[#2D5016] hover:underline font-medium"
              >
                Forgot your password?
              </Link>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link href="/auth/register" className="text-[#2D5016] hover:underline">
                  Register here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Other Login Options */}
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-4">Or access other portals:</p>
          <div className="flex justify-center space-x-4">
            {Object.entries(loginTypes).map(([type, config]) => (
              <Link
                key={type}
                href={`/auth/login?type=${type}`}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm transition-colors ${
                  type === loginType
                    ? config.color + " text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                <config.icon className="h-4 w-4" />
                <span>{config.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginPageContent />
    </Suspense>
  )
}
