import React from 'react';
import Image from 'next/image';
import styles from './HeroSection.module.scss';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        {/* Conteúdo à esquerda */}
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Chega de<br />
            <span className={styles.heroTitleEmphasis}>Quebrar a cabeça!</span>
          </h1>
          <p className={styles.heroDescription}>
            Somos especialistas em desenvolver sites, aplicativos e soluções sob medida que descomplicam o seu dia a dia. Cuidamos de toda a parte técnica, desde a ideia até a entrega, para que você possa focar no que realmente importa.
          </p>
          <div className={styles.heroActions}>
            <button className={styles.heroButton}>
              Saiba mais
            </button>
          </div>
        </div>

        {/* SVG à direita */}
        <div className={styles.heroIllustration}>
          <Image 
            src="/Illustration - messy.svg" 
            alt="Ilustração de pessoa em movimento com documentos voando" 
            width={461} 
            height={346}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 