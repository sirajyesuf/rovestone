"use client";
interface ClientLogo {
  id: number;
  name: string;
  logoUrl: string;
}
import { useRef } from "react";
import Image from "next/image";

const clients: ClientLogo[] = [
  {
    id: 1,
    name: "Nordic Design Co.",
    logoUrl: 'Haile_Resorts.png'
  },
  {
    id: 2,
    name: "Elegance Interiors",
    logoUrl: 'hyundai.png'
   },
  {
    id: 3,
    name: "Urban Furniture",
    logoUrl: 'jambo.png'
  },
  {
    id: 4,
    name: "Modern Living",
    logoUrl: 'jupiterinternationalhotel.png'
  },
  {
    id: 5,
    name: "Artisan Crafted",
    logoUrl: 'nyalainsurance.png'
  },
  {
    id: 6,
    name: "Woodcraft Studios",
    logoUrl: 'nyalamotors.png'
  },
  {
    id: 7,
    name: "Luxe Home",
    logoUrl: 'royalhotel.png'
  }
];

interface ClientLogoItemProps {
  client: ClientLogo;
}

const ClientLogoItem: React.FC<ClientLogoItemProps> = ({ client }) => {
  return (
    <div className="logo-item flex-shrink-0 mx-6 my-4">
      <div className="h-24 w-40 flex items-center justify-center p-2 bg-white rounded-lg shadow-sm border border-gray-200">
        <Image
              width={200}
              height={100}
          src={client.logoUrl}
          alt={`${client.name} logo`}
          className="max-h-24 max-w-full object-contain"
        />
      </div>
      {/* <div className="mt-2 text-center">
        <p className="text-sm text-gray-600 font-medium">{client.name}</p>
      </div> */}
    </div>
  );
};

interface LogoScrollerProps {
  clients: ClientLogo[];
}

const LogoScroller: React.FC<LogoScrollerProps> = ({ clients }) => {
  // Create duplicated array for seamless infinite scroll
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Double the clients array to create a seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <div className="relative overflow-hidden w-full">
      <div
        className="logo-scroller-container"
        onMouseEnter={() => {
          if (scrollerRef.current) {
            scrollerRef.current.style.animationPlayState = "paused";
          }
        }}
        onMouseLeave={() => {
          if (scrollerRef.current) {
            scrollerRef.current.style.animationPlayState = "running";
          }
        }}
      >
        <div ref={scrollerRef} className="logo-scroller flex">
          {duplicatedClients.map((client, index) => (
            <ClientLogoItem key={`${client.id}-${index}`} client={client} />
          ))}
        </div>
      </div>
    </div>
  );
};

function ClientSection() {
  return (
    <section className="py-16 bg-stone-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
            Our Trusted Clients
          </h2>
          <div className="w-24 h-1 bg-[#af3f41] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We&apos;re proud to have worked with these prestigious brands who trust
            our craftsmanship and design philosophy.
          </p>
        </div>

        <LogoScroller clients={clients} />
      </div>
    </section>
  );
}

export default ClientSection;
