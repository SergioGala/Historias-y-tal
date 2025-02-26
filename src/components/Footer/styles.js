// src/components/Footer/styles.js
import styled, { css, keyframes } from 'styled-components';

// Animaciones para los efectos
const wave1 = keyframes`
  0% { transform: translate3d(-90px, 0, 0); }
  100% { transform: translate3d(85px, 0, 0); }
`;

const wave2 = keyframes`
  0% { transform: translate3d(-90px, 0, 0); }
  100% { transform: translate3d(85px, 0, 0); }
`;

const wave3 = keyframes`
  0% { transform: translate3d(-90px, 0, 0); }
  100% { transform: translate3d(85px, 0, 0); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
`;

const sparkle = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(0.8); }
`;

const twinkle = keyframes`
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
`;

// Componente original del Footer
export const StyledFooter = styled.footer`
  position: relative;
  padding: 6rem 0 2rem;
  margin-top: 2rem;
  overflow: hidden;
  
  // Fondo principal que se adapta al tema
  background: ${props => props.theme.name === 'light'
    ? 'linear-gradient(180deg, #A9DFED 0%, #87CEEB 100%)'  
    : 'linear-gradient(180deg, #1F2937 0%, #0F172A 100%)'};
  color: ${props => props.theme.colors.text};
`;

// Diseño decorativo con nubes o estrellas según el tema
export const FooterDecoration = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  
  // Decoración específica por tema
  ${props => props.theme.name === 'light' 
    ? css`
      &:before, &:after {
        content: '';
        position: absolute;
        border-radius: ${props.theme.radii.cloud};
        background: rgba(255, 255, 255, 0.7);
        animation: ${float} 5s ease-in-out infinite;
      }
      
      &:before {
        width: 120px;
        height: 60px;
        top: 15%;
        left: 10%;
        animation-delay: 0s;
      }
      
      &:after {
        width: 80px;
        height: 40px;
        top: 20%;
        right: 15%;
        animation-delay: 1.5s;
      }
    `
    : css`
      &:before, &:after {
        content: '';
        position: absolute;
        background: white;
        border-radius: 50%;
        animation: ${twinkle} 3s ease-in-out infinite;
      }
      
      &:before {
        width: 3px;
        height: 3px;
        top: 25%;
        left: 20%;
        animation-delay: 0.5s;
        box-shadow: 
          30px 10px 2px 1px rgba(255,255,255,0.6),
          80px 30px 2px 1px rgba(255,255,255,0.8),
          140px -10px 1px 1px rgba(255,255,255,0.7),
          200px 20px 2px 0px rgba(255,255,255,0.6),
          250px -25px 1px 0px rgba(255,255,255,0.7),
          300px 10px 2px 1px rgba(255,255,255,0.8);
      }
      
      &:after {
        width: 2px;
        height: 2px;
        top: 35%;
        right: 30%;
        animation-delay: 1.2s;
        box-shadow: 
          -30px -10px 2px 1px rgba(255,255,255,0.8),
          -80px 15px 1px 1px rgba(255,255,255,0.6),
          -140px -15px 2px 0px rgba(255,255,255,0.7),
          -190px 20px 1px 0px rgba(255,255,255,0.8),
          -240px -10px 2px 1px rgba(255,255,255,0.6);
      }
    `
  }
`;

// Contenedor del footer con diseño de grid responsive
export const FooterContent = styled.div`
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

// Sección del footer
export const FooterSection = styled.div`
  h3 {
    font-family: ${props => props.theme.fonts.heading};
    font-size: ${props => props.theme.fontSizes.xl};
    margin-bottom: 1.5rem;
    position: relative;
    display: inline-block;
    
    // Decoración de subrayado lúdico
    &:after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 4px;
      background: ${props => 
        props.theme.name === 'light' 
          ? 'linear-gradient(90deg, #FF9AA2, #FFB7B2, #FFDAC1, #E2F0CB, #B5EAD7)'
          : 'linear-gradient(90deg, #FF9AA2, #FFB7B2, #FFDAC1, #E2F0CB, #B5EAD7)'};
      border-radius: ${props => props.theme.radii.pill};
    }
  }
