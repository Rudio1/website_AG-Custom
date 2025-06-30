import React from 'react';
import Button from '@/components/ui/Button';
import Title from '@/components/ui/Title';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="section section--hero">
      <div className="section-container">
        <Title level={1} centered className="hero__title">
          Bem-vindo à AG Custom
        </Title>
        <Title level={3} centered variant="muted" className="hero__subtitle">
          Soluções personalizadas para seu negócio
        </Title>
        <p className="hero__description">
          Desenvolvemos projetos únicos e sob medida para transformar suas ideias em realidade.
        </p>
        <div className="hero__actions">
          <Button size="lg">Entre em Contato</Button>
          <Button variant="secondary" size="lg">Nossos Serviços</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 