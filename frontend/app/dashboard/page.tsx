import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"
import Link from "next/link"
import { ArrowRight, BookOpen, ClipboardList, LineChart, ShieldCheck, User, Bell } from "lucide-react"

export const metadata = {
  title: "Dashboard",
  description: "Overview of your AIERGT activity and quick actions",
}

const quickLinks = [
  {
    title: "Profile & Settings",
    description: "Update your personal information and preferences",
    href: "/dashboard/profile",
    icon: User,
    color: "bg-[#71B045]/10 text-[#71B045]",
  },
  {
    title: "Training Portal",
    description: "Browse courses, track progress, and manage enrollments",
    href: "/dashboard/training",
    icon: BookOpen,
    color: "bg-[#0F1023]/10 text-[#0F1023]",
  },
  {
    title: "Geoportal",
    description: "Access maps, datasets, and geospatial analytics tools",
    href: "/dashboard/geoportal",
    icon: LineChart,
    color: "bg-[#b3cde0]/20 text-[#0F1023]",
  },
  {
    title: "Support Requests",
    description: "Raise tickets and follow up on ongoing requests",
    href: "/contact",
    icon: ClipboardList,
    color: "bg-orange-100 text-orange-600",
  },
]

export default async function DashboardHomePage() {
  const session = await auth()

  if (!session?.user?.email) {
    redirect("/auth/login")
  }

  const email = session.user.email

  const [user, enrollments, notifications] = await Promise.all([
    prisma.user.findUnique({
      where: { email: email! },
      include: {
        profile: true,
        _count: {
          select: {
            enrollments: true,
            certificates: true,
            posts: true,
            projects: true,
          },
        },
      },
    }),
    prisma.courseEnrollment.findMany({
      where: { user: { email: email! } },
      include: {
        course: {
          select: {
            title: true,
            level: true,
            category: true,
          },
        },
      },
      orderBy: { enrolledAt: "desc" },
      take: 4,
    }),
    prisma.notification.findMany({
      where: { user: { email: email! } },
      orderBy: { createdAt: "desc" },
      take: 5,
    }),
  ])

  if (!user) {
    redirect("/auth/login")
  }

  const stats = [
    {
      label: "Account Status",
      value: user.isVerified ? "Verified" : "Pending Verification",
      subtext: user.isActive ? "Active" : "Inactive",
      icon: ShieldCheck,
      tone: user.isActive && user.isVerified ? "text-green-600" : "text-orange-500",
    },
    {
      label: "Enrollments",
      value: user._count.enrollments,
      subtext: "Active learning journeys",
      icon: BookOpen,
      tone: "text-[#71B045]",
    },
    {
      label: "Certificates",
      value: user._count.certificates,
      subtext: "Issued credentials",
      icon: ClipboardList,
      tone: "text-[#0F1023]",
    },
    {
      label: "Projects",
      value: user._count.projects,
      subtext: "Assignments & collaborations",
      icon: LineChart,
      tone: "text-[#b388eb]",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* Welcome Section */}
        <section className="bg-gradient-to-r from-[#71B045] to-[#0F1023] text-white rounded-3xl shadow-xl overflow-hidden">
          <div className="px-8 py-10 sm:px-12 sm:py-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <p className="uppercase tracking-widest text-sm text-white/70 mb-3">AIERGT Unified Portal</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
                Welcome back, {user.name?.split(" ")[0] || "there"}
              </h1>
              <p className="mt-4 max-w-2xl text-white/80 text-lg">
                Access your programmes, manage your profile, and stay up to date with institute updates from one place.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/dashboard/training"
                  className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2.5 text-sm font-medium backdrop-blur transition hover:bg-white/25"
                >
                  Explore training
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/dashboard/profile"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium transition hover:bg-white/10"
                >
                  Manage profile
                </Link>
              </div>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 backdrop-blur-md w-full lg:w-auto">
              <div className="text-sm uppercase tracking-widest text-white/70">Account Summary</div>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between gap-6">
                  <span className="text-white/70">Role</span>
                  <span className="font-semibold capitalize">{user.role.toLowerCase().replace(/_/g, " ")}</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span className="text-white/70">Status</span>
                  <span className="font-semibold">{user.isActive ? "Active" : "Inactive"}</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span className="text-white/70">Member since</span>
                  <span className="font-semibold">{user.createdAt.toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stat Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <p className="text-2xl font-semibold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.tone}`} />
              </div>
              <p className="text-sm text-gray-500">{stat.subtext}</p>
            </div>
          ))}
        </section>

        {/* Quick Links */}
        <section className="bg-white border border-gray-100 rounded-3xl shadow-sm p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Quick access</h2>
              <p className="text-gray-500">Jump straight into the areas you need most.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#0F1023] hover:text-[#71B045] transition"
            >
              Need help? Talk to us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 p-6 transition hover:-translate-y-1 hover:border-[#71B045]/40 hover:bg-white"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${link.color}`}>
                  <link.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#0F1023]">
                  {link.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2 leading-6">
                  {link.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#71B045]">
                  Open <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Learning */}
          <div className="lg:col-span-2 bg-white border border-gray-100 rounded-3xl shadow-sm p-8">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">Latest learning activity</h2>
                <p className="text-gray-500">Track progress on your most recent courses.</p>
              </div>
              <Link
                href="/training"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#71B045] hover:text-[#5a9036]"
              >
                View catalogue
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            {enrollments.length === 0 ? (
              <div className="border border-dashed border-gray-200 rounded-2xl p-10 text-center text-gray-500">
                You have not enrolled in any courses yet. Explore the training catalogue to get started.
              </div>
            ) : (
              <div className="space-y-4">
                {enrollments.map((enrollment) => (
                  <div
                    key={enrollment.id}
                    className="border border-gray-100 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-gray-50/30"
                  >
                    <div>
                      <p className="text-sm uppercase tracking-widest text-gray-400">
                        {enrollment.course.category.toLowerCase().replace(/_/g, " ")}
                      </p>
                      <h3 className="text-lg font-semibold text-gray-900">{enrollment.course.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Level: {enrollment.course.level.toLowerCase().replace(/_/g, " ")}
                      </p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-2">
                      <span className="inline-flex items-center gap-2 rounded-full bg-[#71B045]/10 px-3 py-1 text-sm font-medium text-[#71B045]">
                        <BookOpen className="h-4 w-4" />
                        {Number(enrollment.progress)}% complete
                      </span>
                      <span className="text-xs text-gray-400">
                        Enrolled {enrollment.enrolledAt.toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Notifications */}
          <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-8">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  <Bell className="h-5 w-5 text-[#71B045]" />
                  Recent notifications
                </h2>
                <p className="text-gray-500 text-sm">
                  Stay updated with actions that require your attention.
                </p>
              </div>
              <Link href="/dashboard/profile" className="text-sm font-medium text-[#71B045] hover:text-[#5a9036]">
                Manage preferences
              </Link>
            </div>
            {notifications.length === 0 ? (
              <div className="border border-dashed border-gray-200 rounded-2xl p-8 text-center text-gray-500">
                You’re all caught up. Notifications will appear here once available.
              </div>
            ) : (
              <ul className="space-y-4">
                {notifications.map((notification) => (
                  <li key={notification.id} className="border border-gray-100 rounded-2xl p-4 bg-gray-50/50">
                    <p className="text-sm font-semibold text-gray-900">{notification.title}</p>
                    <p className="text-sm text-gray-500 mt-1 leading-6">{notification.message}</p>
                    <span className="mt-3 block text-xs text-gray-400 uppercase tracking-widest">
                      {notification.createdAt.toLocaleString()}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}

