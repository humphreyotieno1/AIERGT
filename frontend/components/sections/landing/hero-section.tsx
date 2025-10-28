"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ChevronLeft, ChevronRight, Play, Pause, Globe, Users, Award, Shield, CheckCircle, Star } from "lucide-react"
import Link from "next/link"

// Hero carousel data
const heroSlides = [
  {
    id: 1,
    title: "Preparing Africa For Tomorrow",
    subtitle: "Leading environmental research and geospatial technology solutions across the continent",
    image: "/hero/c1.png",
    cta: "Get Your Free Consultation",
    stats: "50+ Countries",
    description: "Empowering sustainable development through cutting-edge research"
  },
  {
    id: 2,
    title: "Advanced Geospatial Solutions",
    subtitle: "Revolutionary mapping and data analysis tools for environmental challenges",
    image: "/hero/c2.png",
    cta: "Download Our Research Report",
    stats: "1000+ Projects",
    description: "Transforming data into actionable environmental insights"
  },
  {
    id: 3,
    title: "Expert Training Programs",
    subtitle: "Professional development courses in environmental science and geospatial technology",
    image: "/hero/Deserts.jpg",
    cta: "Start Your Training Today",
    stats: "10,000+ Graduates",
    description: "Building the next generation of environmental leaders"
  },
  {
    id: 4,
    title: "Research Excellence",
    subtitle: "Groundbreaking studies shaping Africa's environmental future",
    image: "/hero/forest.jpg",
    cta: "View Our Case Studies",
    stats: "500+ Publications",
    description: "Advancing knowledge for sustainable development"
  },
  {
    id: 5,
    title: "Climate Action Hub",
    subtitle: "Comprehensive solutions for climate change adaptation and mitigation",
    image: "/hero/girraffe.jpg",
    cta: "Join Our Climate Initiative",
    stats: "200+ Initiatives",
    description: "Leading Africa's response to climate challenges"
  },
  {
    id: 6,
    title: "Data-Driven Decisions",
    subtitle: "Advanced analytics and insights for informed environmental policy",
    image: "/hero/kenya.jpg",
    cta: "Access Data",
    stats: "1M+ Data Points",
    description: "Transforming information into environmental solutions"
  },
  {
    id: 7,
    title: "Community Impact",
    subtitle: "Empowering local communities with environmental knowledge and tools",
    image: "/hero/lagos.jpg",
    cta: "Get Involved",
    stats: "500+ Communities",
    description: "Building resilient communities across Africa"
  },
  {
    id: 8,
    title: "Innovation Lab",
    subtitle: "Cutting-edge technology development for environmental challenges",
    image: "/hero/forest.jpg",
    cta: "Discover Innovation",
    stats: "50+ Technologies",
    description: "Pioneering solutions for tomorrow's challenges"
  },
  {
    id: 9,
    title: "Global Partnerships",
    subtitle: "Collaborating with international organizations for maximum impact",
    image: "/hero/lagos.jpg",
    cta: "Partner With Us",
    stats: "100+ Partners",
    description: "Strengthening Africa's environmental network"
  },
  {
    id: 10,
    title: "Sustainable Future",
    subtitle: "Building a greener, more resilient Africa for generations to come",
    image: "/hero/girraffe.jpg",
    cta: "Shape The Future",
    stats: "Future Generations",
    description: "Creating lasting environmental legacy"
  }
]

