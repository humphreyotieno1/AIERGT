import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Mail, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function VerificationPendingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-orange-600" />
            </div>
            <CardTitle className="text-2xl text-[#71B045]">Verification Pending</CardTitle>
            <CardDescription>
              Your account is awaiting admin verification
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center text-gray-600">
              <p className="mb-4">
                Thank you for registering with AIERGT! Your account has been submitted for verification.
              </p>
              <p className="mb-4">
                Our admin team will review your registration and verify your account. You will receive an email notification once your account has been approved.
              </p>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-blue-900">What happens next?</h4>
                  <ul className="text-sm text-blue-800 mt-1 space-y-1">
                    <li>• Admin will review your registration details</li>
                    <li>• You'll receive an email confirmation</li>
                    <li>• Access will be granted to the platform</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-500 mb-4">
                Verification typically takes 24-48 hours during business days.
              </p>
              <div className="space-y-3">
                <Link href="/auth/login">
                  <Button variant="outline" className="w-full mb-2">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Login
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="aiergt" className="w-full">
                    Return to Homepage
                  </Button>
                </Link>
              </div>
            </div>

            <div className="text-center text-xs text-gray-400">
              <p>
                Need help? Contact us at{' '}
                <a href="mailto:support@aiergt.africa" className="text-[#71B045] hover:underline">
                  support@aiergt.africa
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
