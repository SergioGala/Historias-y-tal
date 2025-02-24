// src/components/UI/Input/styles.js
import styled, { css, keyframes } from 'styled-components';

const glow = keyframes`
  0% { box-shadow: 0 0 5px rgba(99, 102, 241, 0.2); }
  50% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.4); }
  100% { box-shadow: 0 0 5px rgba(99, 102, 241, 0.2); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
`;

const borderGlow = keyframes`
  0% { border-color: currentColor; }
  50% { border-color: transparent; }
  100% { border-color: currentColor; }
`;

const getVariantStyles = (variant = 'default', theme) => {
  const variants = {
    default: css`
      border: 2px solid ${theme.colors.gray[200]};
      background: white;
      color: ${theme.colors.gray[900]};
      
      &:focus {
        border-color: ${theme.colors.primary.main};
        animation: ${glow} 2s ease-in-out infinite;
      }
    `,
    search: css`
      padding-left: 2.5rem;
      border-radius: 2rem;
      background: ${theme.colors.gray[100]};
      border: 2px solid transparent;
      color: ${theme.colors.gray[900]};
      
      &:focus {
        background: white;
        border-color: ${theme.colors.primary.light};
        animation: ${glow} 2s ease-in-out infinite;
      }
    `,
    success: css`
      border: 2px solid #22C55E;
      background: #F0FDF4;
      color: #166534;
      
      &:focus {
        border-color: #16A34A;
        box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.2);
      }

      &::placeholder {
        color: #22C55E;
      }
    `,
    error: css`
      border: 2px solid #EF4444;
      background: #FEF2F2;
      color: #991B1B;
      
      &:focus {
        border-color: #DC2626;
        box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.2);
      }

      &::placeholder {
        color: #EF4444;
      }
    `,
    cyber: css`
      border: 2px solid ${theme.colors.gradients.cyberpunk.from};
      background: rgba(0, 0, 0, 0.1);
      color: white;
      
      &:focus {
        border-color: ${theme.colors.gradients.cyberpunk.to};
        background: rgba(0, 0, 0, 0.2);
        box-shadow: 
          0 0 10px ${theme.colors.gradients.cyberpunk.from},
          0 0 20px ${theme.colors.gradients.cyberpunk.to};
      }

      &::placeholder {
        color: rgba(255, 255, 255, 0.6);
      }
    `,
    rainbow: css`
      background: white;
      color: #333;
      border-width: 2px;
      border-style: solid;
      border-image: linear-gradient(
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
      ) 1;
      
      &:focus {
        box-shadow: 
          0 0 10px rgba(255,0,0,0.2),
          0 0 20px rgba(0,255,0,0.2),
          0 0 30px rgba(0,0,255,0.2);
      }

      &::placeholder {
        background: linear-gradient(
          45deg,
          #ff0000,
          #ff7300,
          #fffb00,
          #48ff00,
          #00ffd5
        );
        background-clip: text;
-webkit-background-clip: text;
background-clip: padding-box;
        color: transparent;
      }
    `,
    neon: css`
      border: 2px solid #00ff00;
      background: rgba(0, 255, 0, 0.05);
      color: #00ff00;
      text-shadow: 0 0 5px rgba(0, 255, 0, 0.5);
      
      &:focus {
        box-shadow: 
          0 0 5px #00ff00,
          0 0 10px #00ff00,
          0 0 15px #00ff00;
        animation: ${borderGlow} 1.5s ease-in-out infinite;
      }

      &::placeholder {
        color: rgba(0, 255, 0, 0.5);
      }
    `,
    gradient: css`
      border: 2px solid transparent;
      background: linear-gradient(white, white) padding-box,
                linear-gradient(45deg, #FF0080, #7928CA, #FF0080) border-box;
      color: #333;
      
      &:focus {
        background: linear-gradient(rgba(255,255,255,0.95), rgba(255,255,255,0.95)) padding-box,
                    linear-gradient(45deg, #FF0080, #7928CA, #FF0080) border-box;
        box-shadow: 0 0 15px rgba(255, 0, 128, 0.3);
      }

      &::placeholder {
        color: #FF0080;
      }
    `
  };
  return variants[variant];
};

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Label = styled.label`
  position: absolute;
  left: 1rem;
  top: -0.5rem;
  background: ${({ variant }) => 
    variant === 'cyber' ? '#121212' : 
    variant === 'neon' ? '#000' : 'white'};
  padding: 0 0.5rem;
  font-size: 0.875rem;
  color: ${({ variant, theme }) => {
    switch(variant) {
      case 'cyber':
        return theme.colors.gradients.cyberpunk.from;
      case 'neon':
        return '#00ff00';
      case 'success':
        return '#16A34A';
      case 'error':
        return '#DC2626';
      default:
        return theme.colors.gray[600];
    }
  }};
  transition: all 0.2s ease;
  
  ${({ floating }) => floating && css`
    animation: ${float} 3s ease infinite;
  `}
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease-in-out;
  outline: none;

  ${({ variant, theme }) => getVariantStyles(variant, theme)}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background: ${({ theme }) => theme.colors.gray[100]};
  }
`;

export const TextArea = styled(StyledInput).attrs({ as: 'textarea' })`
  min-height: 100px;
  resize: vertical;
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.gray[400]};
  transition: color 0.2s ease;

  ${StyledInput}:focus + & {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;