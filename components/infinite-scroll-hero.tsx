"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FurnitureCarousel() {
  // Array of furniture images from Unsplash
  const furnitureImages = [
    {
      url: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Modern living room with stylish furniture and large windows",
    },
    {
      url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Cozy green sofa with decorative pillows",
    },
    {
      url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Elegant dining room with wooden table and chairs",
    },
    {
      url: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Minimalist bedroom with comfortable bed and nightstands",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Function to go to the next slide
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % furnitureImages.length);
  }, [furnitureImages.length]);

  // Function to go to the previous slide
  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + furnitureImages.length) % furnitureImages.length,
    );
  }, [furnitureImages.length]);

  // Function to go to a specific slide
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    // Temporarily pause autoplay when manually navigating
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, nextSlide]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Handle navigation button clicks with stopPropagation
  const handlePrevClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    prevSlide();
    // Temporarily pause autoplay when manually navigating
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handleNextClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    nextSlide();
    // Temporarily pause autoplay when manually navigating
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <div
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Carousel container */}
      <div className="absolute inset-0">
        {/* Carousel slides */}
        <div className="h-full w-full relative">
          {furnitureImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image.url || "/placeholder.svg"}
                alt={image.alt}
                fill
                priority={index === 0}
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background/95 z-[1]"></div>
      </div>

      {/* Navigation arrows - now with higher z-index and improved styling */}
      <button
        onClick={handlePrevClick}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-[50] bg-black/30 hover:bg-black/50 text-white rounded-full p-3 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={handleNextClick}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-[50] bg-black/30 hover:bg-black/50 text-white rounded-full p-3 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dot indicators - now with higher z-index */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[50] flex space-x-3">
        {furnitureImages.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              goToSlide(index);
            }}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex
                ? "bg-[#D32F2F]"
                : "bg-[#D32F2F]/50 hover:bg-[#D32F2F]/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? "true" : "false"}
          />
        ))}
      </div>

      {/* Current slide indicator */}
      <div className="absolute top-4 right-4 z-[50] bg-black/50 text-white px-3 py-1 rounded-full text-sm">
        {currentIndex + 1}/{furnitureImages.length}
      </div>

      {/* Hero content */}
      <div className="relative z-[20] flex flex-col items-center justify-center h-full text-center px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white drop-shadow-md mb-4">
          Cherished Craftsmanship for Your Space
        </h1>
        {/* <p className="max-w-[700px] text-lg md:text-xl text-white/90 drop-shadow mb-8">
          <p className="text-lg mb-4 text-gray-200 italic">
            &quot;It&apos;s all about the details&quot;
          </p>
          <p className="text-lg mb-8 text-gray-200">
            We create unique spaces for both residential and commercial clients,
            combining traditional artisanship with cutting-edge technology.
          </p>
        </p> */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild>
            <Link href="/products">Browse Collection</Link>
          </Button>
          {/* <Button
            size="lg"
            variant="outline"
            className="bg-background/20 backdrop-blur-sm border-white/20 text-white hover:bg-white/30 hover:text-white"
            asChild
          >
            <Link href="/design-services">Design Services</Link>
          </Button> */}
        </div>
      </div>
    </div>
  );
}
