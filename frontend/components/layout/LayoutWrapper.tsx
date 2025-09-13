"use client"

import { usePathname } from "next/navigation"
import { Header } from "./Header"
import { Footer } from "./Footer"

interface LayoutWrapperProps {
  children: React.ReactNode
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname()
  
  // Check if current path is an auth route
  const isAuthRoute = pathname.startsWith('/auth')
  
  if (isAuthRoute) {
    // For auth routes, render only children without navbar/footer
    return <>{children}</>
  }
  
  // For all other routes, render with navbar and footer
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
