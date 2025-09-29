"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { registerUser } from "@/lib/actions/auth.actions"
import { UserRole } from "@/lib/generated/prisma"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip } from "@/components/ui/tooltip"
import { ArrowLeft, User, Users, Building, Globe, GraduationCap, Eye, EyeOff } from "lucide-react"
import Link from "next/link"

const userTypes = {
  AFRICAN_CONSULTANT: {
    name: "African Consultants/Experts",
    description: "A citizen of any of the 54 AU member states",
    icon: Users,
    color: "bg-[#79BAEC] hover:bg-[#79BAEC]/90"
  },
  PARTNER: {
    name: "Partners",
    description: "Private Institution, Universities, Government Agencies, NGOs, CBOs, Consultancy Firms",
    icon: Building,
    color: "bg-[#79BAEC] hover:bg-[#79BAEC]/90"
  },
  EXPATRIATE_CONSULTANT: {
    name: "Expatriates Consultants/Experts",
    description: "Citizen from any of the following regions: Asia, Australia, Europe, North America, South America",
    icon: Globe,
    color: "bg-[#79BAEC] hover:bg-[#79BAEC]/90"
  },
  STUDENT: {
    name: "Students",
    description: "Students enrolled in environmental or geospatial programs",
    icon: GraduationCap,
    color: "bg-[#79BAEC] hover:bg-[#79BAEC]/90"
  }
}

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    organization: "",
    phone: "",
    userType: ""
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleUserTypeSelect = (userType: string) => {
    setFormData({
      ...formData,
      userType
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    if (!formData.userType) {
      setError("Please select a user type")
      setIsLoading(false)
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    try {
      const result = await registerUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        organization: formData.organization,
        role: formData.userType.toUpperCase() as UserRole
      })
      
      if (result.success) {
        // Redirect to verification pending page
        router.push("/auth/verification-pending")
      } else {
        setError(result.error || "Registration failed. Please try again.")
      }
    } catch (error) {
      setError("Registration failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/" className="flex items-center text-gray-600 hover:text-[#79BAEC] transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-[#79BAEC] rounded-full flex items-center justify-center mb-4">
            <User className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Join AIERGT
          </h2>
          <p className="text-gray-600">
            Create your account to access our services and resources
          </p>
        </div>

        {/* Main Content - Side by Side Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* User Type Selection - Left Side */}
          <div className="order-2 lg:order-1">
            <Card>
              <CardHeader>
                <CardTitle>Select Your Category</CardTitle>
                <CardDescription>
                  Choose the category that best describes your role
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(userTypes).map(([key, userType]) => (
                    <Tooltip key={key} content={userType.description} side="right">
                      <button
                        type="button"
                        onClick={() => handleUserTypeSelect(key)}
                        className={`w-full p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                          formData.userType === key
                            ? `${userType.color} text-white border-[#79BAEC]`
                            : "bg-white text-gray-700 border-gray-200 hover:border-[#79BAEC] hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            formData.userType === key ? "bg-white/20" : "bg-[#79BAEC]/10"
                          }`}>
                            <userType.icon className={`h-5 w-5 ${
                              formData.userType === key ? "text-white" : "text-[#79BAEC]"
                            }`} />
                          </div>
                          <div>
                            <h3 className={`font-semibold ${
                              formData.userType === key ? "text-white" : "text-gray-900"
                            }`}>
                              {userType.name}
                            </h3>
                            <p className={`text-sm mt-1 ${
                              formData.userType === key ? "text-white/80" : "text-gray-500"
                            }`}>
                              {userType.description}
                            </p>
                          </div>
                        </div>
                      </button>
                    </Tooltip>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Registration Form - Right Side */}
          <div className="order-1 lg:order-2">
            <Card>
              <CardHeader>
                <CardTitle>Create your account</CardTitle>
                <CardDescription>
                  Fill in your details to get started with AIERGT
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
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number (Optional)
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                      Organization (Optional)
                    </label>
                    <Input
                      id="organization"
                      name="organization"
                      type="text"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Enter your organization"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={handleChange}
                        required
                        placeholder="Create a password"
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
                  
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        placeholder="Confirm your password"
                        className="pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-[#79BAEC] hover:bg-[#79BAEC]/90"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating account..." : "Create Account"}
                  </Button>
                </form>
                
                {/* Forgot Password Link */}
                <div className="mt-4 text-center">
                  <Link 
                    href="/auth/forgot-password" 
                    className="text-sm text-[#79BAEC] hover:underline font-medium"
                  >
                    Forgot your password?
                  </Link>
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link href="/auth/login" className="text-[#79BAEC] hover:underline">
                      Sign in here
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
