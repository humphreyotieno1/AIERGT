import { NextResponse } from "next/server"
import { z } from "zod"

import { EmailService } from "@/lib/services/email.service"

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("A valid email is required"),
  phone: z.string().min(4, "Phone number is required"),
  description: z.string().min(10, "Please provide a project description"),
  categoryName: z.string().min(1, "Category name is required"),
  categorySlug: z.string().optional(),
  serviceName: z.string().optional(),
})

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    const payload = schema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      description: formData.get("description"),
      categoryName: formData.get("categoryName"),
      categorySlug: formData.get("categorySlug"),
      serviceName: formData.get("serviceName"),
    })

    let attachment: { filename: string; content: Buffer } | undefined
    const file = formData.get("file")
    if (file instanceof File && file.size > 0) {
      const bytes = await file.arrayBuffer()
      attachment = {
        filename: file.name,
        content: Buffer.from(bytes),
      }
    }

    await EmailService.sendConsultancyRequestEmails({
      ...payload,
      attachment,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Failed to send consultancy request", error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors.map((err) => err.message).join(" ") },
        { status: 400 },
      )
    }

    return NextResponse.json(
      { error: "We could not send your request. Please try again later." },
      { status: 500 },
    )
  }
}
