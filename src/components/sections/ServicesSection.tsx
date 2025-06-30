import React from 'react';
import Button from '@/components/ui/Button';
import Title from '@/components/ui/Title';
import { services } from '@/data/testimonials';

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="section section--gray">
      <div className="section-container">
        <Title level={2} centered className="services__title">
          Nossos Serviços
        </Title>
        <div className="services__grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-card__icon">{service.icon}</div>
              <Title level={4} className="service-card__title">
                {service.title}
              </Title>
              <p className="service-card__description">
                {service.description}
              </p>
              <ul className="service-card__features">
                {service.features.map((feature, index) => (
                  <li key={index}>
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="service-card__price">
                {service.price}
              </p>
              <Button fullWidth>Saiba Mais</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 