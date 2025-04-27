"use client"

import type React from "react"

import Image from "next/image"
import { useState } from "react"
import { useTranslations } from "next-intl"

export default function GetInTouch() {
  const [email, setEmail] = useState("")
  const t = useTranslations("GetInTouch")
  const handleSubmit = (e: React.FormEvent) => {console.log(e)}

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="w-full md:w-1/3 flex justify-center md:justify-start order-1 md:order-1 rounded-lg border-2">
            <Image
              src="getintouchwithus.jpg"
              alt="Wooden chair with white cushion"
              width={400}
              height={400}
              className="object-cover w-full h-full rounded-lg"
              priority
            />
          </div>

          <div className="w-full md:w-2/3 space-y-6 flex flex-col items-start md:items-end order-2 md:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#5c6669] md:text-right w-full">
              {/* Get In Touch */}
              {t("title")}
            </h2>

            <p className="text-lg text-[#5c6669]/80 md:text-right w-full">
              {/* Join our mailing list and receive a 20% off */}
              {t("description")}
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full md:max-w-xl md:ml-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-md border border-[#5c6669]/20 focus:outline-none focus:ring-2 focus:ring-[#db462f]/50"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-md bg-[#db462f] hover:bg-[#db462f]/90 text-white font-medium transition-colors"
              >
                {/* Subscribe */}
                {t("button")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
