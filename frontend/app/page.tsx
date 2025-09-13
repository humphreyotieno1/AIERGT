import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import Link from "next/link"
import { ArrowRight, Globe, Users, BookOpen, MapPin } from "lucide-react"

export default function HomePage() {
  const features = [
    {
      icon: Globe,
      title: "Environmental Research",
      description: "Leading research in environmental sustainability and conservation across Africa.",
    },
    {
      icon: MapPin,
      title: "Geospatial Technology",
      description: "Advanced mapping and spatial analysis tools for environmental monitoring.",
    },
    {
      icon: Users,
      title: "Professional Training",
      description: "Comprehensive training programs for environmental and geospatial professionals.",
    },
    {
      icon: BookOpen,
      title: "Knowledge Sharing",
      description: "Access to research, publications, and best practices in environmental science.",
    },
  ]

  const stats = [
    { label: "Regional Members", value: "72+" },
    { label: "Research Projects", value: "150+" },
    { label: "Training Courses", value: "50+" },
    { label: "Countries Covered", value: "15+" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section
      <section className="bg-gradient-to-br from-[#FEF7ED] to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#2D5016] mb-6">
              Preparing Africa For Tomorrow
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              The African Institute for Environmental Research and Geospatial Technology 
              leads in providing sustainable environmental and geospatial solutions across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/register">
                <Button size="lg" variant="aiergt" className="flex items-center space-x-2">
                  <span>Join Our Community</span>
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      // Stats Section
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#2D5016] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      // Features Section
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5016] mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for environmental research, geospatial technology, 
              and professional development across Africa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-[#2D5016] rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      // CTA Section
      <section className="py-20 bg-[#2D5016]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our community of environmental professionals and researchers 
            working towards a sustainable future for Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/register">
              <Button size="lg" variant="aiergtSecondary" className="flex items-center space-x-2">
                <span>Get Started Today</span>
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#2D5016]">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  )
}