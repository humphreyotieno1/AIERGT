"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { useSession, signOut } from "next-auth/react"
import { Button } from "@/components/ui/Button"
import { useLanguage } from "@/lib/contexts/LanguageContext"
import { 
  Menu, 
  X, 
  User, 
  LogOut, 
  ChevronDown, 
  ChevronRight,
  ChevronLeft,
  Globe, 
  Mail, 
  Facebook, 
  Twitter, 
  Youtube, 
  Linkedin, 
  Instagram,
  Settings,
  Phone,
  MapPin,
  Calendar,
  FileText,
  Users,
  Award,
  BookOpen,
  Bell,
  Building,
  UserCircle,
  Shield,
  LayoutDashboard,
} from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false)
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState<string[]>([])
  const [mobileCurrentSection, setMobileCurrentSection] = useState<string | null>(null)
  const { data: session, status } = useSession()
  const { currentLanguage, setLanguage, languages } = useLanguage()

  // Refs for click outside detection
  const languageDropdownRef = useRef<HTMLDivElement>(null)
  const loginDropdownRef = useRef<HTMLDivElement>(null)
  const profileDropdownRef = useRef<HTMLDivElement>(null)

  // Click outside detection for dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false)
      }
      if (loginDropdownRef.current && !loginDropdownRef.current.contains(event.target as Node)) {
        setIsLoginDropdownOpen(false)
      }
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target as Node)) {
        setIsProfileDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const toggleSection = (sectionName: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionName) 
        ? prev.filter(name => name !== sectionName)
        : [...prev, sectionName]
    )
  }

  const openMobileSection = (sectionName: string) => {
    setMobileCurrentSection(sectionName)
  }

  const closeMobileSection = () => {
    setMobileCurrentSection(null)
  }

  const navigation = [
    { 
      name: "Home", 
      href: "/",
      icon: MapPin,
      description: "Welcome to AIERGT - Preparing Africa For Tomorrow"
    },
    { 
      name: "About", 
      href: "/about",
      icon: Users,
      description: "Learn about our mission, leadership, and organizational structure",
      dropdown: [
        { 
          name: "Mission and Vision", 
          href: "/about/mission",
          icon: Award,
          description: "Our commitment to environmental sustainability and geospatial innovation across Africa"
        },
        { 
          name: "Structure", 
          href: "/about/structure",
          icon: Users,
          description: "Meet the experts driving environmental research and geospatial technology"
        },
        { 
          name: "Contact Us", 
          href: "/contact",
          icon: Phone,
          description: "Get in touch with our team of environmental and geospatial experts"
        }
      ]
    },
    { 
      name: "Consultancy Services", 
      href: "/services",
      icon: Settings,
      description: "Professional environmental and geospatial consulting solutions",
      dropdown: [
        { 
          name: "Environmental Assessment", 
          href: "/services/environmental",
          icon: Globe,
          description: "Comprehensive environmental impact assessments and sustainability evaluations"
        },
        { 
          name: "Geospatial Assessment and Earth Observation", 
          href: "/services/geospatial",
          icon: MapPin,
          description: "Advanced mapping, GIS analysis, and spatial data management solutions"
        },
        { 
          name: "Social Assessment and Development Planning", 
          href: "/services/social",
          icon: Users,
          description: "Social impact assessments and community engagement strategies"
        },
        { 
          name: "Environmental Monitoring", 
          href: "/services/monitoring",
          icon: Bell,
          description: "Continuous environmental monitoring and compliance management systems"
        },
        {
          name: "Environmental Planning",
          href: "/services/planning",
          icon: Building,
          description: "Environmental planning and sustainable development strategies"
        },
        {
          name: "Environmental Modelling",
          href: "/services/modelling",
          icon: Globe,
          description: "Environmental modelling and simulation tools"
        },
        {
          name: "Environmetal Management",
          href: "/services/management",
          icon: Building,
          description: "Environmental management and compliance systems"
        },
        {
          name: "Environment and Security",
          href: "/services/security",
          icon: Building,
          description: "Environmental security and risk assessment"
        },
        {
          name: "Consultancy Services",
          href: "/services/consultancy",
          icon: Settings,
          description: "Consultancy services for environmental and geospatial projects"
        },
        {
          name: "Climate Change and Renewable Energy",
          href: "/services/climate",
          icon: Globe,
          description: "Climate change adaptation strategies and carbon footprint assessments"
        },
        {
          name: "Management Systems Certifications",
          href: "/services/certifications",
          icon: Award,
          description: "Management systems certifications for environmental and geospatial projects"
        }
      ]
    },
    { 
      name: "RED", 
      href: "/red",
      icon: FileText,
      description: "Research, Enterprise Development, and Innovation initiatives",
      dropdown: [
        { 
          name: "Research", 
          href: "/red/research",
          icon: BookOpen,
          description: "Cutting-edge environmental research and geospatial technology development"
        },
        { 
          name: "Enterprise Development", 
          href: "/red/enterprise",
          icon: Award,
          description: "Supporting environmental startups and sustainable business development"
        }
      ]
    },
    { 
      name: "Training", 
      href: "/training",
      icon: Award,
      description: "Online Professional Short Courses",
      dropdown: [
        { 
          name: "Online Courses", 
          href: "/training/courses",
          icon: BookOpen,
          description: "Comprehensive online training programs for environmental and geospatial professionals"
        },
        {
          name: "Online Certificate and Diploma Courses",
          href: "/training/certificate",
          icon: Award,
          description: "Industry-recognized certifications in environmental assessment and GIS"
        },
        {
          name: "Online Bachelor's Degree Courses",
          href: "/training/bachelor",
          icon: Award,
          description: "Industry-recognized certifications in environmental assessment and GIS"
        },
        {
          name: "Online Master's and PhD Courses",
          href: "/training/master",
          icon: Award,
          description: "Industry-recognized certifications in environmental assessment and GIS"
        },
        { 
          name: "Plans and Pricing", 
          href: "/training/pricing",
          icon: Settings,
          description: "Flexible training packages and pricing options for individuals and organizations"
        }
      ]
    },
    { 
      name: "Blogs", 
      href: "/blogs",
      icon: BookOpen,
      description: "Latest insights, research findings, and industry trends"
    },
    { 
      name: "App & Data", 
      href: "/apps",
      icon: Settings,
      description: "Digital tools and data resources for environmental professionals",
      dropdown: [
        { 
          name: "Apps Portal", 
          href: "/apps/portal",
          icon: Settings,
          description: "Access to specialized environmental and geospatial applications"
        },
        {
          name: "Baseline",
          href: "/apps/baseline",
          icon: Settings,
          description: "Access to baseline environmental and geospatial data"
        },
        { 
          name: "Geoportal", 
          href: "/apps/geoportal",
          icon: MapPin,
          description: "Interactive mapping platform with environmental data visualization"
        },
        {
          name: "Drone Application",
          href: "/apps/drone",
          icon: Settings,
          description: "Access to drone applications for environmental and geospatial data collection"
        },
        {
          name: "Metadata Catalog",
          href: "/apps/metadata",
          icon: Settings,
          description: "Access to metadata catalog for environmental and geospatial data"
        },
        { 
          name: "Product Catalog", 
          href: "/apps/data",
          icon: FileText,
          description: "Comprehensive database of environmental and geospatial datasets"
        }
      ]
    },
    { 
      name: "Media", 
      href: "/media",
      icon: Calendar,
      description: "Events, gallery, and multimedia content",
      dropdown: [
        { 
          name: "Events", 
          href: "/media/events",
          icon: Calendar,
          description: "Conferences, workshops, and networking events for environmental professionals"
        },
        {
          name: "Library",
          href: "/media/library",
          icon: BookOpen,
          description: "Access to library for environmental and geospatial data"
        },
        {
          name: "Newsletter",
          href: "/media/newsletter",
          icon: Mail,
          description: "Access to newsletter for environmental and geospatial data"
        },
        { 
          name: "Gallery", 
          href: "/media/gallery",
          icon: FileText,
          description: "Visual documentation of our projects and environmental initiatives"
        },
        { 
          name: "Videos", 
          href: "/media/videos",
          icon: Bell,
          description: "Educational videos, project showcases, and expert interviews"
        }
      ]
    },
    { 
      name: "Contact", 
      href: "/contact",
      icon: Phone,
      description: "Get in touch with our team of environmental and geospatial experts"
    }
  ]


  const loginOptions = [
    { name: "Member Portal", href: "/auth/login?type=member", icon: User },
    { name: "Geoportal", href: "/auth/login?type=geoportal", icon: Globe },
    { name: "Training Portal", href: "/auth/login?type=training", icon: BookOpen }
  ]

  return (
    <>
      {/* Top Organization Title Bar */}
      <div className="bg-[#79BAEC] text-white py-2 sm:py-3">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center min-h-0">
            {/* Social Media Icons */}
            <div className="flex items-center space-x-2 sm:space-x-4 ">
              <Link href="https://www.facebook.com/profile.php?id=100066952923372#" target="_blank" className="hover:text-[#6bb6ff] transition-colors">
                <Facebook className="h-3 w-3 sm:h-4 sm:w-4" />
              </Link>
              <Link href="https://x.com/aiergt" target="_blank" className="hover:text-[#6bb6ff] transition-colors">
                <Twitter className="h-3 w-3 sm:h-4 sm:w-4" />
              </Link>
              <Link href="https://www.youtube.com/channel/UCHCIovKKlsdytFxRUTAJrGQ" target="_blank" className="hover:text-[#6bb6ff] transition-colors">
                <Youtube className="h-3 w-3 sm:h-4 sm:w-4" />
              </Link>
              <Link href="https://www.linkedin.com/company/african-institute-for-environmental-research-and-geospatial-technology/" target="_blank" className="hover:text-[#6bb6ff] transition-colors">
                <Linkedin className="h-3 w-3 sm:h-4 sm:w-4" />
              </Link>
              <Link href="https://www.instagram.com/a.i.e.r.g.t/" target="_blank" className="hover:text-[#6bb6ff] transition-colors">
                <Instagram className="h-3 w-3 sm:h-4 sm:w-4" />
              </Link>
            </div>

            {/* Organization Title - Hidden on mobile */}
            <div className="flex-1 text-center hidden sm:block">
              <h1 className="font-garamond text-sm sm:text-lg font-bold text-white">
                African Institute For Environmental Research and Geospatial Technology
              </h1>
            </div>

            {/* Right Side - Language & Mail */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              {/* Language Dropdown */}
              <div className="relative" ref={languageDropdownRef}>
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="flex items-center space-x-1 bg-white text-gray-700 px-1 py-1 sm:px-2 sm:py-1 rounded border hover:bg-gray-50 transition-colors"
                >
                  <Globe className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-xs sm:text-sm">{currentLanguage.flag} {currentLanguage.name}</span>
                  <ChevronDown className="h-2 w-2 sm:h-3 sm:w-3" />
                </button>
                
                {isLanguageOpen && (
                  <div className="absolute right-0 mt-2 w-32 sm:w-36 lg:w-48 bg-white rounded-md shadow-lg border z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang)
                          setIsLanguageOpen(false)  
                        }}
                        className={`flex items-center space-x-2 px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm w-full text-left transition-colors ${
                          lang.code === currentLanguage.code
                            ? "bg-[#87ceeb] text-white"
                            : "text-gray-700 hover:bg-gray-100 hover:text-[#6bb6ff]"
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mail Button */}
              <Link href="/contact">
                <Button variant="outline" size="sm" className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50 px-2 sm:px-3 py-1.5 sm:py-2">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4 mr-0 sm:mr-1" />
                  <span className="hidden sm:inline">Mails</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
                <Image
                  src="/logo.png"
                  alt="AIERGT Logo"
                  width={48}
                  height={48}
                  priority
                  className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg object-contain"
                />
                {/* Organization Name for Mobile */}
                <div className="sm:hidden">
                  <span className="text-sm sm:text-lg font-bold text-[#87ceeb]">A.I.E.R.G.T</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      item.name === "Home"
                        ? "text-[#87ceeb]"
                        : "text-gray-700 hover:text-[#87ceeb]"
                    }`}
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown className="inline h-3 w-3 ml-1" />}
                  </Link>
                  
                  {/* Enhanced Dropdown Menu - Three Columns for Many Sublinks */}
                  {item.dropdown && (
                    <div className={`absolute left-0 mt-2 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 ${
                      item.dropdown.length > 6 ? 'w-[900px]' : 'w-[600px]'
                    }`}>
                      <div className="p-6">
                        {/* Header */}
                        <div className="flex items-center space-x-3 mb-6 pb-4 border-b">
                          <div className="w-10 h-10 bg-[#87ceeb] rounded-lg flex items-center justify-center">
                            <item.icon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg text-[#87ceeb]">{item.name}</h3>
                            <p className="text-sm text-gray-600">{item.description}</p>
                          </div>
                        </div>
                        
                        {/* Menu Items - Dynamic Grid Layout */}
                        <div className={`grid gap-4 ${
                          item.dropdown.length > 6 
                            ? 'grid-cols-3' 
                            : item.dropdown.length > 3 
                              ? 'grid-cols-2' 
                              : 'grid-cols-1'
                        }`}>
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors group/item border border-transparent hover:border-gray-200"
                            >
                              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mt-0.5 group-hover/item:bg-[#87ceeb] transition-colors flex-shrink-0">
                                <subItem.icon className="h-4 w-4 text-gray-600 group-hover/item:text-white transition-colors" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-sm text-gray-900 group-hover/item:text-[#87ceeb] transition-colors mb-1">
                                  {subItem.name}
                                </h4>
                                <p className="text-xs text-gray-600 leading-relaxed">
                                  {subItem.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Auth Section */}
            <div className="hidden lg:flex items-center space-x-4">
              {status === "loading" ? (
                <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse" />
              ) : session ? (
                <>
                  {/* Logout Button */}
                  {/* <button
                    onClick={() => signOut()}
                    className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg transition-colors duration-200 text-sm font-medium"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                   */}
                  <div className="relative" ref={profileDropdownRef}>
                  <button
                    onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                    className="group flex items-center space-x-2 bg-gradient-to-r from-[#87ceeb] to-[#6497b1] text-white px-4 py-2.5 rounded-lg hover:from-[#6497b1] hover:to-[#87ceeb] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <div className="relative">
                      <UserCircle className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#6bb6ff] rounded-full animate-pulse"></div>
                    </div>
                    <span className="font-semibold text-sm">{session.user?.name}</span>
                    <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${isProfileDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isProfileDropdownOpen && (
                    <div className="absolute right-0 mt-3 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 overflow-hidden">
                      {/* Header */}
                      <div className="bg-gradient-to-r from-[#87ceeb] to-[#6497b1] px-4 py-3">
                        <h3 className="text-white font-semibold text-sm">Welcome back!</h3>
                        <p className="text-gray-200 text-xs mt-1">{session.user?.email}</p>
                      </div>
                      
                      {/* Profile Options */}
                      <div className="py-2">
                        <Link
                          href="/profile"
                          className="group flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all duration-200 border-l-4 border-transparent hover:border-[#87ceeb]"
                          onClick={() => setIsProfileDropdownOpen(false)}
                        >
                          <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-[#87ceeb] transition-colors duration-200">
                            <User className="h-4 w-4 text-gray-600 group-hover:text-white transition-colors duration-200" />
                          </div>
                          <div className="flex-1">
                            <span className="font-medium">My Profile</span>
                            <p className="text-xs text-gray-500 mt-0.5">View and edit your profile</p>
                          </div>
                          <ChevronRight className="h-3 w-3 text-gray-400 group-hover:text-[#87ceeb] transition-colors duration-200" />
                        </Link>
                        
                        <Link
                          href="/dashboard"
                          className="group flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all duration-200 border-l-4 border-transparent hover:border-[#87ceeb]"
                          onClick={() => setIsProfileDropdownOpen(false)}
                        >
                          <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-[#87ceeb] transition-colors duration-200">
                            <LayoutDashboard className="h-4 w-4 text-gray-600 group-hover:text-white transition-colors duration-200" />
                          </div>
                          <div className="flex-1">
                            <span className="font-medium">Dashboard</span>
                            <p className="text-xs text-gray-500 mt-0.5">Access your dashboard</p>
                          </div>
                          <ChevronRight className="h-3 w-3 text-gray-400 group-hover:text-[#87ceeb] transition-colors duration-200" />
                        </Link>
                        
                        {/* Admin Dashboard - Only show for admin users */}
                        {session.user?.role === 'ADMIN' && (
                          <Link
                            href="/admin/dashboard"
                            className="group flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all duration-200 border-l-4 border-transparent hover:border-[#6bb6ff]"
                            onClick={() => setIsProfileDropdownOpen(false)}
                          >
                            <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center group-hover:bg-[#6bb6ff] transition-colors duration-200">
                              <Shield className="h-4 w-4 text-yellow-600 group-hover:text-white transition-colors duration-200" />
                            </div>
                            <div className="flex-1">
                              <span className="font-medium">Admin Dashboard</span>
                              <p className="text-xs text-gray-500 mt-0.5">Manage system settings</p>
                            </div>
                              <ChevronRight className="h-3 w-3 text-gray-400 group-hover:text-[#6bb6ff] transition-colors duration-200" />
                          </Link>
                        )}
                      </div>
                      
                      {/* Divider */}
                      <div className="border-t border-gray-100 my-2"></div>
                      
                      {/* Logout */}
                      <div className="py-2">
                        <button
                          onClick={() => {
                            signOut()
                            setIsProfileDropdownOpen(false)
                          }}
                          className="group flex items-center space-x-3 px-4 py-3 text-sm text-red-600 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 transition-all duration-200 w-full"
                        >
                          <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-600 transition-colors duration-200">
                            <LogOut className="h-4 w-4 text-red-600 group-hover:text-white transition-colors duration-200" />
                          </div>
                          <div className="flex-1">
                            <span className="font-medium">Sign Out</span>
                            <p className="text-xs text-red-500 mt-0.5">Logout from your account</p>
                          </div>
                        </button>
                      </div>
                      
                      {/* Footer */}
                      <div className="bg-gray-50 px-4 py-2 border-t border-gray-100">
                        <p className="text-xs text-gray-500 text-center">
                          Need help? <Link href="/contact" className="text-[#87ceeb] hover:underline">Contact Support</Link>
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                </>
              ) : (
                <div className="relative" ref={loginDropdownRef}>
                  <button
                    onClick={() => setIsLoginDropdownOpen(!isLoginDropdownOpen)}
                    className="group flex items-center space-x-2 bg-gradient-to-r from-[#87ceeb] to-[#6497b1] text-white px-4 py-2.5 rounded-lg hover:from-[#6497b1] hover:to-[#87ceeb] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <div className="relative">
                      <User className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#6bb6ff] rounded-full animate-pulse"></div>
                    </div>
                    <span className="font-semibold text-sm">LOGIN</span>
                    <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${isLoginDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isLoginDropdownOpen && (
                    <div className="absolute right-0 mt-3 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 overflow-hidden">
                      {/* Header */}
                      <div className="bg-gradient-to-r from-[#87ceeb] to-[#6497b1] px-4 py-3">
                        <h3 className="text-white font-semibold text-sm">Access Your Portal</h3>
                        <p className="text-gray-200 text-xs mt-1">Choose your preferred platform</p>
                      </div>
                      
                      {/* Portal Options */}
                      <div className="py-2">
                        {loginOptions.map((option, index) => (
                          <Link
                            key={option.name}
                            href={option.href}
                            className="group flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all duration-200 border-l-4 border-transparent hover:border-[#87ceeb]"
                            onClick={() => setIsLoginDropdownOpen(false)}
                          >
                            <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-[#87ceeb] transition-colors duration-200">
                              <option.icon className="h-4 w-4 text-gray-600 group-hover:text-white transition-colors duration-200" />
                            </div>
                            <div className="flex-1">
                              <span className="font-medium">{option.name}</span>
                              <p className="text-xs text-gray-500 mt-0.5">
                                {option.name === "Member Portal" && "Dashboard & Resources"}
                                {option.name === "Geoportal" && "Maps & Data Analysis"}
                                {option.name === "Training Portal" && "Courses & Certifications"}
                              </p>
                            </div>
                            <ChevronRight className="h-3 w-3 text-gray-400 group-hover:text-[#87ceeb] transition-colors duration-200" />
                          </Link>
                        ))}
                      </div>
                      
                      {/* Divider */}
                      <div className="border-t border-gray-100 my-2"></div>
                      
                      {/* Additional Options */}
                      <div className="py-2">
                        <Link
                          href="/auth/register"
                          className="flex items-center space-x-3 px-4 py-3 text-sm text-[#87ceeb] hover:bg-gradient-to-r hover:from-[#87ceeb]/5 hover:to-[#6497b1]/5 transition-all duration-200"
                          onClick={() => setIsLoginDropdownOpen(false)}
                        >
                          <div className="flex-shrink-0 w-8 h-8 bg-[#87ceeb]/10 rounded-lg flex items-center justify-center">
                            <User className="h-4 w-4 text-[#87ceeb]" />
                          </div>
                          <div className="flex-1">
                            <span className="font-medium">Create Account</span>
                            <p className="text-xs text-gray-500 mt-0.5">Join our community</p>
                          </div>
                        </Link>
                        
                        <Link
                          href="/auth/forgot-password"
                          className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all duration-200"
                          onClick={() => setIsLoginDropdownOpen(false)}
                        >
                          <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                            <Settings className="h-4 w-4 text-gray-600" />
                          </div>
                          <div className="flex-1">
                            <span className="font-medium">Reset Password</span>
                            <p className="text-xs text-gray-500 mt-0.5">Forgot your password?</p>
                          </div>
                        </Link>
                      </div>
                      
                      {/* Footer */}
                      <div className="bg-gray-50 px-4 py-2 border-t border-gray-100">
                        <p className="text-xs text-gray-500 text-center">
                          Need help? <Link href="/contact" className="text-[#87ceeb] hover:underline">Contact Support</Link>
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden relative z-50">
              <Button
                variant="ghost"
                size="icon"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setIsMenuOpen(!isMenuOpen)
                }}
                className="relative z-50"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Flyout Menu */}
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <div 
                className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                onClick={() => {
                  setIsMenuOpen(false)
                  setMobileCurrentSection(null)
                }}
              />
              
              {/* Flyout Menu */}
              <div className="fixed inset-y-0 right-0 w-80 max-w-[85vw] bg-white shadow-xl z-50 lg:hidden overflow-y-auto transform transition-transform duration-300 ease-in-out">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between p-4 border-b bg-[#87ceeb] text-white">
                    <div className="flex items-center space-x-3">
                      {mobileCurrentSection && (
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={closeMobileSection}
                          className="text-white hover:bg-white/20 mr-2"
                        >
                          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                        </Button>
                      )}
                      <Image
                        src="/logo.png"
                        alt="AIERGT Logo"
                        width={28}
                        height={28}
                        className="rounded"
                        style={{ width: "auto", height: "auto" }}
                      />
                      <span className="font-bold text-base sm:text-lg">
                        {mobileCurrentSection ? mobileCurrentSection : "AIERGT"}
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        setIsMenuOpen(false)
                        setMobileCurrentSection(null)
                      }}
                      className="text-white hover:bg-white/20"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>

                  {/* Content */}
                  <div className="flex-1 overflow-y-auto">
                    {!mobileCurrentSection ? (
                      // Main Menu
                      <div className="p-3 sm:p-4 space-y-1">
                        {navigation.map((item) => (
                          <div key={item.name}>
                            {item.dropdown ? (
                              // Section with submenu
                              <button
                                onClick={() => openMobileSection(item.name)}
                                className="flex items-center justify-between w-full p-3 sm:p-4 border-b hover:bg-gray-50 transition-colors"
                              >
                                <div className="flex items-center space-x-2 sm:space-x-3">
                                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#87ceeb] rounded-lg flex items-center justify-center">
                                    <item.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white" />
                                  </div>
                                  <div className="text-left">
                                    <span className="font-semibold text-gray-900 text-sm sm:text-base">{item.name}</span>
                                    <p className="text-xs sm:text-sm text-gray-600 mt-1">{item.description}</p>
                                  </div>
                                </div>
                                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                              </button>
                            ) : (
                              // Direct Link
                              <Link
                                href={item.href}
                                className="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 border-b hover:bg-gray-50 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#87ceeb] rounded-lg flex items-center justify-center">
                                  <item.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white" />
                                </div>
                                <div className="text-left">
                                  <span className="font-semibold text-gray-900 text-sm sm:text-base">{item.name}</span>
                                  <p className="text-xs sm:text-sm text-gray-600 mt-1">{item.description}</p>
                                </div>
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      // Submenu Section
                      <div className="p-3 sm:p-4">
                        {navigation.find(item => item.name === mobileCurrentSection)?.dropdown?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block p-3 sm:p-4 border-b hover:bg-gray-50 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{subItem.name}</h3>
                            <p className="text-xs sm:text-sm text-gray-600">{subItem.description}</p>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Footer Actions */}
                  {!mobileCurrentSection && (
                    <div className="border-t p-3 sm:p-4 space-y-3">
                      {session ? (
                        <div className="space-y-3">
                          {/* User Info */}
                          <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gradient-to-r from-[#87ceeb] to-[#6497b1] rounded-lg">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center">
                              <UserCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white" />
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-xs sm:text-sm text-white">{session.user?.name}</p>
                              <p className="text-xs text-white/80">{session.user?.email}</p>
                            </div>
                          </div>
                          
                          {/* Profile Options */}
                          <div className="space-y-2">
                            <h4 className="text-sm font-semibold text-gray-900 px-2">Account</h4>
                            
                            <Link
                              href="/profile"
                              className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:border-[#87ceeb] hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all duration-200"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                <User className="h-4 w-4 text-gray-600" />
                              </div>
                              <div className="flex-1">
                                <span className="font-medium text-sm text-gray-900">My Profile</span>
                                <p className="text-xs text-gray-500 mt-0.5">View and edit your profile</p>
                              </div>
                              <ChevronRight className="h-3 w-3 text-gray-400" />
                            </Link>
                            
                            <Link
                              href="/dashboard"
                              className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:border-[#87ceeb] hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all duration-200"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                <LayoutDashboard className="h-4 w-4 text-gray-600" />
                              </div>
                              <div className="flex-1">
                                <span className="font-medium text-sm text-gray-900">Dashboard</span>
                                <p className="text-xs text-gray-500 mt-0.5">Access your dashboard</p>
                              </div>
                              <ChevronRight className="h-3 w-3 text-gray-400" />
                            </Link>
                            
                            {/* Admin Dashboard - Only show for admin users */}
                            {session.user?.role === 'ADMIN' && (
                              <Link
                                href="/admin/dashboard"
                                className="flex items-center space-x-3 p-3 rounded-lg border border-yellow-200 hover:border-[#b3cde0] hover:bg-gradient-to-r hover:from-yellow-50 hover:to-yellow-100 transition-all duration-200"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                                  <Shield className="h-4 w-4 text-yellow-600" />
                                </div>
                                <div className="flex-1">
                                  <span className="font-medium text-sm text-gray-900">Admin Dashboard</span>
                                  <p className="text-xs text-gray-500 mt-0.5">Manage system settings</p>
                                </div>
                                <ChevronRight className="h-3 w-3 text-gray-400" />
                              </Link>
                            )}
                          </div>
                          
                          {/* Logout */}
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              signOut()
                              setIsMenuOpen(false)
                            }}
                            className="w-full justify-start border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300"
                          >
                            <LogOut className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-2" />
                            Sign Out
                          </Button>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          {loginOptions.map((option) => (
                            <Link
                              key={option.name}
                              href={option.href}
                              className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <option.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#87ceeb]" />
                              <span className="font-medium text-sm sm:text-base">{option.name}</span>
                            </Link>
                          ))}
                          <Link
                            href="/auth/register"
                            className="flex items-center justify-center space-x-2 p-2 sm:p-3 rounded-lg bg-[#87ceeb] text-white hover:bg-[#87ceeb]/90 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <User className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                            <span className="font-medium text-sm sm:text-base">Register</span>
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </header>
    </>
  )
}