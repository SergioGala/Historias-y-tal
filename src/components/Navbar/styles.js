// src/components/Navbar/styles.js
import styled, { css, keyframes } from 'styled-components';

// Animaciones
const twinkle = keyframes`
  0%, 100% { opacity: 0.2; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.1); }
`;

// Float se usa en Cloud component
const moveLeftToRight = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100vw); }
`;

const wiggle = keyframes`
  0%, 100% { transform: rotate(0); }
  25% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
`;

const linkHoverEffect = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Para efectos de escala en el logo
const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;


// Componente principal del Navbar
export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  z-index: 1000;
  transition: all 0.4s ease;
  overflow: hidden;
  
  ${({ $isScrolled, $isDark }) => $isScrolled ? css`
    background: ${$isDark ? 
      'linear-gradient(180deg, #1F2937 0%, #293241 100%)' : 
      'linear-gradient(180deg, #FFF9F0 0%, #FFE0E0 100%)'
    };
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    height: 70px;
  ` : css`
    background: ${$isDark ? 
      'linear-gradient(180deg, #1F2937 0%, rgba(41, 50, 65, 0.8) 100%)' : 
      'linear-gradient(180deg, #FFF9F0 0%, rgba(255, 249, 240, 0.8) 100%)'
    };
    backdrop-filter: blur(5px);
  `}
`;

export const CloudBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
  opacity: 0.7;
`;

export const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  position: relative;
  z-index: 2;
`;

export const Logo = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  z-index: 1001;
  margin-right: 90px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    
    img {
      animation: ${pulse} 1s ease infinite;
    }
    
    h1 {
      letter-spacing: 2px;
    }
  }
`;

export const LogoImage = styled.img`
  width: 80px;
  height: 40px;
  margin-right: 10px;
  animation: ${wiggle} 6s ease-in-out infinite;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 0 15px rgba(255, 107, 107, 0.5);
  transition: box-shadow 0.3s ease;
  
  &:hover {
    box-shadow: 0 0 20px ${({theme}) => theme.colors.primary}; 
  }
`;
export const LogoText = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: 1px;
  
  ${({ $variant, theme }) => $variant === 'day' ? css`
    font-family: ${theme.fonts.heading};
    color: ${theme.colors.primary};
    
    span {
      color: ${theme.colors.accent};
    }
  ` : css`
    font-family: ${theme.fonts.heading};
    color: ${theme.colors.primary};
    
    span {
      color: ${theme.colors.accent};
    }
  `}
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  position: relative;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: ${({ $mobile }) => $mobile ? 'column' : 'row'};
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  
  // Efecto de fondo con gradiente en hover
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primary}25,
      ${({ theme }) => theme.colors.secondary}25,
      ${({ theme }) => theme.colors.accent}25,
      ${({ theme }) => theme.colors.secondary}25,
      ${({ theme }) => theme.colors.primary}25
    );
    background-size: 200% 100%;
    border-radius: inherit;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  ${({ $mobile }) => $mobile && css`
    font-size: 1.5rem;
    padding: 1rem;
    margin-bottom: 0.5rem;
    text-align: center;
    width: 100%;
  `}
  
  &:hover {
    transform: translateY(-3px);
    color: ${({ theme }) => theme.colors.primary};
    
    &::before {
      opacity: 1;
      animation: ${linkHoverEffect} 3s infinite;
    }
  }
  
  ${({ $active, theme }) => $active && css`
    color: ${theme.colors.primary};
    font-weight: 700;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 10%;
      width: 80%;
      height: 3px;
      background: linear-gradient(90deg, 
        ${theme.colors.primary}, 
        ${theme.colors.secondary},
        ${theme.colors.accent},
        ${theme.colors.secondary},
        ${theme.colors.primary}
      );
      background-size: 200% 100%;
      border-radius: 3px;
      animation: ${linkHoverEffect} 3s infinite;
    }
    
    &:hover {
      transform: none;
    }
  `}
`;
export const NavLinkText = styled.span`
  margin-left: 8px;
`;

export const NavLinkIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
`;

export const AuthButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ThemeToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  transition: all 0.3s ease;
  color: ${({ $isDark, theme }) => $isDark ? theme.colors.accent : theme.colors.primary};
  background: ${({ $isDark, theme }) => $isDark ? 
    'rgba(255, 209, 102, 0.2)' : 
    'rgba(255, 107, 107, 0.1)'
  };
  
  &:hover {
    transform: rotate(15deg) scale(1.1);
    background: ${({ $isDark, theme }) => $isDark ? 
      'rgba(255, 209, 102, 0.3)' : 
      'rgba(255, 107, 107, 0.2)'
    };
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1001;
  padding: 0;
  
  span {
    width: 100%;
    height: 3px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.radii.full};
    transition: all 0.3s ease;
    
    ${({ $isOpen }) => $isOpen && css`
      &:first-child {
        transform: translateY(11px) rotate(45deg);
      }
      
      &:nth-child(2) {
        opacity: 0;
      }
      
      &:last-child {
        transform: translateY(-11px) rotate(-45deg);
      }
    `}
  }
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  transform: translateY(${({ $isOpen }) => $isOpen ? '0' : '-100%'});
  opacity: ${({ $isOpen }) => $isOpen ? '1' : '0'};
  transition: all 0.4s ease;
  z-index: 1000;
  background: ${({ $isDark }) => $isDark ? 
    'linear-gradient(180deg, #1F2937 0%, #3B4252 100%)' : 
    'linear-gradient(180deg, #FFF9F0 0%, #FFE0E0 100%)'
  };
  overflow: hidden;
`;

// Componentes decorativos
export const Star = styled.div`
  position: absolute;
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%23FFD166'%3E%3Cpath d='M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z'/%3E%3C/svg%3E");
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.8;
  z-index: 1;
  animation: ${twinkle} 2s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay};
`;

export const Cloud = styled.div`
  position: absolute;
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size * 0.6}px`};
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'%3E%3Cpath fill='white' d='M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4z'%3E%3C/path%3E%3C/svg%3E");
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.7;
  z-index: 1;
  filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.05));
  animation: ${moveLeftToRight} ${({ $speed }) => $speed} linear infinite;
`;