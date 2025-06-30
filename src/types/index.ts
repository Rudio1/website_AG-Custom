// Tipos para componentes de UI
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

export interface TitleProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  centered?: boolean;
}

// Tipos para dados do site
export interface Testimonial {
  id: number;
  name: string;
  company: string;
  message: string;
  rating: number;
  avatar?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  workingHours: string;
}

// Tipos para metadados
export interface SiteMetadata {
  title: string;
  description: string;
  author: string;
  siteUrl: string;
  social: {
    instagram?: string;
    linkedin?: string;
    email: string;
  };
} 