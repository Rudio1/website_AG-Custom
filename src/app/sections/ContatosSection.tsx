"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ContatosSection.module.scss';

const ContatosSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aqui implementaria o envio do formulário
  };

  return (
    <section className={styles.contatos}>
      <div className={styles.contatos__container}>
        <div className={styles.contatos__content}>
          {/* Lado esquerdo - Informações de contato */}
          <div className={styles.contatos__info}>
            <h2 className={styles.contatos__title}>Nossos Contatos</h2>
            <div className={styles.contatos__details}>
              <p>agcustomltda@gmail.com</p>
              <p>github.com/AG-Custom</p>
              <p>(27) 99792-0801</p>
            </div>
            
            {/* SVG dentro do container */}
            <div className={styles.contatos__illustration}>
              <Image
                src="/jumping.svg"
                alt="Ilustração"
                width={326}
                height={264}
              />
            </div>
          </div>

          {/* Lado direito - Formulário */}
          <div className={styles.contatos__formWrapper}>
            <div className={styles.contatos__form}>
              <form onSubmit={handleSubmit}>
                <div className={styles.contatos__field}>
                  <label htmlFor="nome">Nome</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Seu nome completo"
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className={styles.contatos__field}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className={styles.contatos__field}>
                  <label htmlFor="mensagem">Mensagem</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    placeholder="Digite sua mensagem aqui..."
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    rows={5}
                    required
                  />
                </div>
              </form>
            </div>
            
            {/* Botão de enviar embaixo do formulário */}
            <div className={styles.contatos__submit}>
              <button type="submit" onClick={handleSubmit} className={styles.contatos__button}>
                Enviar Mensagem
              </button>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default ContatosSection; 