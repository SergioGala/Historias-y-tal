import React from 'react';
import { StyledContainer } from './styles';

const Container = ({ children, fluid, ...props }) => {
  return (
    <StyledContainer fluid={fluid} {...props}>
      {children}
    </StyledContainer>
  );
};

export default Container