import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__section">
            <h3>AG Custom</h3>
            <p>
              Soluções personalizadas para seu negócio.
            </p>
          </div>
          
          <div className="footer__section">
            <h4>Links Rápidos</h4>
            <ul className="footer__links">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>
          
          <div className="footer__section">
            <h4>Contato</h4>
            <p>Email: contato@agcustom.com</p>
            <p>Telefone: (11) 99999-9999</p>
          </div>
        </div>
        
        <div className="footer__bottom">
          <p>
            © 2024 AG Custom. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 