`;

// Componente de ola espectacular
export const SpectacularWave = styled.div`
  position: absolute;
  top: -100px;
  left: 0;
  width: 100%;
  height: 100px;
  z-index: 1;
  overflow: hidden;
  
  .waves {
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  
  .wave {
    position: absolute;
    left: -180px;
    bottom: 0;
    width: calc(100% + 360px);
    height: 100%;
    background-repeat: repeat-x;
    background-position: 0 bottom;
    transform-origin: center bottom;
  }
  
  .wave1 {
    background-size: 50% 100px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-31.8z' fill='${props => props.theme.name === 'light' ? 'rgba(169, 223, 237, 0.8)' : 'rgba(31, 41, 55, 0.8)'}'/%3E%3C/svg%3E");
    animation: ${wave1} 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
    z-index: 3;
    opacity: 1;
  }
  
  .wave2 {
    background-size: 50% 120px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-31.8z' fill='${props => props.theme.name === 'light' ? 'rgba(135, 206, 235, 0.6)' : 'rgba(15, 23, 42, 0.6)'}'/%3E%3C/svg%3E");
    animation: ${wave2} 20s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
    z-index: 2;
    opacity: 0.75;
  }
  
  .wave3 {
    background-size: 50% 140px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-31.8z' fill='${props => props.theme.name === 'light' ? 'rgba(173, 216, 230, 0.5)' : 'rgba(17, 24, 39, 0.5)'}'/%3E%3C/svg%3E");
    animation: ${wave3} 30s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
    z-index: 1;
    opacity: 0.5;
  }
`;

// Elemento decorativo flotante (se pueden colocar en el footer)
export const FloatingItem = styled.div`
  position: absolute;
  width: ${props => props.$size || '40px'};
  height: ${props => props.$size || '40px'};
  top: ${props => props.$top || '20%'};
  left: ${props => props.$left || '10%'};
  z-index: ${props => props.$zIndex || 1};
  animation: ${float} ${props => props.$duration || '6s'} ease-in-out infinite;
  animation-delay: ${props => props.$delay || '0s'};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

// Estrellas brillantes para el tema oscuro
export const Sparkle = styled.div`
  position: absolute;
  width: ${props => props.$size || '10px'};
  height: ${props => props.$size || '10px'};
  top: ${props => props.$top || '20%'};
  left: ${props => props.$left || '30%'};
  background-color: ${props => props.$color || '#fff'};
  border-radius: 50%;
  box-shadow: 0 0 ${props => props.$glow || '10px'} ${props => props.$color || '#fff'};
  opacity: ${props => props.$opacity || 0.8};
  z-index: 1;
  animation: ${sparkle} ${props => props.$duration || '3s'} ease-in-out infinite;
  animation-delay: ${props => props.$delay || '0s'};
  display: ${props => props.theme.name === 'light' ? 'none' : 'block'};
`;

// Mejora para el Logo
export const EnhancedFooterLogo = styled.div`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes['3xl']};
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-bottom: 1.2rem;
  background: linear-gradient(90deg, 
    ${props => props.theme.colors.gradients.rainbow.color1},
    ${props => props.theme.colors.gradients.rainbow.color2},
    ${props => props.theme.colors.gradients.rainbow.color3},
    ${props => props.theme.colors.gradients.rainbow.color4},
    ${props => props.theme.colors.gradients.rainbow.color5},
    ${props => props.theme.colors.gradients.rainbow.color6},
    ${props => props.theme.colors.gradients.rainbow.color7}
  );
  background-size: 300% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
  animation: rainbow 8s linear infinite;
  text-shadow: 0 5px 15px rgba(0,0,0,0.1);
  
  @keyframes rainbow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

// Footer Bottom mejorado con un borde ondulado
export const EnhancedFooterBottom = styled.div`
  margin-top: 3rem;
  text-align: center;
  padding-top: 2rem;
  position: relative;
  font-size: ${props => props.theme.fontSizes.sm};
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 15px;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='15' viewBox='0 0 100 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 15H100V12C100 12 93.75 0 87.5 0C81.25 0 81.25 9 75 9C68.75 9 68.75 3 62.5 3C56.25 3 56.25 12 50 12C43.75 12 43.75 6 37.5 6C31.25 6 31.25 12 25 12C18.75 12 18.75 9 12.5 9C6.25 9 6.25 0 0 0V15Z' fill='${props => props.theme.name === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)'}'/%3E%3C/svg%3E");
    background-repeat: repeat-x;
    background-size: 100px 15px;
  }
  
  p {
    margin: 0.7rem 0;
  }
  
  .heart {
    display: inline-block;
    color: ${props => props.theme.colors.error};
    animation: heartbeat 1.5s infinite;
    transform-origin: center;
    
    @keyframes heartbeat {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.3); }
    }
  }
`;

// Mejorar los enlaces con un estilo más lúdico y llamativo
export const EnhancedFooterLink = styled.a`
  display: block;
  margin: 0.9rem 0;
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  font-size: ${props => props.theme.fontSizes.md};
  transition: all 0.3s ease;
  position: relative;
  padding-left: 28px;
  cursor: pointer;
  font-weight: ${props => props.theme.fontWeights.medium};
  letter-spacing: 0.3px;
  
  // Icono decorativo animado antes del link
  &:before {
    content: '★';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    color: ${props => props.theme.colors.accent};
    transition: all 0.3s ease;
  }
  
  &:hover {
    transform: translateX(8px);
    color: ${props => props.theme.colors.primary};
    
    &:before {
      transform: translateY(-50%) rotate(360deg) scale(1.4);
      color: ${props => props.theme.colors.secondary};
    }
    
    // Efecto de subrayado colorido al hacer hover
    &:after {
      content: '';
      position: absolute;
      left: 28px;
      right: 10px;
      bottom: -3px;
      height: 3px;
      background: linear-gradient(90deg, 
        ${props => props.theme.colors.primary},
        ${props => props.theme.colors.secondary},
        ${props => props.theme.colors.accent}
      );
      border-radius: 2px;
      opacity: 0.8;
      animation: slide-in 0.3s ease forwards;
    }
    
    @keyframes slide-in {
      from { width: 0; opacity: 0; }
      to { width: calc(100% - 38px); opacity: 0.8; }
    }
  }
`;

// SocialButton mejorado con más animaciones e interactividad
export const EnhancedSocialButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.theme.colors.backgroundLight};
  margin-right: 15px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: ${props => props.theme.shadows.md};
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle, 
      ${props => `${props.theme.colors.primary}10`} 0%, 
      ${props => `${props.theme.colors.secondary}30`} 100%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 0;
  }
  
  svg {
    width: 28px;
    height: 28px;
    fill: ${props => props.theme.colors.primary};
    transition: all 0.4s ease;
    z-index: 1;
    position: relative;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.15);
    box-shadow: ${props => props.theme.shadows.magical};
    
    &:before {
      opacity: 1;
    }
    
    svg {
      fill: ${props => props.theme.colors.accent};
      transform: scale(1.2);
    }
  }
  
  &:active {
    transform: translateY(0) scale(0.95);
  }
`;