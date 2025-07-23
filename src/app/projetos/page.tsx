"use client";

import React, { useState, useEffect } from 'react';
import ProjetosSection from '../sections/ProjetosSection';
import ProjetosMobile from '../sections/ProjetosMobile';

export default function Projetos() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <div className="page">
      {isMobile ? <ProjetosMobile /> : <ProjetosSection />}
    </div>
  );
} 