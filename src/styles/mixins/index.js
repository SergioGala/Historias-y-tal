import { css } from 'styled-components';

// Flexbox mixins
export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

// Grid mixins
export const gridCenter = css`
  display: grid;
  place-items: center;
`;

export const gridAutoFit = (minWidth = '250px') => css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${minWidth}, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
`;

// Media queries mixins
export const mediaQuery = {
  xs: (styles) => css`
    @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
      ${styles}
    }
  `,
  sm: (styles) => css`
    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      ${styles}
    }
  `,
  md: (styles) => css`
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      ${styles}
    }
  `,
  lg: (styles) => css`
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      ${styles}
    }
  `,
  xl: (styles) => css`
    @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
      ${styles}
    }
  `,
  '2xl': (styles) => css`
    @media (min-width: ${({ theme }) => theme.breakpoints['2xl']}) {
      ${styles}
    }
  `,
};

// Animación mixins
export const fadeIn = css`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: fadeIn 0.3s ease-in;
`;

export const slideIn = (direction = 'left', offset = '20px') => css`
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translate${direction === 'left' || direction === 'right' ? 'X' : 'Y'}(${direction === 'left' || direction === 'up' ? offset : `-${offset}`});
    }
    to {
      opacity: 1;
      transform: translate${direction === 'left' || direction === 'right' ? 'X' : 'Y'}(0);
    }
  }
  animation: slideIn 0.3s ease-out;
`;

export const pulse = css`
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
  animation: pulse 1.5s infinite;
`;

// Mixins de utilidad
export const ellipsis = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const hideScrollbar = css`
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;