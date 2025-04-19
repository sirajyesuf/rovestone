import { Button } from "@/components/ui/button";
import NavBar from "@/components/nav-bar";
import Hero from "@/components/hero";
import WhyChooseUs from "@/components/why-choose-us";
import Features from "@/components/features";
import GetInTouch from "@/components/get-in-touch";
import Footer from "@/components/footer";
// import ClientSection from "@/components/client";
import Partners from "@/components/partners";
import ClientSection from "@/components/clients11";
export default function Home() {
  return (
    <div>
     <NavBar />
     <Hero />
     <Features />
     <Partners />
     <WhyChooseUs />
     <ClientSection/>
     <GetInTouch /> 
     <Footer />
    </div>
  );
}
