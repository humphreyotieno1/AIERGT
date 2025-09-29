import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    about: [
      { name: "Mission & Vision", href: "/about/mission" },
      { name: "Leadership Team", href: "/about/team" },
      { name: "Our Story", href: "/about/story" },
      { name: "Contact Us", href: "/contact" },
    ],
    services: [
      { name: "Environmental Assessment", href: "/services/environmental" },
      { name: "Geospatial Solutions", href: "/services/geospatial" },
      { name: "Training & Development", href: "/services/training" },
      { name: "Research & Innovation", href: "/services/research" },
    ],
    community: [
      { name: "Members Portal", href: "/community/members" },
      { name: "Events", href: "/community/events" },
      { name: "Blog", href: "/community/blog" },
      { name: "News", href: "/community/news" },
    ],
    support: [
      { name: "Help Center", href: "/support/help" },
      { name: "Documentation", href: "/support/docs" },
      { name: "Contact Support", href: "/support/contact" },
    ],
  }

  return (
    <footer className="bg-[#000000] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Image src="/logo.png" alt="AIERGT" width={32} height={32} className="rounded-lg" />

              <span className="ml-2 text-xl font-bold">AIERGT</span>
            </div>
            <p className="text-gray-300 mb-4">
              The African Institute for Environmental Research and Geospatial Technology 
              (AIERGT) leads in providing sustainable environmental and geospatial 
              solutions across Africa.
            </p>
            <p className="text-sm text-gray-400">
              <strong>Preparing Africa For Tomorrow</strong>
            </p>
          </div>

          {/* About Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#b3cde0] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#b3cde0] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#b3cde0] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} AIERGT. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-[#b3cde0] text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-[#b3cde0] text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-[#b3cde0] text-sm transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
