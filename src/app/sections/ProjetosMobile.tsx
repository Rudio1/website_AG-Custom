"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './ProjetosMobile.module.scss';

const ProjetosMobile: React.FC = () => {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animateIn);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px'
      }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.projetosMobileSection}>
      <div className={styles.projetosMobileContainer}>
        
        {/* Header da seção */}
        <div className={styles.mobileHeader}>
          <h1 className={styles.mobileTitle}>Projetos</h1>
          <p className={styles.mobileSubtitle}>
            Conheça nossos trabalhos mais recentes
          </p>
        </div>

        {/* Projeto 1 - BarberMap */}
        <div 
          ref={(el) => {
            projectRefs.current[0] = el;
          }}
          className={styles.mobileProjectCard}
        >
          <div className={styles.projectImageContainer}>
            <div className={styles.imageWrapper}>
                             <Image
                 src="/barbermap_cell.svg"
                 alt="Projeto BarberMap"
                 width={400}
                 height={300}
                 className={styles.mobileProjectImage}
               />
              <div className={styles.imageOverlay}>
                <span className={styles.projectType}>Mobile App</span>
              </div>
            </div>
          </div>
          
          <div className={styles.projectContent}>
            <div className={styles.projectBadge}>Aplicativo Mobile</div>
            <h3 className={styles.projectTitle}>BarberMap</h3>
            <p className={styles.projectDescription}>
              O <strong>BarberMap</strong> é um protótipo com o propósito de explorar como a tecnologia pode facilitar a rotina de barbearias e seus clientes. A proposta do aplicativo é digitalizar o processo de agendamento, oferecendo uma experiência prática, rápida e moderna tanto para quem presta o serviço quanto para quem o consome.
            </p>
            
            <div className={styles.mobileLinks}>
              <a 
                href="https://www.figma.com/design/LwghlMWhR57PfnBAbqNpOb/BarberMap?t=2hBLInrDSL6X7ANe-1" 
                className={styles.mobileLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Protótipo</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </a>
              <a 
                href="https://github.com/ArthurZimm/BarberMap" 
                className={styles.mobileLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Repositório</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Projeto 2 - Bruna Arquitetura */}
        <div 
          ref={(el) => {
            projectRefs.current[1] = el;
          }}
          className={styles.mobileProjectCard}
        >
          <div className={styles.projectImageContainer}>
            <div className={styles.imageWrapper}>
                             <Image
                 src="/bruna_arch_desktop.svg"
                 alt="Projeto Bruna Arquitetura"
                 width={500}
                 height={300}
                 className={styles.mobileProjectImage}
               />
              <div className={styles.imageOverlay}>
                <span className={styles.projectType}>Website</span>
              </div>
            </div>
          </div>
          
          <div className={styles.projectContent}>
            <div className={styles.projectBadge}>Website Profissional</div>
            <h3 className={styles.projectTitle}>Portfólio de Arquitetura</h3>
            <p className={styles.projectDescription}>
              Um projeto desenvolvido pela <strong>AG Custom</strong> em parceria com a arquiteta <strong>Brunelly Baiocco</strong>. O objetivo foi criar uma plataforma digital elegante e funcional para apresentar seus projetos, conceitos e portfólio de arquitetura de forma moderna e acessível.
            </p>
            
            <div className={styles.mobileLinks}>
              <a 
                href="https://www.figma.com/design/HIo4oAyJP2FTo2nx5Gdikt/Bruna-Arch?node-id=0-1&t=2hBLInrDSL6X7ANe-1" 
                className={styles.mobileLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Protótipo</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </a>
              <a 
                href="https://github.com/AG-Custom/website_brunelly_baiocco" 
                className={styles.mobileLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Repositório</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </a>
              <a 
                href="https://website-brunelly-baiocco-ivory.vercel.app/" 
                className={styles.mobileLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Site</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={styles.mobileCTA}>
          <h3>Interessado em trabalhar conosco?</h3>
          <p>Vamos criar algo incrível juntos!</p>
          <a href="/contatos" className={styles.ctaButton}>
            Entre em Contato
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProjetosMobile; 