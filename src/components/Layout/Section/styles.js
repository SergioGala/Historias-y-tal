// src/components/Layout/Section/styles.js
import styled from 'styled-components';

export const StyledSection = styled.section`
  padding: ${({ $spacing, theme }) => theme.spacing[$spacing]} 0;
  background-color: ${({ $variant, theme }) => 
    $variant === 'secondary' 
      ? theme.colors.background.secondary 
      : theme.colors.background.primary
  };
`;