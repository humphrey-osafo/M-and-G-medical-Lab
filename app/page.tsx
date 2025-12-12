import Hero from "@/components/Hero/Hero";
import ServicesOverview from "@/components/ServicesOverview/ServicesOverview";
import WhyChoose from "@/components/whyChoose/WhyChoose";
import Testimonials from "@/components/testimonials/Testimonials";
import LocationMap from "@/components/LocationMap/LocationMap";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChoose />
      <Testimonials />
      <LocationMap />
    </>
  );
}

