// src/components/Layout/Container/index.js
import React from 'react';
import { StyledContainer } from './styles';

const Container = ({ children, fluid = false, ...props }) => {
  return (
    <StyledContainer $fluid={fluid} {...props}>
      {children}
    </StyledContainer>
  );
};

export default Container;