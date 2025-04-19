import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#5c6669]/10">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-2xl font-bold text-[#D32F2F]">Rovestone</span>
                <span className="text-xl font-medium text-[#1A1F2C]">Brothers</span>
              </Link>
            </div>
            <p className="text-[#5c6669] max-w-xs">
              Creating beautiful spaces with quality craftsmanship and timeless design since 1986.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-[#5c6669] hover:text-[#db462f] transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-[#5c6669] hover:text-[#db462f] transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-[#5c6669] hover:text-[#db462f] transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-[#5c6669] hover:text-[#db462f] transition-colors">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#5c6669]">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-[#5c6669] hover:text-[#db462f] transition-colors">
                  Closet
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#5c6669] hover:text-[#db462f] transition-colors">
                  Bed
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#5c6669] hover:text-[#db462f] transition-colors">
                  Dining Room
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#5c6669] hover:text-[#db462f] transition-colors">
                  Office
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#5c6669] hover:text-[#db462f] transition-colors">
                  Outdoor
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#5c6669] hover:text-[#db462f] transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#5c6669]">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-[#5c6669] hover:text-[#db462f] transition-colors">
                  About Us
                </Link>
              </li>
              {/* <li>
                <Link href="#" className="text-[#5c6669] hover:text-[#db462f] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#5c6669] hover:text-[#db462f] transition-colors">
                  Our Designers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#5c6669] hover:text-[#db462f] transition-colors">
                  Sustainability
                </Link>
              </li> */}
              <li>
                <Link href="#" className="text-[#5c6669] hover:text-[#db462f] transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#5c6669] hover:text-[#db462f] transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#5c6669]">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-[#db462f] flex-shrink-0 mt-0.5" />
                <span className="text-[#5c6669]">Addis Ababa, Ethiopia on the road to Megenagna-Gurdshola,Pecan Building, 1st Floor</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-[#db462f] flex-shrink-0" />
                <span className="text-[#5c6669]">+251116477272</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-[#db462f] flex-shrink-0" />
                <span className="text-[#5c6669]">info@rovestone.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-[#5c6669]/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#5c6669] text-sm">&copy; {new Date().getFullYear()} Furnish. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-[#5c6669] hover:text-[#db462f] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-[#5c6669] hover:text-[#db462f] transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-[#5c6669] hover:text-[#db462f] transition-colors">
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
