import Image from "next/image"

export default function PartnerSection() {
  // Partner data with name and logo placeholder
  const partners = [
    { name: "Modern Designs", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Luxury Fabrics", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Premium Woods", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Artisan Crafts", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Global Imports", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Design Studios", logo: "/placeholder.svg?height=100&width=200" },
  ]

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Our Trusted Partners</h2>
          <p className="mx-auto mb-12 max-w-2xl text-gray-700">
            We collaborate with industry-leading brands and suppliers to ensure we deliver the highest quality furniture
            and exceptional service to our customers.
          </p>

          <div className="mt-10">
            {/* Desktop view - grid */}
            <div className="hidden grid-cols-3 gap-8 md:grid lg:grid-cols-6">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={`${partner.name} logo`}
                    width={120}
                    height={60}
                    className="h-12 w-auto object-contain grayscale transition-all hover:grayscale-0"
                  />
                </div>
              ))}
            </div>

            {/* Mobile view - two rows */}
            <div className="grid grid-cols-2 gap-4 md:hidden">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center rounded-lg border border-gray-100 bg-white p-4 shadow-sm"
                >
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={`${partner.name} logo`}
                    width={100}
                    height={50}
                    className="h-10 w-auto object-contain grayscale"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <a href="/partners" className="inline-flex items-center text-red-600 hover:text-red-700">
              <span className="font-medium">View all our partners</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
