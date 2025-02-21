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

const rainbow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const neonPulse = keyframes`
  0% {
    box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px currentColor, 0 0 20px currentColor;
  }
  100% {
    box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px currentColor, 0 0 40px currentColor;
  }
`;

const glitch = keyframes`
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(-2px, -2px);
  }
  60% {
    transform: translate(2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(0);
  }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const getVariantStyles = (variant, theme) => {
  const variants = {
    primary: css`
      background: linear-gradient(
        135deg,
        ${theme.colors.gradients.cyberpunk.from} 0%,
        ${theme.colors.gradients.cyberpunk.via} 50%,
        ${theme.colors.gradients.cyberpunk.to} 100%
      );
      background-size: 300% 300%;
      color: white;
      text-shadow: 0 0 5px rgba(255,255,255,0.5);
      animation: ${rainbow} 5s ease infinite;

      &:hover {
        animation: ${rainbow} 3s ease infinite;
        box-shadow: 
          0 0 10px ${theme.colors.gradients.cyberpunk.from},
          0 0 20px ${theme.colors.gradients.cyberpunk.via},
          0 0 30px ${theme.colors.gradients.cyberpunk.to};
        text-shadow: 0 0 10px white;
      }
    `,
    secondary: css`
      background: linear-gradient(
        135deg,
        ${theme.colors.gradients.toxic.from} 0%,
        ${theme.colors.gradients.toxic.via} 50%,
        ${theme.colors.gradients.toxic.to} 100%
      );
      background-size: 300% 300%;
      color: black;
      text-shadow: 0 0 5px rgba(255,255,255,0.5);
      animation: ${rainbow} 5s ease infinite;
      border: 2px solid transparent;

      &:hover {
        animation: 
          ${rainbow} 3s ease infinite,
          ${neonPulse} 1s ease-in-out infinite alternate;
        text-shadow: 0 0 10px black;
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
      text-shadow: 0 0 5px rgba(0,0,0,0.5);
      animation: ${rainbow} 10s linear infinite;

      &:hover {
        animation: ${rainbow} 3s linear infinite;
        box-shadow: 
          0 0 10px rgba(255,255,255,0.5),
          0 0 20px rgba(255,255,255,0.3),
          0 0 30px rgba(255,255,255,0.2);
      }
    `,
    danger: css`
      background: linear-gradient(
        135deg,
        ${theme.colors.gradients.lava.from} 0%,
        ${theme.colors.gradients.lava.via} 50%,
        ${theme.colors.gradients.lava.to} 100%
      );
      background-size: 300% 300%;
      color: white;
      text-shadow: 0 0 5px rgba(255,0,0,0.5);
      animation: ${rainbow} 5s ease infinite;

      &:hover {
        animation: 
          ${rainbow} 3s ease infinite,
          ${glitch} 0.3s ease infinite;
        box-shadow: 
          0 0 10px ${theme.colors.gradients.lava.from},
          0 0 20px ${theme.colors.gradients.lava.via};
      }
    `,
    alien: css`
      background: linear-gradient(
        135deg,
        ${theme.colors.gradients.alien.from} 0%,
        ${theme.colors.gradients.alien.via} 50%,
        ${theme.colors.gradients.alien.to} 100%
      );
      background-size: 300% 300%;
      color: black;
      text-shadow: 0 0 5px rgba(255,255,255,0.5);
      animation: ${rainbow} 5s ease infinite;
      border: 2px solid transparent;

      &:hover {
        animation: 
          ${rainbow} 3s ease infinite,
          ${neonPulse} 1s ease-in-out infinite alternate;
        letter-spacing: 2px;
      }
    `
  };
  return variants[variant];
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
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: ${({ size }) => {
    const sizes = {
      sm: '0.875rem',
      md: '1rem',
      lg: '1.25rem'
    };
    return sizes[size] || sizes.md;
  }};
  line-height: 1.5;
  border-radius: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  overflow: hidden;
  letter-spacing: 1px;
  border: none;
  transform-style: preserve-3d;
  perspective: 1000px;
  
  ${({ variant, theme }) => getVariantStyles(variant, theme)}

  &:active {
    transform: translateY(2px) scale(0.98);
  }

  ${({ disabled }) => disabled && css`
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
    filter: grayscale(50%);
  `}

  ${({ loading }) => loading && css`
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
    background: radial-gradient(circle, rgba(0, 0, 0, 0.7) 0%, rgba(255, 0, 0, 0.64));
  }
`;