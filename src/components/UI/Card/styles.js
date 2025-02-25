import styled, { css, keyframes } from 'styled-components';

const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(0.5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;


// Función para asegurar buen contraste del texto
const getTextColor = ($dark, baseColor) => {
  if ($dark) return '#ffffff';
  return baseColor || '#111827'; // Color oscuro por defecto para modo claro
};

const getVariantStyles = (variant = 'default', theme) => {
  const variants = {
    default: css`
      background: ${({ $dark }) => $dark ? '#1E1E1E' : 'white'};
      border: 1px solid ${({ $dark }) => $dark ? '#333' : theme.colors.gray[200]};
      color: ${({ $dark }) => getTextColor($dark)};
    `,
    danger: css`
      background: ${({ $dark }) => $dark ? '#2D1A1A' : '#FEF2F2'};
      border: 2px solid ${theme.colors.state.error};
      color: ${({ $dark }) => $dark ? '#FCA5A5' : '#991B1B'};
      
      &:hover {
        transform: translateY(-5px);
        box-shadow: 
          0 0 20px ${theme.colors.state.error}40,
          0 0 40px ${theme.colors.state.error}20;
      }
    `,
    success: css`
      background: ${({ $dark }) => $dark ? '#1A2D1A' : '#F0FDF4'};
      border: 2px solid ${theme.colors.state.success};
      color: ${({ $dark }) => $dark ? '#86EFAC' : '#166534'};
      
      &:hover {
        transform: translateY(-5px);
        box-shadow: 
          0 0 20px ${theme.colors.state.success}40,
          0 0 40px ${theme.colors.state.success}20;
      }
    `,
    cyber: css`
      background: ${({ $dark }) => $dark ? 'rgba(20, 20, 35, 0.95)' : 'rgba(255, 255, 255, 0.95)'};
      backdrop-filter: blur(10px);
      border: 2px solid transparent;
      color: ${({ $dark }) => $dark ? '#E2E8F0' : '#1E293B'};
      position: relative;

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
        animation: ${gradientMove} 3s linear infinite;
        background-size: 200% 200%;
      }

      &:hover {
        transform: translateY(-5px);
        box-shadow: 
          0 0 20px ${theme.colors.primary.main}40,
          0 0 40px ${theme.colors.primary.main}20;
      }
    `,
    alien: css`
      background: ${({ $dark }) => $dark ? '#0F2318' : '#ECFDF5'};
      border: 2px solid #059669;
      color: ${({ $dark }) => $dark ? '#6EE7B7' : '#065F46'};
      
      &:hover {
        transform: translateY(-5px) rotate(0.5deg);
        box-shadow: 
          0 0 20px #059669,
          0 0 40px rgba(5, 150, 105, 0.5);
        animation: ${float} 3s ease infinite;
      }
    `,
    rainbow: css`
      background: ${({ $dark }) => $dark ? '#1A1A1A' : 'white'};
      color: ${({ $dark }) => getTextColor($dark)};
      position: relative;
      
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

      &:hover {
        transform: translateY(-5px);
        box-shadow: 
          0 10px 20px rgba(0, 0, 0, 0.2),
          0 0 30px rgba(255, 255, 255, 0.2);
      }
    `,
    neon: css`
      background: ${({ $dark }) => $dark ? '#1A1A1A' : 'white'};
      color: ${({ $dark }) => $dark ? '#00ff00' : '#059669'};
      border: 2px solid #00ff00;
      box-shadow: 
        0 0 5px #00ff00,
        0 0 10px #00ff00;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 
          0 0 10px #00ffff,
          0 0 20px #00ffff,
          0 0 30px rgba(0, 255, 255, 0.5);
      }

      * {
        text-shadow: ${({ $dark }) => $dark ? '0 0 5px #00ff00' : 'none'};
      }
    `
  };
  return variants[variant];
};

export const StyledCard = styled.div`
  position: relative;
  padding: ${({ $padding }) => $padding || '1.5rem'};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: all 0.3s ease;
  ${({ variant, theme }) => getVariantStyles(variant, theme)}
`;