import React from 'react';
import Title from '@/components/ui/Title';
import { testimonials } from '@/data/testimonials';

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="section section--white">
      <div className="section-container">
        <Title level={2} centered className="mb-8">
          O que nossos clientes dizem
        </Title>
        <div className="services__grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="service-card">
              <div className="service-card__icon">⭐</div>
              <Title level={4} className="service-card__title">
                {testimonial.name}
              </Title>
              <p className="service-card__description">
                {testimonial.company}
              </p>
              <p className="service-card__description">
                "{testimonial.message}"
              </p>
              <div className="service-card__price">
                {'⭐'.repeat(testimonial.rating)} ({testimonial.rating}/5)
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 