// src/components/Layout/Grid/styles.js
import styled from 'styled-components';

export const StyledGrid = styled.div`
  display: grid;
  gap: ${({ $gap, theme }) => theme.spacing[$gap] || theme.spacing.md};
  grid-template-columns: ${({ $columns, $autoFit, $minWidth = '250px' }) => {
    if ($autoFit) return `repeat(auto-fit, minmax(${$minWidth}, 1fr))`;
    if ($columns) return `repeat(${$columns}, 1fr)`;
    return 'none';
  }};
`;
