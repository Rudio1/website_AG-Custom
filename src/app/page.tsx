import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutUsSection from '@/components/sections/AboutUsSection';
import ContactSection from '@/components/sections/ContactSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
// import TestimonialsSection from '@/components/sections/TestimonialsSection';

export default function Home() {
  return (
    <div className="page">
      <HeroSection />
      <ServicesSection />
      <AboutUsSection />
      <ContactSection />
      <TestimonialsSection />
    </div>
  );
}
