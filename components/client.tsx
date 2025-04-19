"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export default function ClientSection() {
  // Client testimonial data - replace with your actual client testimonials
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Interior Designer",
      quote:
        "The quality and craftsmanship of the furniture pieces exceeded my expectations. My clients are always impressed with the unique designs and attention to detail.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Homeowner",
      quote:
        "We furnished our entire living room with pieces from this collection. The comfort, style, and durability have made our house truly feel like a home.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Architect",
      quote:
        "As an architect, I appreciate the thoughtful design and sustainable materials used in every piece. The furniture complements my projects perfectly.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 4,
      name: "John Doe",
      role: "Interior Designer",
      quote:
        "The craftsmanship and quality of the furniture pieces are exceptional. They add a touch of elegance and sophistication to any space.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 5,
      name: "Jane Smith",
      role: "Homeowner",
      quote:
        "I was skeptical about furniture quality, but these pieces exceeded my expectations. The durability and style are second to none.",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5c6669] mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-[#db462f] mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-lg p-6 md:p-10 shadow-sm border border-[#5c6669]/10">
            <Quote className="absolute text-[#db462f]/10 h-24 w-24 -top-4 -left-4" />

            <div className="relative z-10">
              <p className="text-[#5c6669] text-lg md:text-xl italic mb-8">"{testimonials[currentIndex].quote}"</p>

              <div className="flex items-center">
                {/* <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4 border-2 border-[#db462f]">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div> */}
                <div>
                  <h4 className="font-semibold text-[#5c6669]">{testimonials[currentIndex].name}</h4>
                  <p className="text-[#5c6669]/70 text-sm">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-[#db462f] w-6" : "bg-[#5c6669]/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex justify-center mt-6 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full border border-[#5c6669]/20 text-[#5c6669] hover:text-[#db462f] hover:border-[#db462f] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full border border-[#5c6669]/20 text-[#5c6669] hover:text-[#db462f] hover:border-[#db462f] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
