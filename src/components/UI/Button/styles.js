// src/components/UI/Button/styles.js
import styled, { css, keyframes } from 'styled-components';

const ripple = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.7;
  }
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
`;

const wobble = keyframes`
  0%, 100% { transform: rotate(0) scale(1); }
  25% { transform: rotate(-3deg) scale(1.05); }
  75% { transform: rotate(3deg) scale(1.05); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
`;

const rainbow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

// Cambiado para usar $variant en lugar de variant
const getVariantStyles = ($variant, theme) => {
  const variants = {
    primary: css`
      background-color: ${theme.colors.primary};
      color: white;
      border-radius: ${theme.radii.xl};
      box-shadow: 0 5px 0 ${theme.colors.primary}99;
      transform-style: preserve-3d;
      
      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 0 ${theme.colors.primary}99;
        animation: ${wobble} 0.6s ease-in-out;
      }
      
      &:active {
        transform: translateY(2px);
        box-shadow: 0 2px 0 ${theme.colors.primary}99;
      }
    `,
    secondary: css`
      background-color: ${theme.colors.secondary};
      color: white;
      border-radius: ${theme.radii.xl};
      box-shadow: 0 5px 0 ${theme.colors.secondary}99;
      
      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 0 ${theme.colors.secondary}99;
        animation: ${wobble} 0.6s ease-in-out;
      }
      
      &:active {
        transform: translateY(2px);
        box-shadow: 0 2px 0 ${theme.colors.secondary}99;
      }
    `,
    rainbow: css`
      background: linear-gradient(
        90deg,
        ${theme.colors.gradients.rainbow.color1},
        ${theme.colors.gradients.rainbow.color2},
        ${theme.colors.gradients.rainbow.color3},
        ${theme.colors.gradients.rainbow.color4},
        ${theme.colors.gradients.rainbow.color5},
        ${theme.colors.gradients.rainbow.color6},
        ${theme.colors.gradients.rainbow.color7}
      );
      background-size: 700% 700%;
      color: white;
      text-shadow: 0 1px 2px rgba(0,0,0,0.2);
      border-radius: ${theme.radii.xl};
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      font-weight: ${theme.fontWeights.bold};
      animation: ${rainbow} 6s linear infinite;
      
      &:hover {
        animation: ${rainbow} 3s linear infinite;
        transform: translateY(-3px);
        box-shadow: 0 8px 20px rgba(0,0,0,0.15);
      }
      
      &:active {
        transform: translateY(2px);
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      }
    `,
    cloud: css`
      background-color: ${theme.name === 'dark' ? '#4B5563' : 'white'};
      color: ${theme.name === 'dark' ? 'white' : theme.colors.text};
      border-radius: ${theme.radii.cloud};
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      font-weight: ${theme.fontWeights.bold};
      animation: ${float} 3s ease-in-out infinite;
      
      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        background-color: ${theme.name === 'dark' ? '#606B7D' : 'white'};
      }
      
      &:active {
        transform: translateY(2px);
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      }
    `,
    candy: css`
      background: linear-gradient(
        135deg,
        ${theme.colors.gradients.candy.from} 0%,
        ${theme.colors.gradients.candy.via} 50%,
        ${theme.colors.gradients.candy.to} 100%
      );
      color: #2B2D42;
      border-radius: ${theme.radii.pill};
      box-shadow: 0 5px 0 ${theme.colors.gradients.candy.via}99;
      font-weight: ${theme.fontWeights.bold};
      
      &:hover {
        transform: translateY(-3px) rotate(-1deg);
        box-shadow: 0 8px 0 ${theme.colors.gradients.candy.via}99;
      }
      
      &:active {
        transform: translateY(2px);
        box-shadow: 0 2px 0 ${theme.colors.gradients.candy.via}99;
      }
    `,
    ocean: css`
      background: linear-gradient(
        135deg,
        ${theme.colors.gradients.ocean.from} 0%,
        ${theme.colors.gradients.ocean.via} 50%,
        ${theme.colors.gradients.ocean.to} 100%
      );
      color: white;
      text-shadow: 0 1px 2px rgba(0,0,0,0.2);
      border-radius: ${theme.radii.xl};
      box-shadow: 0 5px 0 ${theme.colors.gradients.ocean.via}99;
      
      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 0 ${theme.colors.gradients.ocean.via}99;
        animation: ${wobble} 0.6s ease-in-out;
      }
      
      &:active {
        transform: translateY(2px);
        box-shadow: 0 2px 0 ${theme.colors.gradients.ocean.via}99;
      }
    `
  };
  
  return variants[$variant] || variants.primary;
};

export const StyledButton = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ size }) => {
    const sizes = {
      sm: '0.5rem 1.5rem',
      md: '0.75rem 2rem',
      lg: '1rem 2.5rem'
    };
    return sizes[size] || sizes.md;
  }};
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 600;
  font-size: ${({ size }) => {
    const sizes = {
      sm: '0.875rem',
      md: '1.1rem',
      lg: '1.25rem'
    };
    return sizes[size] || sizes.md;
  }};
  line-height: 1.5;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  overflow: hidden;
  letter-spacing: 1px;
  border: none;
  width: ${({ $fullWidth }) => $fullWidth ? '100%' : 'auto'};
  
  ${({ $variant, theme }) => getVariantStyles($variant, theme)}

  &:active {
    transform: translateY(2px) scale(0.98);
  }

  ${({ disabled }) => disabled && css`
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
    filter: grayscale(50%);
  `}

  ${({ $loading }) => $loading && css`
    cursor: wait;
    pointer-events: none;
    
    &::after {
      content: '';
      position: absolute;
      width: 1.2rem;
      height: 1.2rem;
      border: 3px solid transparent;
      border-top-color: currentColor;
      border-right-color: currentColor;
      border-radius: 50%;
      animation: ${spin} 0.7s linear infinite;
    }
  `}

  .ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ${ripple} 0.8s linear;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.3) 100%);
  }
`;