import styled, { css, keyframes } from 'styled-components';

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px) scaleY(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scaleY(1);
  }
`;

const glowingBorder = keyframes`
  0% { border-color: rgba(99, 102, 241, 0.5); }
  50% { border-color: rgba(99, 102, 241, 1); }
  100% { border-color: rgba(99, 102, 241, 0.5); }
`;

const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const getVariantStyles = (variant = 'default', $dark, theme) => {
  const variants = {
    default: css`
      background: ${$dark ? '#1a1a1a' : 'white'};
      border: 1px solid ${$dark ? '#333' : '#e2e8f0'};
      color: ${$dark ? '#e2e8f0' : '#1a1a1a'};
      
      &:hover {
        border-color: ${theme.colors.primary.main};
        box-shadow: 0 0 10px rgba(99, 102, 241, 0.2);
      }
    `,
    cyber: css`
      background: ${$dark ? 'rgba(20, 20, 35, 0.95)' : 'rgba(255, 255, 255, 0.95)'};
      backdrop-filter: blur(10px);
      border: 2px solid transparent;
      color: ${$dark ? '#e2e8f0' : '#1a1a1a'};

      &::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
        padding: 2px;
        background: linear-gradient(
          45deg,
          ${theme.colors.primary.light},
          ${theme.colors.secondary.main},
          ${theme.colors.primary.dark}
        );
        -webkit-mask: 
          linear-gradient(#fff 0 0) content-box, 
          linear-gradient(#fff 0 0);
        mask: 
          linear-gradient(#fff 0 0) content-box, 
          linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
      }

      &:hover {
        transform: translateY(-1px);
        box-shadow: 
          0 0 20px ${theme.colors.primary.main}40,
          0 0 40px ${theme.colors.primary.main}20;
      }

      &::after {
        color: ${theme.colors.primary.main};
      }
    `,
    neon: css`
      background: ${$dark ? '#1a1a1a' : 'white'};
      border: 2px solid #00ff00;
      color: ${$dark ? '#00ff00' : '#059669'};
      text-shadow: ${$dark ? '0 0 5px #00ff00' : 'none'};
      box-shadow: 0 0 10px rgba(0, 255, 0, 0.2);

      &:hover {
        box-shadow: 
          0 0 10px rgba(0, 255, 0, 0.4),
          0 0 20px rgba(0, 255, 0, 0.2);
      }

      &::after {
        color: #00ff00;
        text-shadow: 0 0 5px #00ff00;
      }
    `,
    rainbow: css`
      background: ${$dark ? '#1a1a1a' : 'white'};
      color: ${$dark ? '#e2e8f0' : '#1a1a1a'};
      border: 2px solid transparent;
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
        padding: 2px;
        background: linear-gradient(
          45deg,
          #ff0000,
          #ff7300,
          #fffb00,
          #48ff00,
          #00ffd5,
          #002bff,
          #7a00ff,
          #ff00c8,
          #ff0000
        );
        -webkit-mask: 
          linear-gradient(#fff 0 0) content-box, 
          linear-gradient(#fff 0 0);
        mask: 
          linear-gradient(#fff 0 0) content-box, 
          linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        animation: ${gradientMove} 5s linear infinite;
        background-size: 400% 400%;
      }
    `
  };
  return variants[variant];
};

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  min-width: 200px;
`;

export const DropdownTrigger = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  
  ${({ variant, $dark, theme }) => getVariantStyles(variant, $dark, theme)}

  &:after {
    content: '▼';
    font-size: 0.8em;
    transition: transform 0.3s ease;
    transform: ${({ $isOpen }) => $isOpen ? 'rotate(180deg)' : 'rotate(0)'};
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  right: 0;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
  z-index: 100;
  transform-origin: top center;
  animation: ${slideDown} 0.2s ease;
  ${({ variant, $dark, theme }) => getVariantStyles(variant, $dark, theme)}
`;

export const DropdownItem = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  color: inherit;
  font-size: 0.95rem;
  position: relative;
  overflow: hidden;

  &:hover {
    background: ${({ $dark }) => $dark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
  }

  ${({ $selected, variant, $dark, theme }) => $selected && css`
    background: ${$dark ? 'rgba(99, 102, 241, 0.2)' : 'rgba(99, 102, 241, 0.1)'};
    color: ${theme.colors.primary.main};
    font-weight: 500;

    &:hover {
      background: ${$dark ? 'rgba(99, 102, 241, 0.3)' : 'rgba(99, 102, 241, 0.15)'};
    }
  `}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background: ${({ $selected, theme }) => $selected ? theme.colors.primary.main : 'transparent'};
    transition: all 0.2s ease;
  }
`;

export const Divider = styled.div`
  height: 1px;
  background: ${({ $dark }) => $dark ? '#333' : '#e2e8f0'};
  margin: 0.5rem 0;
`;