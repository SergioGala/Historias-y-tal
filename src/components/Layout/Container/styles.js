// src/components/Layout/Container/styles.js
import styled, { css } from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  
  ${props => props.$fluid && css`
    max-width: 100%;
  `}
  
  ${props => props.theme && props.theme.breakpoints && css`
    @media (min-width: ${props => props.theme.breakpoints.md || '768px'}) {
      padding: 0 2rem;
    }
  `}
`;

export default StyledContainer;