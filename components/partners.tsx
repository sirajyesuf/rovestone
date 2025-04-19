'use client'

import { useState } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Sample client data (replace with actual client logos)
const clients = [
  { id: 1, name: "Luxury Furnish", logo: "haile.png" },
  { id: 2, name: "Home Comfort", logo: "/hyundai.png" },
  { id: 3, name: "Elite Decor", logo: "jambo.png" },
  { id: 4, name: "Modern Living", logo: "jupiterinternationalhotel.png" },
  { id: 5, name: "Design Hub", logo: "nyalainsurance.png" },
  { id: 6, name: "Artisan Furniture", logo: "nyalamotors.png" },
  { id: 7, name: "Classic Interiors", logo: "royalhotel.png" },
];

const Partners = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(clients.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentClients = clients.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#5c6669' }}>
          Our Trusted Partners
        </h2>
        
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center mb-8">
            {currentClients.map((client) => (
              <div
                key={client.id}
                className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                style={{ borderColor: '#db462f', borderWidth: '1px' }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-16 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-6">
            {/* Dot indicators */}
            <div className="flex gap-2 justify-center">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentPage === index ? 'w-6 bg-[#db462f]' : 'bg-[#5c6669] bg-opacity-30'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={prevPage}
                className="p-2 rounded-full"
                style={{ borderColor: '#5c6669', color: '#5c6669' }}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <Button
                variant="outline"
                onClick={nextPage}
                className="p-2 rounded-full"
                style={{ borderColor: '#5c6669', color: '#5c6669' }}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;