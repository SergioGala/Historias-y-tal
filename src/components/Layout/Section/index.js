// src/components/Layout/Section/index.js
import React from 'react';
import { StyledSection } from './styles';

const Section = ({ children, variant = 'default', ...props }) => {
  return (
    <StyledSection $variant={variant} {...props}>
      {children}
    </StyledSection>
  );
};

export default Section;