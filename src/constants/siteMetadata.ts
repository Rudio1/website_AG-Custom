import { SiteMetadata } from '@/types';

export const siteMetadata: SiteMetadata = {
  title: 'AG Custom',
  description: 'Soluções personalizadas para seu negócio. Desenvolvemos projetos únicos e sob medida.',
  author: 'AG Custom',
  siteUrl: 'https://agcustom.com',
  social: {
    instagram: 'https://instagram.com/agcustom',
    linkedin: 'https://linkedin.com/company/agcustom',
    email: 'contato@agcustom.com',
  },
};

export const contactInfo = {
  email: 'contato@agcustom.com',
  phone: '(11) 99999-9999',
  address: 'São Paulo, SP',
  workingHours: 'Segunda à Sexta: 9h às 18h',
};

export const navigationLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Serviços' },
  { href: '#about', label: 'Sobre' },
  { href: '#contact', label: 'Contato' },
]; 