import React from 'react';

interface TitleProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  centered?: boolean;
  variant?: 'default' | 'primary' | 'muted';
}

const Title: React.FC<TitleProps> = ({
  children,
  level = 1,
  className = '',
  centered = false,
  variant = 'default',
}) => {
  const classes = [
    'title',
    `title--h${level}`,
    centered ? 'title--centered' : '',
    variant !== 'default' ? `title--${variant}` : '',
    className
  ].filter(Boolean).join(' ');
  
  switch (level) {
    case 1:
      return <h1 className={classes}>{children}</h1>;
    case 2:
      return <h2 className={classes}>{children}</h2>;
    case 3:
      return <h3 className={classes}>{children}</h3>;
    case 4:
      return <h4 className={classes}>{children}</h4>;
    case 5:
      return <h5 className={classes}>{children}</h5>;
    case 6:
      return <h6 className={classes}>{children}</h6>;
    default:
      return <h1 className={classes}>{children}</h1>;
  }
};

export default Title; 