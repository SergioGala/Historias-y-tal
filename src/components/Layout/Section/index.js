// src/components/Layout/Section/index.js
import React from 'react';
import { StyledSection } from './styles';

const Section = ({ 
  children, 
  variant = 'primary',
  spacing = 'md',
  ...props 
}) => {
  return (
    <StyledSection 
      $variant={variant}
      $spacing={spacing}
      {...props}
    >
      {children}
    </StyledSection>
  );
};

export default Section;