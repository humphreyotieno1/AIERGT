import type { Metadata } from "next"
import type { LucideIcon } from "lucide-react"
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Linkedin,
  Twitter,
  Instagram,
  ChevronRight,
  Building,
} from "lucide-react"

import { ContactForm } from "@/components/sections/contact/contact-form"

type ContactDetailEntry = {
  label: string
  href?: string
}

type ContactDetail = {
  title: string
  icon: LucideIcon
  entries: ContactDetailEntry[]
  description?: string
}

export const metadata: Metadata = {
  title: "Contact AIERGT | Get in Touch",
  description:
    "Connect with AIERGT for partnerships, training enquiries, or project collaborations. Our team responds within two working days.",
}

const contactDetails: ContactDetail[] = [
  {
    title: "Regional HQ",
    icon: Building,
    entries: [{ label: "Rue de la Corniche" }],
    description: "SIA Building 1er Etage, BP 24539 Dakar, Senegal",
  },
  {
    title: "Emails",
    icon: Mail,
    entries: [
      { label: "info@aiergt.africa", href: "mailto:info@aiergt.africa" },
      { label: "afrikeon@gmail.com", href: "mailto:afrikeon@gmail.com" },
    ],
    description: "General enquiries, partnerships, and programme support",
  },
  {
    title: "Phone",
    icon: Phone,
    entries: [
      { label: "+254 720 470 545", href: "tel:+254720470545" },
      { label: "+221 77 133 5555", href: "tel:+221771335555" },
      { label: "+221 78 595 5190", href: "tel:+221785955190" },
    ],
    description: "Weekdays 09:00 – 17:00 (East & West Africa Time)",
  },
  {
    title: "Kenya Hub",
    icon: MapPin,
    entries: [{ label: "AIERGT Hub, Nairobi, Kenya" }],
    description: "Nairobi, Kenya",
  },
  {
    title: "Working Hours",
    icon: Clock,
    entries: [
      { label: "Monday – Friday" },
      { label: "09:00 – 17:00 East Africa Time" },
    ],
  },
]

const socialLinks = [
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/company/aiergt",
  },
  {
    label: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/aiergt",
  },
  {
    label: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/aiergt",
  },
]

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-[#F2F6FF] to-white pb-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[460px] bg-[radial-gradient(circle_at_top,_rgba(121,186,236,0.15),_transparent_65%)]" />

      <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 pt-24 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#71B045]/30 bg-[#EAF3FF] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#3978C0]">
            Contact
          </span>
          <div className="max-w-3xl space-y-4">
            <h1 className="font-garamond text-4xl font-bold text-slate-900 sm:text-5xl">
              We’re here to support your climate and infrastructure ambitions
            </h1>
            <p className="text-base text-slate-600 sm:text-lg">
              Reach out for programme enquiries, partnership opportunities, or to collaborate on research and technology initiatives. Our engagement team will respond within two working days.
            </p>
          </div>
        </header>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <aside className="flex flex-col gap-8">
            <div className="rounded-3xl border border-[#DDE7F5] bg-white/90 p-6 shadow-lg">
              <h2 className="font-garamond text-2xl font-semibold text-slate-900">
                Contact Overview
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                Prefer to speak directly? Use the details below to reach our team or book a call tailored to your enquiry.
              </p>

              <div className="mt-6 space-y-5">
                {contactDetails.map(({ title, icon: Icon, entries, description }) => (
                  <div
                    key={title}
                    className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white/80 p-4 shadow-sm"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF3FF] text-[#3978C0]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                        {title}
                      </p>
                      <div className="space-y-0.5">
                        {entries.map(({ label, href }) =>
                          href ? (
                            <a
                              key={label}
                              href={href}
                              className="block text-base font-semibold text-slate-900 transition hover:text-[#3978C0]"
                            >
                              {label}
                            </a>
                          ) : (
                            <p key={label} className="text-base font-semibold text-slate-900">
                              {label}
                            </p>
                          ),
                        )}
                      </div>
                      <p className="text-sm text-slate-600">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-[#DDE7F5] bg-white/90 p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-slate-900">Connect with us</h3>
              <p className="mt-2 text-sm text-slate-600">
                Follow AIERGT for programme updates, climate insights, and open calls.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {socialLinks.map(({ label, icon: Icon, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-[#71B045]/40 bg-[#F4F8FE] px-4 py-2 text-sm font-medium text-[#3978C0] transition hover:border-[#71B045] hover:bg-white"
                    aria-label={`Follow AIERGT on ${label}`}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {label}
                    <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <ContactForm />
        </div>
      </section>

      <section className="relative mx-auto mt-20 w-full max-w-6xl px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="overflow-hidden rounded-3xl border border-[#DDE7F5] bg-white/95 shadow-2xl">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1.35fr)]">
            <div className="space-y-3 px-8 py-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#EAF3FF] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#3978C0]">
                Visit Us
              </span>
              <h2 className="font-garamond text-3xl font-semibold text-slate-900">AIERGT Map & Directions</h2>
              <p className="text-sm text-slate-600">
                Our Nairobi hub is centrally located for easy access to government ministries, partner universities, and innovation districts. Schedule a visit or check in with reception on arrival.
              </p>
            </div>
            <div className="relative min-h-[320px] overflow-hidden">
              <iframe
                title="AIERGT Nairobi headquarters on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3998.872017188225!2d36.807403811712175!3d-1.2681462985752615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d2c5b72bf1%3A0x5a985072a1762efd!2sRiverside%20Drive%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-[#DDE7F5] bg-white/95 shadow-2xl">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1.35fr)]">
            <div className="space-y-3 px-8 py-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#EAF3FF] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#3978C0]">
                West Africa Hub
              </span>
              <h2 className="font-garamond text-3xl font-semibold text-slate-900">Dakar Office Directions</h2>
              <p className="text-sm text-slate-600">
                Visit our Senegal office for strategic partnerships across Francophone Africa. Please schedule in advance so our team can host you on-site.
              </p>
            </div>
            <div className="relative min-h-[320px] overflow-hidden">
              <iframe
                title="AIERGT Dakar office on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62010.46444813167!2d-17.501470749999998!3d14.707459800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec173737dbd0505%3A0xe4bf1c87c84d14c3!2sSIA!5e0!3m2!1sen!2ssn!4v1700000000001!5m2!1sen!2ssn"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

