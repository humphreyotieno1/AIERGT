import { notFound } from "next/navigation"

const validTypes = ["member", "geoportal", "training"]

export default async function DashboardPage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params

  if (!validTypes.includes(type)) {
    notFound()
  }

  const dashboardConfig = {
    member: {
      title: "Member Portal",
      description: "Welcome to your member dashboard",
      color: "bg-[#71B045]",
      features: ["Profile Management", "Course Access", "Certificates", "Resources"]
    },
    geoportal: {
      title: "Geoportal",
      description: "Access geospatial data and analysis tools",
      color: "bg-[#0F1023]",
      features: ["Interactive Maps", "Data Visualization", "Analysis Tools", "Reports"]
    },
    training: {
      title: "Training Portal",
      description: "Manage your learning journey",
      color: "bg-[#0F1023]",
      features: ["Course Catalog", "Progress Tracking", "Certifications", "Learning Materials"]
    }
  }

  const config = dashboardConfig[type as keyof typeof dashboardConfig]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <div className={`mx-auto w-20 h-20 ${config.color} rounded-full flex items-center justify-center mb-4`}>
            <span className="text-white text-2xl font-bold">
              {type.charAt(0).toUpperCase()}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {config.title}
          </h1>
          <p className="text-xl text-gray-600">
            {config.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {config.features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className={`w-12 h-12 ${config.color} rounded-lg mx-auto mb-4 flex items-center justify-center`}>
                <span className="text-white font-bold">{index + 1}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature}
              </h3>
              <p className="text-gray-600 text-sm">
                Access and manage your {feature.toLowerCase()}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Coming Soon
          </h2>
          <p className="text-gray-600 mb-6">
            This dashboard is currently under development. Full functionality will be available soon.
          </p>
          <div className="bg-gray-100 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">What's Next:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Complete dashboard functionality</li>
              <li>Data integration and APIs</li>
              <li>User management system</li>
              <li>Advanced features and tools</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
