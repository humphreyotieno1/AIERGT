import { redirect } from "next/navigation"
import Link from "next/link"
import { requireAdmin } from "@/lib/utils/auth.utils"
import { getAllUsers, getPendingVerifications } from "@/lib/actions/auth.actions"
import { handleActivateUser, handleDeactivateUser, handleVerifyUser } from "@/lib/actions/admin.actions"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Loader2, Shield, UserCheck, UserPlus, UserX } from "lucide-react"

export const metadata = {
  title: "Admin Dashboard",
  description: "Monitor registrations and manage user access across AIERGT",
}

export default async function AdminDashboardPage() {
  const session = await requireAdmin()

  if (!session.user.email) {
    redirect("/auth/login")
  }

  const [usersResult, pendingResult] = await Promise.all([
    getAllUsers(),
    getPendingVerifications(),
  ])

  if (!usersResult.success) {
    redirect("/auth/unauthorized")
  }

  const users = usersResult.users || []
  const pendingUsers = pendingResult.success ? pendingResult.users || [] : []

  const inactiveUsers = users.filter((user) => !user.isActive)
  const verifiedUsers = users.filter((user) => user.isVerified).length
  const roleBreakdown = users.reduce<Record<string, number>>((acc, user) => {
    acc[user.role] = (acc[user.role] || 0) + 1
    return acc
  }, {})

  const latestRegistrations = [...users]
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(0, 5)

  const stats = [
    {
      label: "Total users",
      value: users.length,
      subtext: "Across all portals",
      tone: "text-[#0F1023]",
      icon: UserPlus,
    },
    {
      label: "Pending approvals",
      value: pendingUsers.length,
      subtext: "Awaiting verification",
      tone: "text-orange-500",
      icon: Loader2,
    },
    {
      label: "Verified accounts",
      value: verifiedUsers,
      subtext: "Cleared for access",
      tone: "text-[#71B045]",
      icon: CheckCircle2,
    },
    {
      label: "Inactive accounts",
      value: inactiveUsers.length,
      subtext: "Disabled or rejected",
      tone: "text-red-500",
      icon: UserX,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        <section className="bg-[#0F1023] text-white rounded-3xl shadow-xl p-8 sm:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">Administrative overview</p>
              <h1 className="mt-3 text-3xl sm:text-4xl font-semibold">Welcome, {session.user.name}</h1>
              <p className="mt-4 max-w-2xl text-white/70 text-lg">
                Track new registrations, manage activation workflows, and keep the AIERGT community safe and organised.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/admin/users"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium transition hover:bg-white/20"
              >
                Open user management
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium transition hover:bg-white/10"
              >
                Back to unified dashboard
              </Link>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {stats.map((card) => (
            <div key={card.label} className="bg-white border border-gray-100 rounded-3xl shadow-sm p-6 flex flex-col gap-3">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm text-gray-500">{card.label}</p>
                  <p className="text-3xl font-semibold text-gray-900 mt-1">{card.value}</p>
                </div>
                <card.icon className={`h-9 w-9 ${card.tone}`} />
              </div>
              <p className="text-sm text-gray-500">{card.subtext}</p>
            </div>
          ))}
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white border border-gray-100 rounded-3xl shadow-sm p-8">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">Activation queue</h2>
                <p className="text-gray-500">Verify new registrations and grant platform access.</p>
              </div>
              <Link href="/admin/users" className="text-sm font-medium text-[#71B045] hover:text-[#5a9036]">
                Manage all users
              </Link>
            </div>
            {pendingUsers.length === 0 ? (
              <div className="border border-dashed border-gray-200 rounded-2xl p-10 text-center text-gray-500">
                No pending registrations right now.
              </div>
            ) : (
              <div className="space-y-4">
                {pendingUsers.map((user) => (
                  <div key={user.id} className="border border-gray-100 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>
                        <Badge variant="outline" className="capitalize">{user.role.toLowerCase().replace(/_/g, " ")}</Badge>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{user.email}</p>
                      {user.organization && (
                        <p className="text-sm text-gray-400">{user.organization}</p>
                      )}
                      <p className="text-xs text-gray-400 uppercase tracking-widest mt-2">Joined {user.createdAt.toLocaleDateString()}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <form action={handleVerifyUser.bind(null, user.id)}>
                        <Button type="submit" size="sm" className="bg-[#71B045] hover:bg-[#5a9036]">
                          <UserCheck className="h-4 w-4 mr-1" />
                          Verify & Activate
                        </Button>
                      </form>
                      <form action={handleDeactivateUser.bind(null, user.id)}>
                        <Button type="submit" size="sm" variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
                          <UserX className="h-4 w-4 mr-1" />
                          Deactivate
                        </Button>
                      </form>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-8 space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Role distribution</h2>
              <p className="text-sm text-gray-500">Snapshot of user types across AIERGT.</p>
              <div className="mt-4 space-y-3">
                {Object.entries(roleBreakdown).map(([role, count]) => (
                  <div key={role} className="flex items-center justify-between border border-gray-100 rounded-2xl px-4 py-3 bg-gray-50/40">
                    <span className="text-sm font-medium text-gray-700 capitalize">{role.toLowerCase().replace(/_/g, " ")}</span>
                    <span className="text-sm font-semibold text-gray-900">{count}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">Inactive accounts</h2>
              <p className="text-sm text-gray-500">Reactivate when a user regains access rights.</p>
              <div className="mt-4 space-y-3">
                {inactiveUsers.slice(0, 5).map((user) => (
                  <div key={user.id} className="flex items-center justify-between border border-gray-100 rounded-2xl px-4 py-3 bg-gray-50/50">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                    <form action={handleActivateUser.bind(null, user.id)}>
                      <Button type="submit" size="sm" variant="outline" className="border-[#71B045] text-[#71B045] hover:bg-[#71B045]/10">
                        <CheckCircle2 className="h-4 w-4 mr-1" />
                        Activate
                      </Button>
                    </form>
                  </div>
                ))}
                {inactiveUsers.length === 0 && (
                  <p className="text-sm text-gray-500 border border-dashed border-gray-200 rounded-2xl p-5 text-center">
                    No inactive users at the moment.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white border border-gray-100 rounded-3xl shadow-sm p-8">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Recent registrations</h2>
              <p className="text-sm text-gray-500">Monitor the latest accounts and confirm onboarding.</p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#71B045]/10 px-4 py-2 text-sm font-medium text-[#71B045]">
              <Shield className="h-4 w-4" />
              Admin mode
            </div>
          </div>
          <div className="space-y-3">
            {latestRegistrations.map((user) => (
              <div key={user.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border border-gray-100 rounded-2xl px-4 py-3 bg-gray-50/40">
                <div>
                  <p className="text-sm font-semibold text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">{user.email}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="capitalize">{user.role.toLowerCase().replace(/_/g, " ")}</Badge>
                  <Badge variant={user.isVerified ? "default" : "secondary"}>
                    {user.isVerified ? "Verified" : "Pending"}
                  </Badge>
                  <Badge variant={user.isActive ? "outline" : "destructive"}>
                    {user.isActive ? "Active" : "Inactive"}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

