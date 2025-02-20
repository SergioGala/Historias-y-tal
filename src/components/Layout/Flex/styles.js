import styled, { css } from 'styled-components';

export const StyledFlex = styled.div`
  display: flex;
  gap: ${({ gap, theme }) => theme.spacing[gap] || theme.spacing.md};
  
  ${({ direction }) => direction && css`
    flex-direction: ${direction};
  `}
  
  ${({ justify }) => justify && css`
    justify-content: ${justify};
  `}
  
  ${({ align }) => align && css`
    align-items: ${align};
  `}
  
  ${({ wrap }) => wrap && css`
    flex-wrap: ${wrap};
  `}
`;
