// src/components/Layout/Grid/index.js
import React from 'react';
import { StyledGrid } from './styles';

const Grid = ({ 
  children,
  columns,
  autoFit,
  minWidth,
  gap = 'md',
  ...props 
}) => {
  return (
    <StyledGrid
      $columns={columns}
      $autoFit={autoFit}
      $minWidth={minWidth}
      $gap={gap}
      {...props}
    >
      {children}
    </StyledGrid>
  );
};

export default Grid;