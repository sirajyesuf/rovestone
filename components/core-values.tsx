import {
  Check,
  HandHeart,
  ShieldCheck,
  Users,
  Lightbulb,
  Handshake,
} from "lucide-react";

export default function CoreValues() {
  const coreValues = [
    {
      title: "Customer needs",
      icon: HandHeart,
      description:
        "We pay close attention to the needs and preferences of our customers, going beyond traditional expectations to meet their specifications and choices.",
    },
    {
      title: "Integrity",
      icon: ShieldCheck,
      description:
        "We uphold high moral principles and safeguard the professional standards of every role within Rovestone Brothers.",
    },
    {
      title: "Focus on people",
      icon: Users,
      description:
        "People are our strength—our culture enhances quality of working life for our team, so we deliver exceptional service and products to our community.",
    },
    {
      title: "Innovation",
      icon: Lightbulb,
      description:
        "We foster technological advancement and expertise, enabling us to provide innovative, cutting-edge products and solutions.",
    },
    {
      title: "Commitment",
      icon: Check,
      description:
        "We are dedicated to our mission, driven by responsibility, discipline, and a passion for realizing our vision and serving our customers.",
    },
    {
      title: "Engaging and continuous relationships",
      icon: Handshake,
      description:
        "We build lasting, personal relationships, ensuring every interaction is rewarding and every experience is tailored to our customers.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#D32F2F] mb-4 tracking-tight">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            The principles that shape everything we do at Rovestone Brothers.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {coreValues.map((value) => (
            <div
              key={value.title}
              className="flex flex-col items-center bg-gradient-to-br from-[#FAE6E6] to-[#F5F3F7] rounded-xl p-4 transition-transform hover:scale-105"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#D32F2F] mb-3">
                <value.icon
                  size={28}
                  className="text-white"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-lg font-semibold mb-1 text-[#1A1F2C] text-center">
                {value.title}
              </h3>
              <p className="text-gray-700 text-center text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
