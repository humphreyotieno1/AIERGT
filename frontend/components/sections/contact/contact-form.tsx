"use client"

import { useMemo, useState } from "react"
import { Info, Mail, Send, User, ClipboardPen } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tooltip } from "@/components/ui/tooltip"

type ContactFormState = {
  name: string
  email: string
  subject: string
  message: string
}

type ContactFormErrors = Partial<Record<keyof ContactFormState, string>>

const initialState: ContactFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
}

export function ContactForm() {
  const [formState, setFormState] = useState<ContactFormState>(initialState)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const validate = useMemo(
    () =>
      ({
        name: (value: string) => (value.trim().length >= 2 ? "" : "Please enter your full name."),
        email: (value: string) =>
          /\S+@\S+\.\S+/.test(value.trim()) ? "" : "Enter a valid email address.",
        subject: (value: string) => (value.trim().length >= 3 ? "" : "Subject should be at least 3 characters."),
        message: (value: string) =>
          value.trim().length >= 20 ? "" : "Share at least 20 characters so we can assist you properly.",
      }),
    [],
  )

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormState((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: "" }))
    setSubmitError(null)
    setIsSubmitted(false)
  }

  const handleBlur = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    if (name in validate) {
      const validator = validate[name as keyof ContactFormState]
      const message = validator?.(value) ?? ""
      setErrors((prev) => ({ ...prev, [name]: message }))
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)
    setIsSubmitted(false)

    const validationResults = Object.entries(formState).reduce<ContactFormErrors>((acc, [key, value]) => {
      const validator = validate[key as keyof ContactFormState]
      const message = validator?.(value) ?? ""
      if (message) {
        acc[key as keyof ContactFormState] = message
      }
      return acc
    }, {})

    setErrors(validationResults)

    if (Object.values(validationResults).some((message) => message)) {
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      })

      if (!response.ok) {
        const result = await response.json().catch(() => null)
        const message = result?.error ?? "We could not send your message. Please try again later."
        throw new Error(message)
      }

      setFormState(initialState)
      setIsSubmitted(true)
    } catch (error) {
      console.error("Failed to submit contact form", error)
      setSubmitError(error instanceof Error ? error.message : "An unexpected error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }

  const helperText = {
    name: "Let us know who we’re responding to.",
    email: "We’ll use this to reach you with a reply.",
    subject: "Add a quick summary so we can route your message.",
    message: "Share relevant context, timelines, or questions.",
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex w-full flex-col gap-5 rounded-3xl border border-white/50 bg-white/95 p-8 shadow-xl"
      noValidate
    >
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="name" className="text-sm font-semibold text-slate-700">
            Full Name
          </label>
          <Tooltip content={helperText.name}>
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-500">
              <Info className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          </Tooltip>
        </div>
        <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3">
          <User className="h-4 w-4 text-[#71B045]" aria-hidden="true" />
          <Input
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Jane Doe"
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="border-0 px-0"
          />
        </div>
        {errors.name ? (
          <p id="name-error" className="text-xs font-medium text-rose-500">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="email" className="text-sm font-semibold text-slate-700">
            Email Address
          </label>
          <Tooltip content={helperText.email}>
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-500">
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          </Tooltip>
        </div>
        <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3">
          <Mail className="h-4 w-4 text-[#71B045]" aria-hidden="true" />
          <Input
            id="email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="you@organisation.com"
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="border-0 px-0"
          />
        </div>
        {errors.email ? (
          <p id="email-error" className="text-xs font-medium text-rose-500">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="subject" className="text-sm font-semibold text-slate-700">
            Subject
          </label>
          <Tooltip content={helperText.subject}>
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-500">
              <ClipboardPen className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          </Tooltip>
        </div>
        <Input
          id="subject"
          name="subject"
          value={formState.subject}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="How can we help?"
          required
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "subject-error" : undefined}
        />
        {errors.subject ? (
          <p id="subject-error" className="text-xs font-medium text-rose-500">
            {errors.subject}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="message" className="text-sm font-semibold text-slate-700">
            Message
          </label>
          <Tooltip content={helperText.message}>
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-500">
              <Info className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          </Tooltip>
        </div>
        <Textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Share details about your enquiry, preferred timelines, or any additional information."
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? (
          <p id="message-error" className="text-xs font-medium text-rose-500">
            {errors.message}
          </p>
        ) : null}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#71B045] text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#5F9938] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Sending" : "Send Message"}
        <Send className="h-4 w-4" aria-hidden="true" />
      </Button>

      {submitError ? (
        <div className="rounded-xl border border-rose-100 bg-rose-50/80 p-3 text-sm font-medium text-rose-600">
          {submitError}
        </div>
      ) : null}

      {isSubmitted ? (
        <div className="rounded-xl border border-emerald-100 bg-emerald-50/80 p-3 text-sm font-medium text-emerald-600">
          Message sent successfully. We’ll be in touch shortly.
        </div>
      ) : null}
    </form>
  )
}

