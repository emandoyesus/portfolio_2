import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import ProfileSection from "@/components/ProfileSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative z-10 flex min-h-full flex-col">
      <Navbar />
      <HeroSection />
      <ProjectShowcase />
      <ProfileSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
