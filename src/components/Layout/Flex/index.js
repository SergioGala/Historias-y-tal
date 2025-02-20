import React from 'react';
import { StyledFlex } from './styles';

const Flex = ({ 
  children,
  direction,
  justify = 'flex-start',
  align = 'stretch',
  wrap,
  gap = 'md',
  ...props 
}) => {
  return (
    <StyledFlex
      direction={direction}
      justify={justify}
      align={align}
      wrap={wrap}
      gap={gap}
      {...props}
    >
      {children}
    </StyledFlex>
  );
};

export default Flex;