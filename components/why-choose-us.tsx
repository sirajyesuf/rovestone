import { Check } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function WhyChooseUs() {
  const t = useTranslations("WhyChooseUs");

  return (
    <section className="w-full  py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          {/* Navigation Arrows */}
          {/* <button
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-md"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 text-gray-700" />
          </button> */}

          {/* <button
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-md"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </button> */}

          {/* Content */}
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            {/* Image */}
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/kitchen.jpg"
                alt="Modern living room with yellow accent chair"
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                {/* Why Choose Rovestone Brothers? */}
                {t("title")}
              </h2>

              <p className="text-gray-700">
                {/* At Rovestone Brothers, we&apos;re passionate about providing exceptional
                furniture that enhances your home&apos;s beauty and comfort. Each
                piece is thoughtfully designed and built to last. */}
                {t("description")}
              </p>

              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#D32F2F]">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700">
                    {/* Handcrafted with premium materials */}
                    {t("whychooseusList1")}
                  </span>
                </li>

                <li className="flex items-center">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#D32F2F]">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700">
                    {/* Free delivery within 100 miles */}
                    {t("whychooseusList2")}
                  </span>
                </li>

                <li className="flex items-center">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#D32F2F]">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700">
                    {/* 30-day return policy */}
                    {t("whychooseusList3")}
                  </span>
                </li>

                <li className="flex items-center">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#D32F2F]">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700">
                    {/* 5-year warranty on all products */}
                    {t("whychooseusList4")}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
