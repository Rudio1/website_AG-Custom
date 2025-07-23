'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './CallToActionSection.module.scss';

const CallToActionSection: React.FC = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/contatos');
  };

  return (
    <section className={styles.callToActionSection}>
      <div className={styles.callToActionContainer}>
        <div className={styles.callToActionIllustration}>
          <Image 
            src="/unboxing.svg" 
            alt="Pessoa explorando uma caixa aberta - representando descoberta e novas ideias" 
            width={500} 
            height={500}
            priority
          />
        </div>

        <div className={styles.callToActionContent}>
          <h2 className={styles.callToActionTitle}>
            Tire suas Ideias do papel
          </h2>
          <p className={styles.callToActionDescription}>
            Queremos entender as necessidades do seu negócio e o que torna sua marca única. Nosso objetivo é transformar suas ideias em soluções personalizadas, mantendo a identidade e originalidade do seu projeto. Entre em contato e agende um orçamento com a gente!
          </p>
          <button onClick={handleNavigate} className={styles.callToActionButton}>
            Solicite um Orçamento
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
