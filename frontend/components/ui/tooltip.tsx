"use client"

import { useState } from "react"
import { cn } from "@/lib/utils/cn"

interface TooltipProps {
  children: React.ReactNode
  content: string
  side?: "top" | "bottom" | "left" | "right"
  className?: string
}

export function Tooltip({ children, content, side = "top", className }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)

  const getTooltipPosition = () => {
    switch (side) {
      case "top":
        return "bottom-full left-1/2 transform -translate-x-1/2 mb-2"
      case "bottom":
        return "top-full left-1/2 transform -translate-x-1/2 mt-2"
      case "left":
        return "right-full top-1/2 transform -translate-y-1/2 mr-2"
      case "right":
        return "left-full top-1/2 transform -translate-y-1/2 ml-2"
      default:
        return "bottom-full left-1/2 transform -translate-x-1/2 mb-2"
    }
  }

  const getArrowPosition = () => {
    switch (side) {
      case "top":
        return "top-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-gray-800"
      case "bottom":
        return "bottom-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-b-gray-800"
      case "left":
        return "left-full top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent border-l-gray-800"
      case "right":
        return "right-full top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-gray-800"
      default:
        return "top-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-gray-800"
    }
  }

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className={cn(
          "absolute z-50 px-3 py-2 text-sm text-white bg-gray-800 rounded-md shadow-lg whitespace-nowrap",
          getTooltipPosition(),
          className
        )}>
          {content}
          <div className={cn(
            "absolute w-0 h-0 border-4",
            getArrowPosition()
          )} />
        </div>
      )}
    </div>
  )
}
