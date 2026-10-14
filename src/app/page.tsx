import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import ToolkitSection from "@/components/ToolkitSection";
import ProfileSection from "@/components/ProfileSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FooterStickyReveal from "@/components/ui/footer-sticky-reveal";

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-col">
      {/* Main Content Curtain: layered above footer with solid background and shadow */}
      <main className="relative z-10 flex min-h-full flex-col bg-ink border-b border-hairline/80 shadow-[0_30px_70px_rgba(0,0,0,0.95)]">
        <Navbar />
        <HeroSection />
        <ProjectShowcase />
        <ToolkitSection />
        <ProfileSection />
        <ServicesSection />
        <ContactSection />
      </main>

      {/* Sticky Reveal Footer: uncovers as main content scrolls away */}
      <FooterStickyReveal>
        <Footer />
      </FooterStickyReveal>
    </div>
  );
}
