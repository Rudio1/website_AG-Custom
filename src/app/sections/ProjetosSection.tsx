"use client";

import React from 'react';
import Image from 'next/image';
import styles from './ProjetosSection.module.scss';

const ProjetosSection: React.FC = () => {
  return (
    <section className={styles.projetosSection}>
      <div className={styles.projetosContainer}>
        <h2 className={styles.projetosTitle}>Projetos em Destaque</h2>
        <p className={styles.projetosDescription}>
          Conheça alguns dos projetos que tivemos o prazer de desenvolver.
        </p>

        <div className={styles.projetosGrid}>
          <div className={styles.projetoCard}>
            <div className={styles.projetoImage}>
              <Image
                src="/barbermap_cell.svg"
                alt="Projeto Barbermap"
                width={400}
                height={280}
              />
            </div>
            <div className={styles.projetoContent}>
              <h3>BarberMap</h3>
              <p>Aplicativo mobile para encontrar barbearias próximas com agendamento online e avaliações.</p>
            </div>
          </div>

          <div className={styles.projetoCard}>
            <div className={styles.projetoImage}>
              <Image
                src="/bruna_arch_desktop.svg"
                alt="Projeto Bruna Arquitetura"
                width={400}
                height={280}
              />
            </div>
            <div className={styles.projetoContent}>
              <h3>Bruna Arquitetura</h3>
              <p>Site institucional para arquiteta com galeria de projetos, blog e formulário de contato.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjetosSection;
