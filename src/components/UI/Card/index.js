import React from 'react';
import { StyledCard } from './styles';

const Card = ({ 
  children, 
  variant = 'default',
  padding,
  dark = false,
  ...props 
}) => {
  return (
    <StyledCard 
      variant={variant} 
      $padding={padding}
      $dark={dark}
      {...props}
    >
      {children}
    </StyledCard>
  );
};

export default Card;