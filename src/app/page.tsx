import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer"


export default function Home() {
  return (
   <main className="text-white">
    <HeroSection />
    <FeaturedCourses />
    <WhyChooseUs />
    <TestimonialCards />
    <UpcomingWebinars />
    <Instructors />
    <Footer />
   </main>
  );
}
