import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { requestPasswordReset } from '@/lib/actions/password.actions'

// Validation schema
const forgotPasswordSchema = z.object({
  email: z.string().email('Invalid email address'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate input
    const validatedData = forgotPasswordSchema.parse(body)
    const { email } = validatedData

    // Use server action for password reset
    const result = await requestPasswordReset({ email })

    if (result.success) {
      return NextResponse.json(
        {
          success: true,
          message: result.message || 'Password reset email sent successfully'
        },
        { status: 200 }
      )
    } else {
      return NextResponse.json(
        {
          success: false,
          message: result.error || 'Failed to process password reset request'
        },
        { status: 400 }
      )
    }

  } catch (error) {
    console.error('Password reset error:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid input data',
          errors: error.errors,
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error',
      },
      { status: 500 }
    )
  }
}

// Optional: Add rate limiting
export async function GET() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  )
}
