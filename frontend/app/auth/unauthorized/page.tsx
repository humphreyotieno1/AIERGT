import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { Shield, ArrowLeft, Home } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-yellow-600" />
            </div>
            <CardTitle className="text-2xl text-[#2D5016]">Access Denied</CardTitle>
            <CardDescription>
              You don't have permission to access this area
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center text-gray-600">
              <p className="mb-4">
                You don't have the required permissions to access this section of the platform.
              </p>
              <p className="mb-4">
                This area is restricted based on your user role and verification status.
              </p>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-yellow-900">Need Access?</h4>
                  <p className="text-sm text-yellow-800 mt-1">
                    If you believe you should have access to this area, please contact your administrator 
                    or our support team for assistance.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="space-y-3">
                <Link href="/dashboard">
                  <Button variant="aiergt" className="w-full">
                    Go to Dashboard
                  </Button>
                </Link>
                <div className="flex gap-2">
                  <Link href="/" className="flex-1">
                    <Button variant="outline" className="w-full">
                      <Home className="h-4 w-4 mr-2" />
                      Home
                    </Button>
                  </Link>
                  <Link href="/auth/login" className="flex-1">
                    <Button variant="outline" className="w-full">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Login
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center text-xs text-gray-400">
              <p>
                Contact support: <span className="text-[#2D5016]">support@aiergt.africa</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
