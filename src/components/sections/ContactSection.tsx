import React from 'react';
import Button from '@/components/ui/Button';
import Title from '@/components/ui/Title';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section section--gray">
      <div className="section-container">
        <div className="contact">
          <Title level={2} centered className="contact__title">
            Entre em Contato
          </Title>
          <p className="contact__description">
            Pronto para transformar sua ideia em realidade? Vamos conversar!
          </p>
          <div className="contact__actions">
            <Button size="lg">Enviar Mensagem</Button>
            <Button variant="secondary" size="lg">WhatsApp</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 