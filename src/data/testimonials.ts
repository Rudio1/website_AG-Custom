import { Testimonial } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Maria Silva',
    company: 'Empresa ABC',
    message: 'Excelente trabalho! A AG Custom entregou exatamente o que precisávamos.',
    rating: 5,
  },
  {
    id: 2,
    name: 'João Santos',
    company: 'Tech Solutions',
    message: 'Profissionais muito competentes e atenciosos. Recomendo!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ana Costa',
    company: 'Startup XYZ',
    message: 'Projeto entregue no prazo e com qualidade excepcional.',
    rating: 5,
  },
];

export const services = [
  {
    id: 1,
    title: 'Desenvolvimento Web',
    description: 'Sites e aplicações web personalizadas.',
    icon: '🌐',
    features: ['Design Responsivo', 'SEO Otimizado', 'Performance'],
    price: 'A partir de R$ 2.500',
  },
  {
    id: 2,
    title: 'Aplicativos Mobile',
    description: 'Apps nativos e multiplataforma.',
    icon: '📱',
    features: ['iOS & Android', 'Design Intuitivo', 'Push Notifications'],
    price: 'A partir de R$ 5.000',
  },
  {
    id: 3,
    title: 'E-commerce',
    description: 'Lojas virtuais completas e seguras.',
    icon: '🛒',
    features: ['Pagamento Seguro', 'Gestão de Estoque', 'Analytics'],
    price: 'A partir de R$ 3.500',
  },
]; 