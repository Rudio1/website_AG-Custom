"use client";

import React, { useRef, useState } from 'react';
import styles from './ServicesSection.module.scss';

const ServicesSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const hoverTimers = useRef<{ [key: number]: NodeJS.Timeout }>({});

  const services = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="3" width="20" height="14" rx="2" stroke="white" strokeWidth="2"/>
          <path d="M8 21L12 17L16 21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 17V7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 8H17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M7 11H17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M7 14H13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Web Sites",
      description: "Desenvolvemos <strong>sites modernos, responsivos e rápidos</strong>, pensados para transmitir profissionalismo e oferecer uma excelente experiência ao usuário. Perfeitos para destacar sua marca e atrair mais clientes."
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="2" width="14" height="20" rx="2" stroke="white" strokeWidth="2"/>
          <path d="M12 18H12.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M9 6H15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Mobile Apps",
      description: "Criamos <strong>aplicativos móveis sob medida</strong>, com foco em desempenho, usabilidade e escalabilidade. Do conceito à publicação nas lojas, cuidamos de tudo para você entregar valor na palma da mão dos seus usuários."
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="7" height="7" stroke="white" strokeWidth="2"/>
          <rect x="14" y="3" width="7" height="7" stroke="white" strokeWidth="2"/>
          <rect x="3" y="14" width="7" height="7" stroke="white" strokeWidth="2"/>
          <rect x="14" y="14" width="7" height="7" stroke="white" strokeWidth="2"/>
        </svg>
      ),
      title: "Sistemas",
      description: "Automatize tarefas e simplifique processos com <strong>sistemas personalizados</strong>, desenvolvidos para atender às necessidades específicas do seu negócio. Soluções inteligentes que ajudam você a ganhar tempo e eficiência."
    }
  ];

  const handleMouseEnter = (index: number) => {
    // Limpa qualquer timer existente
    if (hoverTimers.current[index]) {
      clearTimeout(hoverTimers.current[index]);
    }
    
    // Inicia um novo timer de 1 segundo
    hoverTimers.current[index] = setTimeout(() => {
      setHoveredCard(index);
    }, 500);
  };

  const handleMouseLeave = (index: number) => {
    // Limpa o timer
    if (hoverTimers.current[index]) {
      clearTimeout(hoverTimers.current[index]);
      delete hoverTimers.current[index];
    }
    
    // Remove o estado de hover
    setHoveredCard(null);
  };

  return (
    <section id="servicos" className={styles.servicesSection}>
      <div className={styles.servicesContainer}>
        <h2 className={styles.servicesTitle}>
          Conheça nossos serviços
        </h2>
        
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`${styles.serviceCard} ${hoveredCard === index ? styles.serviceCardHovered : ''}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div className={styles.serviceIcon}>
                {service.icon}
              </div>
              <h3 className={styles.serviceTitle}>
                {service.title}
              </h3>
              <p 
                className={styles.serviceDescription}
                dangerouslySetInnerHTML={{ __html: service.description }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 