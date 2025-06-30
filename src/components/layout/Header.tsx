"use client";

import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Scroll spy corrigido para detectar seção ativa
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'contact'];
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Se estamos no final da página, marcar a última seção como ativa
      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setActiveSection('contact');
        return;
      }

      // Offset para considerar o header flutuante
      const offset = 150;
      
      // Encontrar qual seção está mais visível na viewport
      let currentSection = 'home';
      let maxVisible = 0;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top;
          const elementBottom = rect.bottom;
          const elementHeight = rect.height;
          
          // Calcular quanto da seção está visível na viewport
          const visibleTop = Math.max(elementTop, offset);
          const visibleBottom = Math.min(elementBottom, windowHeight);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          
          // Porcentagem da seção que está visível
          const visiblePercentage = visibleHeight / elementHeight;
          
          // Se mais de 20% da seção está visível, considerá-la como candidata
          if (visiblePercentage > 0.2 && visibleHeight > maxVisible) {
            maxVisible = visibleHeight;
            currentSection = section;
          }
          
          // Se a seção está ocupando a maior parte da viewport
          if (elementTop <= offset && elementBottom >= offset + 200) {
            currentSection = section;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    // Adicionar listener de scroll com throttle para performance
    let ticking = false;
    const optimizedScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Adicionar listener de scroll
    window.addEventListener('scroll', optimizedScroll);
    // Executar uma vez para definir seção inicial
    handleScroll();

    // Cleanup
    return () => window.removeEventListener('scroll', optimizedScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (sectionId: string) => {
    closeMobileMenu();
    
    // Atualizar imediatamente o estado ativo
    setActiveSection(sectionId);
    
    // Scroll suave para a seção
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 120; // Compensar altura do header
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <h1>AG Custom</h1>
        </div>
        
        {/* Navigation Desktop */}
        <nav className="header__nav">
          <a 
            href="#home" 
            className={`header__nav-link ${activeSection === 'home' ? 'header__nav-link--active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
          >
            Home
          </a>
          <a 
            href="#services" 
            className={`header__nav-link ${activeSection === 'services' ? 'header__nav-link--active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('services');
            }}
          >
            Serviços
          </a>
          <a 
            href="#about" 
            className={`header__nav-link ${activeSection === 'about' ? 'header__nav-link--active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('about');
            }}
          >
            Sobre
          </a>
          <a 
            href="#contact" 
            className={`header__nav-link ${activeSection === 'contact' ? 'header__nav-link--active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
          >
            Contato
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className={`header__mobile-toggle ${isMobileMenuOpen ? 'header__mobile-toggle--open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
        </button>

        {/* Mobile Menu Dropdown */}
        <div className={`header__mobile-menu ${isMobileMenuOpen ? 'header__mobile-menu--open' : ''}`}>
          <nav className="header__mobile-nav">
            <a 
              href="#home" 
              className={activeSection === 'home' ? '--active' : ''}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
            >
              Home
            </a>
            <a 
              href="#services" 
              className={activeSection === 'services' ? '--active' : ''}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('services');
              }}
            >
              Serviços
            </a>
            <a 
              href="#about" 
              className={activeSection === 'about' ? '--active' : ''}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('about');
              }}
            >
              Sobre
            </a>
            <a 
              href="#contact" 
              className={activeSection === 'contact' ? '--active' : ''}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
            >
              Contato
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 