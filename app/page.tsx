// // This is the main page for the internationalized routes
// import NavBar from "@/components/nav-bar";
// // import Hero from "@/components/hero";
// import WhyChooseUs from "@/components/why-choose-us";
// import GetInTouch from "@/components/get-in-touch";
// import Footer from "@/components/footer"; // Note: Footer is also in layout, maybe remove from here?
// import ContactUs from "@/components/contact-us";
// // import CoreValues from "@/components/core-values";
// import FeedBack from "@/components/feedback";
// import ClientSection from "@/components/clients11";
// import FurnitureCarousel from "@/components/infinite-scroll-hero";
// import GalleryPage from "@/components/gallery";

// export default function Home() {
//   return (
    // <div>
    //   <NavBar />
    //   {/* <Hero /> */}
    //   <FurnitureCarousel />
    //   <GalleryPage />
    //   {/* <CoreValues /> */}
    //   <WhyChooseUs />
    //   <ClientSection />
    //   <FeedBack />
    //   <GetInTouch />
    //   <ContactUs />
    //   {/* Footer is rendered in layout.tsx, likely safe to remove here */}
    //   <Footer />
    // </div>
//   );
// }

import { redirect } from "next/navigation";

export default function RootPage() {
  redirect("/en");
}