// Problem-Solution highlights
const problemSolutions = [
  {
    problem: "Environmental data scattered across Africa",
    solution: "Centralized geospatial platform",
    icon: Globe
  },
  {
    problem: "Limited access to environmental expertise",
    solution: "Comprehensive training programs",
    icon: Users
  },
  {
    problem: "Fragmented research efforts",
    solution: "Collaborative research network",
    icon: Award
  },
  {
    problem: "Climate adaptation challenges",
    solution: "Data-driven solutions",
    icon: Shield
  }
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 4000) // Change slide every 4 seconds for better engagement

    return () => clearInterval(interval)
  }, [isAutoPlaying, currentSlide]) // Add currentSlide to dependencies

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  const currentSlideData = heroSlides[currentSlide]

  return (
    <section id="hero" className="relative h-[70vh] sm:h-[80vh] md:h-[80vh] lg:h-[80vh] xl:h-[75vh] 2xl:h-[70vh] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/patterns/grid-pattern.svg')] opacity-5"></div>
      
      {/* Carousel Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out z-0"
        style={{ 
          backgroundImage: `url(${currentSlideData.image})`,
          backgroundAttachment: 'fixed'
        }}
        onMouseEnter={() => {
          // Resume auto-play when hovering over the carousel
          if (!isAutoPlaying) {
            setIsAutoPlaying(true)
          }
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70 via-black/50 to-black/30"></div>
      </div>
      
      {/* Background Navigation Arrows */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <button
          onClick={prevSlide}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 opacity-0 hover:opacity-100 pointer-events-auto"
        >
          <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 opacity-0 hover:opacity-100 pointer-events-auto"
        >
          <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
        </button>
      </div>
      
      {/* Main Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center py-6 sm:py-8 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 items-center w-full">
          
          {/* Left Content - Mobile Optimized */}
          <div className="lg:col-span-2 flex flex-col justify-center space-y-4 lg:space-y-6">
            {/* Main Headlines - Mobile Optimized */}
            <div className="space-y-3 lg:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                <span className="block">{currentSlideData.title}</span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-2xl text-gray-300 leading-relaxed">
                {currentSlideData.subtitle}
              </p>
              
              <p className="text-sm lg:text-lg text-gray-400 leading-relaxed hidden sm:block">
                {currentSlideData.description}
              </p>
            </div>

            {/* Problem-Solution Highlights */}
            <div className="sm:grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-4 my-4 lg:my-8">
              {problemSolutions.slice(0, 2).map((item, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-4 lg:p-4">
                    <div className="flex items-start space-x-3 w-full">
                      <div className="w-8 h-8 lg:w-8 lg:h-8 bg-[#71B045] rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-4 w-4 lg:h-4 lg:w-4 text-white" />
                      </div>
                      <div className="space-y-2 flex-1">
                        <p className="text-sm lg:text-sm text-red-300 font-medium leading-tight">{item.problem}</p>
                        <p className="text-sm lg:text-sm text-[#b3cde0] font-medium leading-tight">{item.solution}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Buttons - Mobile Optimized */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
              <Link href="/auth/register" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-gradient-to-r from-[#71B045] to-[#0F1023] hover:from-[#0F1023] hover:to-[#71B045] text-white px-6 py-3 lg:px-8 lg:py-4 text-base lg:text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <span>{currentSlideData.cta}</span>
                  <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                </Button>
              </Link>
              
              <Link href="/about" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto border-white text-black hover:bg-white hover:text-gray-900 px-6 py-3 lg:px-8 lg:py-4 text-base lg:text-lg font-semibold backdrop-blur-sm"
                >
                  <Play className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                  Watch Our Story
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="sm:flex flex-col sm:flex-row items-center sm:items-center space-y-3 sm:space-y-0 sm:space-x-8 lg:space-x-8 pt-4 lg:pt-4">
              <div className="text-center sm:text-left">
                <div className="text-3xl lg:text-3xl font-bold text-[#b3cde0]">{currentSlideData.stats}</div>
                <div className="text-sm lg:text-sm text-gray-400">Active Projects</div>
              </div>
            </div>
          </div>

          {/* Right Content - Carousel Controls - Hidden on Mobile */}
          <div className="hidden lg:flex lg:col-span-1 flex-col justify-center space-y-6 lg:space-y-6">
            {/* Carousel Navigation */}
            <div className="flex justify-center space-x-4 lg:space-x-4">
              <button
                onClick={prevSlide}
                className="w-12 h-12 lg:w-12 lg:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
              >
                <ChevronLeft className="h-6 w-6 lg:h-6 lg:w-6" />
              </button>
              
              <button
                onClick={toggleAutoPlay}
                className="w-12 h-12 lg:w-12 lg:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                title={isAutoPlaying ? "Pause auto-play" : "Resume auto-play"}
              >
                {isAutoPlaying ? <Pause className="h-6 w-6 lg:h-6 lg:w-6" /> : <Play className="h-6 w-6 lg:h-6 lg:w-6" />}
              </button>
              
              <button
                onClick={nextSlide}
                className="w-12 h-12 lg:w-12 lg:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
              >
                <ChevronRight className="h-6 w-6 lg:h-6 lg:w-6" />
              </button>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center space-x-2 lg:space-x-2 flex-wrap">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-[#b3cde0] scale-125' 
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>

            {/* Current Slide Info */}
            <div className="text-center space-y-3 lg:space-y-3">
              <div className="text-sm lg:text-sm text-white/80">
                {currentSlide + 1} of {heroSlides.length}
              </div>
              <div className="text-base lg:text-lg font-semibold text-white leading-tight px-2">
                {currentSlideData.title}
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className={`w-2 h-2 lg:w-2 lg:h-2 rounded-full ${isAutoPlaying ? 'bg-[#b3cde0] animate-pulse' : 'bg-white/40'}`}></div>
                <span className="text-sm text-white/60">
                  {isAutoPlaying ? 'Auto-playing' : 'Paused'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-[#b3cde0]/20 rounded-full blur-xl animate-pulse z-5"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-[#0F1023]/20 rounded-full blur-xl animate-pulse delay-1000 z-5"></div>
    </section>
  )
}
