import { NextResponse } from "next/server"
import { z } from "zod"

import { EmailService } from "@/lib/services/email.service"

const schema = z.object({
  name: z.string().min(2, "Please provide your full name."),
  email: z.string().email("Enter a valid email address."),
  subject: z.string().min(3, "Subject must be at least 3 characters."),
  message: z.string().min(20, "Message must be at least 20 characters."),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const payload = schema.parse(body)

    await EmailService.sendContactMessage(payload)

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: error.errors.map((issue) => issue.message).join(" "),
        },
        { status: 400 },
      )
    }

    console.error("Failed to process contact submission", error)

    return NextResponse.json(
      { error: "We could not send your message. Please try again later." },
      { status: 500 },
    )
  }
}

