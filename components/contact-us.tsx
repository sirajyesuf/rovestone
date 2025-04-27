import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function ContactUs() {
  const t = useTranslations("ContactUs");
  return (
    <section className="py-16 bg-[#1A1F2C] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">
          {/* Ready to Transform Your Space? */}
          {t("title")}

        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          {/* Contact us today to discuss your project. We provide turnkey solutions
          including design, manufacture and installation services. */}
          {t("description")}
        </p>
        <div className="flex justify-center">
          <a href="mailto:info@rovestone.com">
            <Button className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-lg px-8 py-4 rounded-lg transition-colors flex items-center gap-3">
              {/* Contact Us */}
              {t("button")}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
