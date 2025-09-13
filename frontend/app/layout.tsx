import type { Metadata } from "next"
import { Poppins, Montserrat } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Providers } from "@/components/providers/Providers"

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "AIERGT - African Institute for Environmental Research and Geospatial Technology",
  description: "Leading provider of sustainable environmental and geospatial solutions across Africa. Preparing Africa For Tomorrow.",
  keywords: "environmental research, geospatial technology, Africa, sustainability, training, research",
  authors: [{ name: "AIERGT" }],
  openGraph: {
    title: "AIERGT - Preparing Africa For Tomorrow",
    description: "Leading provider of sustainable environmental and geospatial solutions across Africa",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${montserrat.variable} font-poppins`}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}