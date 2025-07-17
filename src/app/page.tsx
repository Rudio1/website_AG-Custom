import '@/styles/components/_page.scss';
import HeroSection from './sections/HeroSection';
import ServicesSection from './sections/ServicesSection';
import CallToActionSection from './sections/CallToActionSection';

export default function Home() {
  return (
    <div className="page">
      <HeroSection />
      <ServicesSection />
      <CallToActionSection />
    </div>
  );
}
