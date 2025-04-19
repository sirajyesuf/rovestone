import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button";
export default function Hero() {
  return (
    <div className="flex flex-col">
      {/* Navigation Bar */}
      {/* <header className="w-full bg-white py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-red-600">Rovestone</span> Brothers
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-gray-900">
              Products
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/contact" className="flex items-center text-gray-700 hover:text-gray-900">
              <Phone className="h-4 w-4 mr-2" />
              Contact Us
            </Link>
            <Link href="/our-work" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
              Our Work
            </Link>
          </div>
        </div>
      </header> */}

      {/* Hero Section */}
      {/* <section className="flex-grow bg-gradient-to-r from-gray-900 via-gray-800 to-red-900">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Cherished Craftsmanship for Your Space
              </h1>
              <p className="text-white/80 text-lg italic">"It's all about the details"</p>
              <p className="text-white/90 text-lg max-w-xl">
                We create unique spaces for both residential and commercial clients, combining traditional artisanship
                with cutting-edge technology.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/our-work" className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded">
                  View Our Work
                </Link>
                <Link href="/learn-more" className="border border-white text-white hover:bg-white/10 px-6 py-3 rounded">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="greencouch.jpg"
                alt="Rovestone Brothers Furniture"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section> */}

        <section className="relative bg-gradient-to-r from-[#3f232c] to-[#d32f2f]/90 text-white">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Cherished Craftsmanship for Your Space
              </h1>
              <p className="text-lg mb-4 text-gray-200 italic">
                "It's all about the details"
              </p>
              <p className="text-lg mb-8 text-gray-200">
                We create unique spaces for both residential and commercial clients, 
                combining traditional artisanship with cutting-edge technology.
              </p>
              {/* <div className="flex flex-wrap gap-4">
                <Link href="/products">
                  <Button className="bg-white text-[#D32F2F] hover:bg-gray-100 px-6 py-2 rounded-md text-lg">
                    View Our Work
                  </Button>
                </Link>
                <Link href="/products">
                  <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#D32F2F] px-6 py-2 rounded-md text-lg">
                    Learn More
                  </Button>
                </Link>
              </div> */}
            </div>
            <div className="hidden md:block">
              <img 
                src="greencouch.jpg" 
                alt="Rovestone Brothers Furniture" 
                className="rounded-md shadow-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview Section Start */}
      {/* <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">COMPANY OVERVIEW</h2>
          <p className="text-gray-700 max-w-4xl mx-auto text-center">
            Rovestone Brothers is engaged in the manufacturing of wide array of household and office furniture, interior
            works and many other services that tailored to the requirements of our customers.
          </p>
        </div>
      </section> */}
    </div>
  )
}
