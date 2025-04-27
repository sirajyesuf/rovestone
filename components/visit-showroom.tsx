import { MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

export default function VisitShowRoom() {
  const t = useTranslations("VisitShowRoom");

  return (
    <section className="py-24 bg-[#1A1F2C] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-300 mb-6">
          {/* Experience Luxury in Person */}
          {t("title")}
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
          {/* Visit our showroom to explore our complete collection and let our
          design experts help you create your perfect space. Touch, feel, and
          experience the quality of our furniture firsthand. */}
          {t("description")}
        </p>
        <button className="font-semibold py-6 px-12 rounded-lg transition-colors flex items-center gap-3 mx-auto bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-lg px-8">
          <MapPin className="h-6 w-6" />
          {/* Visit Our Showroom */}
          {t("button")}
        </button>
      </div>
    </section>
  );
}
