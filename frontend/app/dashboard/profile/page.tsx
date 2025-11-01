import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"
import Link from "next/link"
import { CalendarCheck, Clock, Mail, MapPin, Phone, Settings, ShieldCheck, User } from "lucide-react"

export const metadata = {
  title: "Profile Dashboard",
  description: "Manage your AIERGT profile, account settings, and preferences",
}

export default async function ProfileDashboardPage() {
  const session = await auth()

  if (!session?.user?.email) {
    redirect("/auth/login")
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email! },
    include: {
      profile: true,
      _count: {
        select: {
          enrollments: true,
          certificates: true,
          posts: true,
          notifications: true,
        },
      },
    },
  })

  if (!user) {
    redirect("/auth/login")
  }

  const profile = user.profile
  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: user.email,
    },
    {
      icon: Phone,
      label: "Phone",
      value: user.phone || "Add a phone number",
      muted: !user.phone,
    },
    {
      icon: MapPin,
      label: "Location",
      value: profile?.location || "Add your location",
      muted: !profile?.location,
    },
    {
      icon: CalendarCheck,
      label: "Member since",
      value: user.createdAt.toLocaleDateString(),
    },
  ]

  const accountStatusItems = [
    {
      label: "Verification",
      value: user.isVerified ? "Verified" : "Pending",
      tone: user.isVerified ? "text-green-600" : "text-orange-500",
    },
    {
      label: "Activation",
      value: user.isActive ? "Active" : "Inactive",
      tone: user.isActive ? "text-green-600" : "text-red-500",
    },
    {
      label: "Role",
      value: user.role.toLowerCase().replace(/_/g, " "),
      tone: "text-[#0F1023]",
    },
  ]

  const preferenceItems = [
    {
      label: "Preferred language",
      value: profile?.language?.toUpperCase() || "EN",
    },
    {
      label: "Timezone",
      value: profile?.timezone || "Africa/Nairobi",
    },
    {
      label: "Website",
      value: profile?.website || "Add personal website",
      muted: !profile?.website,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <section className="bg-white border border-gray-100 rounded-3xl shadow-sm p-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-[#71B045]/10 text-[#71B045] flex items-center justify-center text-2xl font-semibold">
                {user.name?.charAt(0).toUpperCase() || <User className="h-8 w-8" />}
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-gray-400">Profile Dashboard</p>
                <h1 className="text-3xl font-semibold text-gray-900">{user.name}</h1>
                <p className="text-gray-500">
                  Manage your account information, security, and communication preferences in one place.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/auth/forgot-password"
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:border-[#71B045] hover:text-[#71B045]"
              >
                <ShieldCheck className="h-4 w-4" />
                Update security
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 rounded-full bg-[#71B045] px-4 py-2 text-sm font-medium text-white shadow hover:bg-[#5a9036]"
              >
                Back to dashboard
              </Link>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Contact & Organization */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-3 p-4 border border-gray-100 rounded-2xl bg-gray-50/40">
                    <item.icon className="h-5 w-5 text-[#71B045] mt-1" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-400">{item.label}</p>
                      <p className={`text-sm font-medium text-gray-900 ${item.muted ? "text-gray-400" : ""}`}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Activity snapshot</h2>
                  <p className="text-sm text-gray-500">Summary of your engagement across AIERGT portals.</p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#0F1023]/10 px-3 py-1 text-xs font-medium text-[#0F1023]">
                  <Clock className="h-4 w-4" />
                  Updated {new Date().toLocaleTimeString()}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-5">
                  <p className="text-xs uppercase tracking-widest text-gray-400">Enrolments</p>
                  <p className="mt-2 text-3xl font-semibold text-gray-900">{user._count.enrollments}</p>
                  <p className="text-sm text-gray-500 mt-1">Active training commitments</p>
                </div>
                <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-5">
                  <p className="text-xs uppercase tracking-widest text-gray-400">Certificates</p>
                  <p className="mt-2 text-3xl font-semibold text-gray-900">{user._count.certificates}</p>
                  <p className="text-sm text-gray-500 mt-1">Issued learning credentials</p>
                </div>
                <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-5">
                  <p className="text-xs uppercase tracking-widest text-gray-400">Notifications</p>
                  <p className="mt-2 text-3xl font-semibold text-gray-900">{user._count.notifications}</p>
                  <p className="text-sm text-gray-500 mt-1">Messages received</p>
                </div>
              </div>
            </div>
          </div>

          {/* Account Status & Preferences */}
          <div className="space-y-6">
            <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Account status</h2>
              <div className="space-y-4">
                {accountStatusItems.map((item) => (
                  <div key={item.label} className="flex items-center justify-between border border-gray-100 rounded-2xl px-4 py-3 bg-gray-50/50">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-400">{item.label}</p>
                      <p className={`text-sm font-semibold ${item.tone}`}>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Preferences</h2>
              <div className="space-y-3">
                {preferenceItems.map((item) => (
                  <div key={item.label} className="border border-gray-100 rounded-2xl px-4 py-3 bg-gray-50/40">
                    <p className="text-xs uppercase tracking-widest text-gray-400">{item.label}</p>
                    <p className={`text-sm font-medium text-gray-900 ${item.muted ? "text-gray-400" : ""}`}>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#71B045] hover:text-[#5a9036]"
              >
                Request profile assistance
              </Link>
            </div>

            <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Profile completeness</h2>
              <p className="text-sm text-gray-500">
                Add missing details to unlock personalised recommendations across AIERGT.
              </p>
              <div className="mt-4 space-y-2">
                {[
                  { label: "Organization", complete: Boolean(user.organization) },
                  { label: "Bio", complete: Boolean(profile?.bio) },
                  { label: "Website", complete: Boolean(profile?.website) },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">{item.label}</span>
                    <span className={`font-medium ${item.complete ? "text-[#71B045]" : "text-gray-400"}`}>
                      {item.complete ? "Complete" : "Pending"}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                href="/dashboard/profile?edit=true"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#0F1023] px-4 py-2 text-sm font-medium text-white hover:bg-[#161739]"
              >
                Update profile details
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

