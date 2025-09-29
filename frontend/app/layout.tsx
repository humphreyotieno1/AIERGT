import type { Metadata } from "next"
import { EB_Garamond, Poppins, Montserrat } from "next/font/google"
import "./globals.css"
import { LayoutWrapper } from "@/components/layout/layout-wrapper"
import { Providers } from "@/components/providers/providers"

const garamond = EB_Garamond({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-garamond",
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
  icons: {
    icon: [
      { url: '/logo.png', sizes: 'any', type: 'image/png' },
      { url: '/logo.png', sizes: '16x16', type: 'image/png' },
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/logo.png' }
    ]
  },
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
      <body className={`${garamond.variable} ${montserrat.variable} font-garamond`}>
        <Providers>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </Providers>
      </body>
    </html>
  )
}