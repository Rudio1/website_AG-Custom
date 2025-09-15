"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ContatosSection.module.scss';

const ContatosSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const requestBody = {
        name: formData.nome,
        email: formData.email,
        phone: formData.telefone,
        assunto: formData.mensagem,
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
      } else {
        const errorData = await response.text();
        console.error('Erro da API:', response.status, errorData);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.contatos}>
      <div className={styles.contatos__container}>
        {/* Header Mobile */}
        <div className={styles.contatos__header}>
          <h1 className={styles.contatos__title}></h1>
          <p className={styles.contatos__subtitle}>
          </p>
        </div>

        <div className={styles.contatos__content}>
          {/* Informações de Contato */}
          <div className={styles.contatos__info}>
            <h2 className={styles.contatos__infoTitle}>Nossos Contatos</h2>
            
            <div className={styles.contatos__contactList}>
              <div className={styles.contatos__contactItem}>
                <div className={styles.contatos__contactIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div className={styles.contatos__contactDetails}>
                  <span className={styles.contatos__contactLabel}>Email</span>
                  <a href="mailto:agcustomltda@gmail.com" className={styles.contatos__contactLink}>
                    agcustomltda@gmail.com
                  </a>
                </div>
              </div>

              <div className={styles.contatos__contactItem}>
                <div className={styles.contatos__contactIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div className={styles.contatos__contactDetails}>
                  <span className={styles.contatos__contactLabel}>Telefone</span>
                  <a href="tel:+5527997920801" className={styles.contatos__contactLink}>
                    (27) 99792-0801
                  </a>
                </div>
              </div>

              <div className={styles.contatos__contactItem}>
                <div className={styles.contatos__contactIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div className={styles.contatos__contactDetails}>
                  <span className={styles.contatos__contactLabel}>GitHub</span>
                  <a href="https://github.com/AG-Custom" target="_blank" rel="noopener noreferrer" className={styles.contatos__contactLink}>
                    github.com/AG-Custom
                  </a>
                </div>
              </div>
            </div>
            
            {/* Ilustração */}
            <div className={styles.contatos__illustration}>
              <Image
                src="/jumping.svg"
                alt="Ilustração de contato"
                width={280}
                height={220}
                priority
              />
            </div>
          </div>

          {/* Formulário */}
          <div className={styles.contatos__formWrapper}>
            <div className={styles.contatos__form}>
              <h3 className={styles.contatos__formTitle}>Envie sua Mensagem</h3>
              
              <form onSubmit={handleSubmit} className={styles.contatos__formElement}>
                <div className={styles.contatos__field}>
                  <label htmlFor="nome" className={styles.contatos__label}>
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Digite seu nome completo"
                    value={formData.nome}
                    onChange={handleInputChange}
                    className={styles.contatos__input}
                    required
                  />
                </div>

                <div className={styles.contatos__field}>
                  <label htmlFor="email" className={styles.contatos__label}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.contatos__input}
                    required
                  />
                </div>

                <div className={styles.contatos__field}>
                  <label htmlFor="telefone" className={styles.contatos__label}>
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    placeholder="(27) 99999-9999"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    className={styles.contatos__input}
                  />
                </div>

                <div className={styles.contatos__field}>
                  <label htmlFor="mensagem" className={styles.contatos__label}>
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    placeholder="Conte-nos sobre seu projeto..."
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    rows={4}
                    className={styles.contatos__textarea}
                    required
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className={styles.contatos__statusSuccess}>
                    ✅ Mensagem enviada com sucesso! Entraremos em contato em breve.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className={styles.contatos__statusError}>
                    ❌ Erro ao enviar mensagem. Tente novamente.
                  </div>
                )}

                <button 
                  type="submit" 
                  className={styles.contatos__button}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className={styles.contatos__spinner}></span>
                      Enviando...
                    </>
                  ) : (
                    'Enviar Mensagem'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContatosSection; 