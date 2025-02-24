// src/components/UI/Modal/styles.js
import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from { 
    opacity: 0;
    backdrop-filter: blur(0px);
  }
  to { 
    opacity: 1;
    backdrop-filter: blur(8px);
  }
`;

const slideIn = keyframes`
  from { 
    opacity: 0;
    transform: translateY(-50px) scale(0.95);
  }
  to { 
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const glowPulse = keyframes`
  0% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.3); }
  50% { box-shadow: 0 0 40px rgba(99, 102, 241, 0.5); }
  100% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.3); }
`;

const rainbowGradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const getVariantStyles = (variant = 'default', theme) => {
  const variants = {
    default: css`
      background: ${({ $dark }) => $dark ? '#1a1a1a' : 'white'};
      color: ${({ $dark }) => $dark ? 'white' : '#1a1a1a'};
      border: 1px solid ${({ $dark }) => $dark ? '#333' : theme.colors.gray[200]};
    `,
    cyber: css`
      background: ${({ $dark }) => $dark ? 'rgba(20, 20, 35, 0.95)' : 'rgba(255, 255, 255, 0.95)'};
      color: ${({ $dark }) => $dark ? '#E2E8F0' : '#1E293B'};
      border: 2px solid transparent;
      position: relative;
      overflow: hidden;

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
        animation: ${rainbowGradient} 3s linear infinite;
        background-size: 200% 200%;
      }
    `,
    neon: css`
      background: ${({ $dark }) => $dark ? '#1a1a1a' : 'white'};
      color: ${({ $dark }) => $dark ? '#00ff00' : '#059669'};
      border: 2px solid #00ff00;
      box-shadow: 
        0 0 10px #00ff00,
        0 0 20px rgba(0, 255, 0, 0.5);

      * {
        text-shadow: ${({ $dark }) => $dark ? '0 0 5px #00ff00' : 'none'};
      }
    `,
    rainbow: css`
      background: ${({ $dark }) => $dark ? '#1a1a1a' : 'white'};
      color: ${({ $dark }) => $dark ? 'white' : '#1a1a1a'};
      position: relative;
      border: none;
      padding: 2px;
      
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
        animation: ${rainbowGradient} 5s linear infinite;
        background-size: 400% 400%;
      }
    `
  };
  return variants[variant];
};

const getOverlayStyles = (variant = 'default') => {
  const variants = {
    default: css`
      background: rgba(0, 0, 0, 0.7);
    `,
    cyber: css`
      background: rgba(20, 20, 35, 0.8);
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: 
          linear-gradient(45deg, transparent 45%, rgba(99, 102, 241, 0.1) 50%, transparent 55%),
          linear-gradient(-45deg, transparent 45%, rgba(99, 102, 241, 0.1) 50%, transparent 55%);
        background-size: 200px 200px;
        animation: ${rainbowGradient} 30s linear infinite;
      }
    `,
    neon: css`
      background: rgba(0, 0, 0, 0.85);
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: 
          radial-gradient(circle at 50% 50%, rgba(0, 255, 0, 0.1), transparent 50%);
      }
    `,
    rainbow: css`
      background: rgba(0, 0, 0, 0.8);
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
          45deg,
          rgba(255, 0, 0, 0.1),
          rgba(255, 166, 0, 0.1),
          rgba(255, 255, 0, 0.1),
          rgba(0, 255, 0, 0.1),
          rgba(0, 255, 255, 0.1),
          rgba(0, 0, 255, 0.1),
          rgba(255, 0, 255, 0.1)
        );
        animation: ${rainbowGradient} 20s linear infinite;
        background-size: 400% 400%;
      }
    `
  };
  return variants[variant];
};

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease;
  ${({ variant }) => getOverlayStyles(variant)}
`;

export const ModalContent = styled.div`
  position: relative;
  min-width: 300px;
  max-width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  padding: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  animation: ${slideIn} 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  ${({ variant, theme }) => getVariantStyles(variant, theme)}
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ $dark }) => $dark ? '#666' : '#333'};
  transition: all 0.2s ease;
  z-index: 10;

  &:hover {
    color: ${({ $dark, theme }) => $dark ? theme.colors.primary.light : theme.colors.primary.main};
    transform: scale(1.1) rotate(90deg);
  }
`;