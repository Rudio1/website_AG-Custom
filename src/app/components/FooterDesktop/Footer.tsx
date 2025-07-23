import React from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer__container']}>
        <div className={styles['footer__content']}>
          <p className={styles['footer__text']}>
            © 2025 <b>AG Custom</b>. Todos os direitos reservados
          </p>
          <div className={styles['footer__logo']}>
            <Image 
              src="/logo_footer.svg" 
              alt="AG Custom Logo" 
              width={40} 
              height={40}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 