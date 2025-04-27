"use client";
import NavBar from "@/components/nav-bar";
// import Hero from "@/components/hero";
import WhyChooseUs from "@/components/why-choose-us";
import GetInTouch from "@/components/get-in-touch";
import Footer from "@/components/footer";
import ContactUs from "@/components/contact-us";
import FeedBack from "@/components/feedback";
import ClientSection from "@/components/clients11";
import FurnitureCarousel from "@/components/infinite-scroll-hero";
import GalleryPage from "@/components/gallery";

export default function HomePage() {
  return (
    <div>
      <NavBar />
      {/* <Hero /> */}
      <FurnitureCarousel />
      <GalleryPage />
      <WhyChooseUs />
      <ClientSection />
      <FeedBack />
      <GetInTouch />
      <ContactUs />
      <Footer />
    </div>
  );
}
