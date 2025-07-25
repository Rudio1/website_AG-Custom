"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './ProjetosSection.module.scss';

const ProjetosSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
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
        rootMargin: '0px 0px -50px 0px'
      }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.projetosSection}>
      <div className={styles.projetosContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Projetos</h2>
          <p className={styles.sectionSubtitle}>
            Conheça alguns dos nossos trabalhos mais recentes
          </p>
        </div>
        <div 
          ref={(el) => {
            projectRefs.current[0] = el;
          }}
          className={styles.projetoItem}
        >
          <div className={styles.projetoText}>
            <h3>BarberMap</h3>
            <p>
              O <strong>BarberMap</strong> é um protótipo com o propósito de explorar como a tecnologia pode facilitar a rotina de barbearias e seus clientes. A proposta do aplicativo é digitalizar o processo de agendamento, oferecendo uma experiência prática, rápida e moderna tanto para quem presta o serviço quanto para quem o consome.
            </p>
            <div className={styles.links}>
                <a href="https://www.figma.com/design/LwghlMWhR57PfnBAbqNpOb/BarberMap?t=2hBLInrDSL6X7ANe-1" className={styles.projetoLink}>
                  <span>Protótipo</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </a>
                <a href="https://github.com/ArthurZimm/BarberMap" className={styles.projetoLink}>
                  <span>Repositório</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </a>
            </div>
          </div>
          <div className={styles.projetoImage}>
            <Image
              src="/barbermap_cell.svg"
              alt="Projeto BarberMap"
              width={400}
              height={280}
            />
          </div>
        </div>

        <div 
          ref={(el) => {
            projectRefs.current[1] = el;
          }}
          className={styles.projetoItem}
        >
          <div className={styles.projetoImage}>
            <Image
              src="/bruna_arch_desktop.svg"
              alt="Projeto Bruna Arquitetura"
              width={600}
              height={280}
            />
          </div>
          <div className={styles.projetoText}>
            <h3>Portfólio de Arquitetura</h3>
            <p>
              Um projeto desenvolvido pela <strong>AG Custom</strong> em parceria com a arquiteta <strong>Brunelly Baiocco</strong>. O objetivo foi criar uma plataforma digital elegante e funcional para apresentar seus projetos, conceitos e portfólio de arquitetura de forma moderna e acessível.
            </p>
            <div className={styles.links}>
              <a href="https://www.figma.com/design/HIo4oAyJP2FTo2nx5Gdikt/Bruna-Arch?node-id=0-1&t=2hBLInrDSL6X7ANe-1" className={styles.projetoLink}>
                <span>Protótipo</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </a>
              <a href="https://github.com/AG-Custom/website_brunelly_baiocco" className={styles.projetoLink}>
                <span>Repositório</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </a>
              <a href="https://website-brunelly-baiocco-ivory.vercel.app/" className={styles.projetoLink}>
                <span>Site</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjetosSection;
