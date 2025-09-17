import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { AlertTriangle, Mail, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"

export default function AccountInactivePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <CardTitle className="text-2xl text-[#2D5016]">Account Inactive</CardTitle>
            <CardDescription>
              Your account has been deactivated
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center text-gray-600">
              <p className="mb-4">
                Your AIERGT account has been deactivated and is no longer accessible.
              </p>
              <p className="mb-4">
                This may be due to policy violations, account inactivity, or administrative action.
              </p>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-red-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-red-900">Need Help?</h4>
                  <p className="text-sm text-red-800 mt-1">
                    If you believe this is an error or would like to appeal this decision, 
                    please contact our support team.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="space-y-3">
                <a href="mailto:support@aiergt.africa">
                  <Button variant="aiergt" className="w-full">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Support
                  </Button>
                </a>
                <Link href="/">
                  <Button variant="outline" className="w-full">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Return to Homepage
                  </Button>
                </Link>
              </div>
            </div>

            <div className="text-center text-xs text-gray-400">
              <p>
                Support Email: <span className="text-[#2D5016]">support@aiergt.africa</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
