import React from 'react';
import Button from '@/components/ui/Button';
import Title from '@/components/ui/Title';

const AboutUsSection: React.FC = () => {
  return (
    <section id="about" className="section section--white">
      <div className="section-container">
        <div className="about__content">
          <div className="about__text">
            <Title level={2}>
              Sobre a AG Custom
            </Title>
            <p>
              Somos uma empresa especializada em desenvolvimento de soluções digitais personalizadas. 
              Nossa missão é transformar ideias em produtos digitais de alta qualidade.
            </p>
            <p>
              Com anos de experiência no mercado, oferecemos serviços completos desde a concepção 
              até a entrega final do projeto.
            </p>
            <Button>Conheça Nossa História</Button>
          </div>
          <div className="about__image">
            <p>Imagem da equipe</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection; 