"use client"

import { useMemo, useRef, useState } from "react"
import { User, Mail, Phone, FileText, UploadCloud, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type RequestQuoteFormProps = {
  categoryName: string
  categorySlug: string
  serviceName?: string
  defaultDescription?: string
}

type QuoteFormState = {
  name: string
  email: string
  phone: string
  description: string
  file?: File | null
}

const initialState: QuoteFormState = {
  name: "",
  email: "",
  phone: "",
  description: "",
  file: null,
}

export function RequestQuoteForm({
  categoryName,
  categorySlug,
  serviceName,
  defaultDescription,
}: RequestQuoteFormProps) {
  const [formState, setFormState] = useState<QuoteFormState>({
    ...initialState,
    description: defaultDescription ?? "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target
    setFormState((prev) => ({ ...prev, [name]: value }))
    setIsSubmitted(false)
    setErrorMessage(null)
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    setFormState((prev) => ({ ...prev, file }))
    setIsSubmitted(false)
    setErrorMessage(null)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setIsSubmitted(false)
    setErrorMessage(null)

    try {
      const formData = new FormData()
      formData.append("name", formState.name)
      formData.append("email", formState.email)
      formData.append("phone", formState.phone)
      formData.append("description", formState.description)
      formData.append("categoryName", categoryName)
      formData.append("categorySlug", categorySlug)
      if (serviceName) {
        formData.append("serviceName", serviceName)
      }
      if (formState.file) {
        formData.append("file", formState.file)
      }

      const response = await fetch("/api/consultancy/request", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        const result = await response.json().catch(() => null)
        const message = result?.error ?? "We could not send your request. Please try again later."
        throw new Error(message)
      }

      setFormState({ ...initialState, description: defaultDescription ?? "" })
      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }
      setIsSubmitted(true)
    } catch (error) {
      console.error(error)
      setErrorMessage(error instanceof Error ? error.message : "An unexpected error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }

  const headingDescription = useMemo(() => {
    if (defaultDescription) {
      return defaultDescription
    }
    return "Share the essentials and our team will respond with a tailored proposal within two working days."
  }, [defaultDescription])

  return (
    <section
      id="request-quote"
      className="relative overflow-hidden rounded-3xl border border-[#79BAEC]/30 bg-white/90 shadow-2xl backdrop-blur-sm"
    >
      <div className="pointer-events-none absolute inset-0" />
      <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.1fr,1.1fr] 2xl:grid-cols-[1.3fr,0.9fr]">
        <div className="col-span-full flex flex-col justify-center gap-6 pb-2 lg:col-span-2">
          <div className="inline-flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-[#79BAEC]" />
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#79BAEC]">
              Request a Quote
            </span>
          </div>
          <div>
            <h2 className="font-garamond text-3xl font-bold text-slate-900 sm:text-4xl">
              Let&apos;s scope your {categoryName.toLowerCase()} engagement
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-600 sm:text-base">
              {headingDescription}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-xs font-medium uppercase text-slate-500">
            <span className="flex items-center gap-2 rounded-full border border-slate-200/80 bg-white px-3 py-2 shadow-sm">
              <Mail className="h-3.5 w-3.5 text-[#79BAEC]" /> Response in 48 hours
            </span>
            <span className="flex items-center gap-2 rounded-full border border-slate-200/80 bg-white px-3 py-2 shadow-sm">
              <FileText className="h-3.5 w-3.5 text-[#79BAEC]" /> Confidential review
            </span>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="relative grid gap-4 rounded-3xl border border-white/80 bg-white/95 p-6 shadow-lg lg:col-span-2 lg:p-8"
          encType="multipart/form-data"
        >
          <input type="hidden" name="categoryName" value={categoryName} />
          <input type="hidden" name="categorySlug" value={categorySlug} />
          {serviceName ? (
            <input type="hidden" name="serviceName" value={serviceName} />
          ) : null}

          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-semibold text-slate-700">
              Your Name
            </label>
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3">
              <User className="h-4 w-4 text-[#79BAEC]" />
              <Input
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="border-0 px-0"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-semibold text-slate-700">
              Your Email
            </label>
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3">
              <Mail className="h-4 w-4 text-[#79BAEC]" />
              <Input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="name@organisation.com"
                className="border-0 px-0"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-sm font-semibold text-slate-700">
              Phone Number
            </label>
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3">
              <Phone className="h-4 w-4 text-[#79BAEC]" />
              <Input
                id="phone"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                placeholder="Include country code"
                className="border-0 px-0"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="description" className="text-sm font-semibold text-slate-700">
              Project Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formState.description}
              onChange={handleChange}
              placeholder="Briefly outline scope, site location, timelines, and any compliance targets."
              className="min-h-[150px] rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-sm focus:border-[#79BAEC] focus:outline-none focus:ring-2 focus:ring-[#79BAEC]/40"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="supporting-file" className="text-sm font-semibold text-slate-700">
              Attach Supporting File (optional)
            </label>
            <label
              htmlFor="supporting-file"
              className="flex cursor-pointer items-center justify-between gap-3 rounded-xl border border-dashed border-[#79BAEC]/50 bg-[#F4F8FE] px-4 py-3 text-sm text-slate-600 transition hover:border-[#79BAEC] hover:bg-white"
            >
              <div className="flex items-center gap-3">
                <UploadCloud className="h-5 w-5 text-[#79BAEC]" />
                <span>
                  {formState.file ? formState.file.name : "Upload project brief, TOR or site layout"}
                </span>
              </div>
              <span className="rounded-full bg-[#79BAEC]/15 px-3 py-1 text-xs font-semibold text-[#79BAEC]">
                Browse
              </span>
            </label>
            <input
              id="supporting-file"
              name="file"
              type="file"
              onChange={handleFileChange}
              ref={fileInputRef}
              className="sr-only"
            />
          </div>

          <Button
            type="submit"
            className="mt-2 w-full rounded-xl bg-[#79BAEC] py-3 text-sm font-semibold text-white transition hover:bg-[#5EA6E5] disabled:cursor-not-allowed disabled:opacity-70"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send message"}
          </Button>

          {errorMessage && (
            <div className="flex items-center gap-2 rounded-lg bg-rose-50/90 p-3 text-sm font-medium text-rose-600">
              <AlertCircle className="h-4 w-4" /> {errorMessage}
            </div>
          )}

          {isSubmitted && (
            <div className="flex items-center justify-center gap-2 rounded-lg bg-emerald-50/90 p-3 text-sm font-medium text-emerald-600">
              <CheckCircle className="h-4 w-4" /> Request received. Check your email for confirmation.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
