// src/components/Footer/styles.js
import styled, { css, keyframes } from 'styled-components';

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

// Componente de olas simplificado pero mucho más visible
// Componente de olas mejorado con mayor contraste y tamaño
export const VisibleWaves = styled.div`
  position: absolute;
  top: -50px; // Más cerca del footer
  left: 0;
  width: 100%;
  height: 100px; // El doble de alto
  overflow: visible; // Permitir que se vea fuera del contenedor
  z-index: 10; // Asegurarse de que esté por encima de todo
  
  &::before, &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    background-color: transparent; // Fondo transparente
    background-size: 100% 100px;
    background-repeat: no-repeat;
    background-position: center;
    height: 150px; // Altura grande para asegurar visibilidad
  }
  
  // Primera ola - grande y clara en la parte superior
  &::before {
    top: -75px;
    height: 150px;
    background-image: ${props => props.theme.name === 'light' 
      ? 'linear-gradient(to top, #FF6B6B 0%, transparent 100%)' 
      : 'linear-gradient(to top, #FF6B6B 0%, transparent 100%)'};
    clip-path: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'%3E%3C/path%3E%3C/svg%3E");
    transform-origin: center bottom;
    animation: waveAnimate 10s ease-in-out infinite alternate;
    border-bottom: 5px solid #FF6B6B; // Borde para asegurar visibilidad
  }
  
  // Segunda ola - más abajo y con otro color
  &::after {
    top: -30px;
    height: 120px;
    background-image: ${props => props.theme.name === 'light' 
      ? 'linear-gradient(to top, #4ECDC4 0%, transparent 100%)' 
      : 'linear-gradient(to top, #4ECDC4 0%, transparent 100%)'};
    clip-path: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'%3E%3C/path%3E%3C/svg%3E");
    transform-origin: center bottom;
    animation: waveAnimate 8s ease-in-out infinite alternate-reverse;
    border-bottom: 5px solid #4ECDC4; // Borde para asegurar visibilidad
  }
  
  @keyframes waveAnimate {
    0% {
      transform: scale(1.05) translateX(-1%) translateY(2%);
    }
    100% {
      transform: scale(1.15) translateX(1%) translateY(-2%);
    }
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