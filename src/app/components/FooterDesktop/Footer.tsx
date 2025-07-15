import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer__container']}>
        <div className={styles['footer__content']}>
          <div className={styles['footer__section']}>
            <h3>AG Custom</h3>
            <p>
              Soluções personalizadas para seu negócio.
            </p>
          </div>
          
          <div className={styles['footer__section']}>
            <h4>Links Rápidos</h4>
            <ul className={styles['footer__links']}>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>
          
          <div className={styles['footer__section']}>
            <h4>Contato</h4>
            <p>Email: contato@agcustom.com</p>
            <p>Telefone: (11) 99999-9999</p>
          </div>
        </div>
        
        <div className={styles['footer__bottom']}>
          <p>
            © 2024 AG Custom. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 