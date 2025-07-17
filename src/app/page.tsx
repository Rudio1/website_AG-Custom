import '@/styles/components/_page.scss';
import HeroSection from './sections/HeroSection';
import ServicesSection from './sections/ServicesSection';

export default function Home() {
  return (
    <div className="page">
      <HeroSection />
      <ServicesSection />
    </div>
  );
}
