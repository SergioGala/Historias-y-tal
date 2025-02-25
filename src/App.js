// src/App.js - Con personajes SVG animados mejorados
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import lightTheme from './styles/themes/lightTheme';
import darkTheme from './styles/themes/darkTheme';
import GlobalStyles from './styles/globals/GlobalStyles';
import Navbar from './components/Navbar';
import Container from './components/Layout/Container';
import Section from './components/Layout/Section';
import Button from './components/UI/Button';
import styled from 'styled-components';
import AnimatedSvgCharacter from './components/AnimatedSvgCharacter.js';

// Componente de fondo simple
const SimpleBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.$isDarkTheme 
    ? 'linear-gradient(to bottom, #1F2937 0%, #111827 100%)' 
    : 'linear-gradient(to bottom, #CAF1FF 0%, #E2F7FF 100%)'};
  z-index: 0;
  overflow: hidden;
`;

const Mountain = styled.div`
  position: absolute;
  bottom: 0;
  width: ${props => props.$width || '100%'};
  height: ${props => props.$height || '200px'};
  background: ${props => props.$color};
  clip-path: polygon(0% 100%, 50% 0%, 100% 100%);
  left: ${props => props.$left || '0'};
  z-index: 1;
`;

// Elementos decorativos
const DecorativeElement = styled.div`
  position: absolute;
  width: ${props => props.$size || '20px'};
  height: ${props => props.$size || '20px'};
  background: ${props => props.$color || 'white'};
  border-radius: ${props => props.$radius || '50%'};
  top: ${props => props.$top || '10%'};
  left: ${props => props.$left || '10%'};
  opacity: ${props => props.$opacity || 0.7};
  z-index: ${props => props.$zIndex || 2};
  box-shadow: ${props => props.$shadow || 'none'};
  animation: ${props => props.$animation || 'none'};
`;

// Categoría con efectos de hover
const CategoryCard = styled.div`
  background: ${props => props.theme.name === 'light' ? '#FFFFFF' : '#3D4663'};
  padding: 2rem;
  border-radius: 1.5rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transform: translateY(0);
  display: flex;
  flex-direction: column;
  align-items: center;
  
  &:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
    
    &::after {
      transform: scaleX(1);
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, 
      ${props => props.theme.colors.primary}, 
      ${props => props.theme.colors.secondary}
    );
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
    border-bottom-left-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
  }
  
  .icon {
    margin-bottom: 1rem;
    transition: all 0.4s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  &:hover .icon {
    transform: scale(1.15) rotate(5deg);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }
  
  h3 {
    font-size: 1.4rem;
    margin-bottom: 0.6rem;
    transition: color 0.3s ease;
    font-weight: 700;
  }
  
  p {
    font-size: 0.95rem;
    color: ${props => props.theme.name === 'light' ? '#666' : '#AAA'};
    transition: color 0.3s ease;
    margin-top: 0;
  }
  
  &:hover h3 {
    color: ${props => props.theme.colors.primary};
  }
  
  &:hover p {
    color: ${props => props.theme.name === 'light' ? '#444' : '#CCC'};
  }
`;

function App() {
  // Inicializar tema desde localStorage o usar el tema predeterminado
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';  // Por defecto tema claro para una página infantil
  });
  
  // Guardar tema en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  // Función para cambiar entre temas
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Seleccionar el tema basado en el estado
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;
  const isDarkTheme = theme === 'dark';

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        {/* Hero Section con fondo simple */}
        <Section 
          $variant="hero" 
          style={{ paddingTop: '100px', position: 'relative', overflow: 'hidden', minHeight: '80vh' }}
        >
          {/* Fondo simple */}
          <SimpleBackground $isDarkTheme={isDarkTheme}>
            <Mountain 
              $color={isDarkTheme ? "#0F172A" : "#A9DFED"} 
              $height="200px" 
            />
            <Mountain 
              $color={isDarkTheme ? "#1F2937" : "#87CEEB"} 
              $height="150px" 
              $width="80%"
              $left="10%"
            />
            
            {/* Elementos decorativos adicionales */}
            {isDarkTheme ? (
              // Estrellas para modo oscuro
              <>
                {Array.from({ length: 15 }).map((_, i) => (
                  <DecorativeElement 
                    key={i}
                    $size={`${Math.random() * 3 + 1}px`}
                    $top={`${Math.random() * 60}%`}
                    $left={`${Math.random() * 100}%`}
                    $opacity={Math.random() * 0.5 + 0.5}
                    $color="white"
                  />
                ))}
                <DecorativeElement 
                  $size="50px"
                  $color="rgba(255, 255, 255, 0.9)"
                  $top="15%"
                  $left="85%"
                  $shadow="0 0 20px rgba(255, 255, 255, 0.3)"
                />
              </>
            ) : (
              // Sol y nubes para modo claro
              <>
                <DecorativeElement 
                  $size="60px"
                  $color="#FFD700"
                  $top="15%"
                  $left="15%"
                  $shadow="0 0 30px rgba(255, 215, 0, 0.6)"
                />
              </>
            )}
          </SimpleBackground>
          
          <Container style={{ position: 'relative', zIndex: 5 }}>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              <h1 style={{ 
                fontSize: '3.5rem', 
                marginBottom: '1.5rem',
                textShadow: isDarkTheme ? '0 0 10px rgba(255,255,255,0.3)' : '0 0 10px rgba(0,0,0,0.1)'
              }}>
                Historias & Tal
              </h1>
              <p style={{ 
                fontSize: '1.5rem', 
                marginBottom: '2rem',
                maxWidth: '600px',
                textShadow: isDarkTheme ? '0 0 8px rgba(255,255,255,0.2)' : '0 0 8px rgba(0,0,0,0.05)'
              }}>
                Un mundo de aventuras y diversión para los más pequeños. ¡Descubre historias mágicas o crea las tuyas propias!
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Button variant="rainbow" size="lg">
                  ¡Comenzar Aventura!
                </Button>
                <Button variant={isDarkTheme ? "ocean" : "cloud"} size="lg">
                  Ver Historias
                </Button>
              </div>
            </div>
          </Container>
          
          {/* Personajes con animaciones avanzadas */}
          <AnimatedSvgCharacter 
            type="dragon"
            message="¡Hola! ¿Quieres leer una historia?"
            size="150px"
            top="70%"
            left="15%"
            animation="floating"
            duration="4s"
            primaryColor={currentTheme.colors.primary}
            secondaryColor={currentTheme.colors.secondary}
          />
          
          <AnimatedSvgCharacter 
            type="princess"
            message="¡Bienvenido a nuestra aventura!"
            size="130px"
            top="65%"
            left="80%"
            animation="bounce"
            duration="3s"
            primaryColor={currentTheme.colors.accent}
            secondaryColor={currentTheme.colors.primary}
          />
          
          <AnimatedSvgCharacter 
            type="fairy"
            message="¡Tengo historias mágicas!"
            size="100px"
            top="30%"
            left="70%"
            animation="wobble"
            duration="2.5s"
            primaryColor="#AED9E0"
            secondaryColor="#F8C8DC"
          />
        </Section>

        {/* Sección de categorías */}
        <Section 
          $variant="clouds" 
          style={{ position: 'relative', paddingTop: '6rem', paddingBottom: '8rem' }}
        >
          <Container>
            <h2 style={{ 
              textAlign: 'center', 
              marginBottom: '3rem',
              position: 'relative',
              display: 'inline-block',
              left: '50%',
              transform: 'translateX(-50%)'
            }}>
              Explora por Categorías
              <div style={{
                position: 'absolute',
                bottom: '-10px',
                left: '0',
                width: '100%',
                height: '3px',
                background: `linear-gradient(90deg, 
                  ${currentTheme.colors.primary}, 
                  ${currentTheme.colors.secondary}
                )`,
                borderRadius: '3px'
              }}></div>
            </h2>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: '2rem'
            }}>
              {[
                { 
                  name: 'Aventuras', 
                  description: 'Increíbles viajes llenos de desafíos',
                  color: '#FF6B6B' 
                }, 
                { 
                  name: 'Fantasía', 
                  description: 'Mundos mágicos de ensueño',
                  color: '#9D85B1' 
                }, 
                { 
                  name: 'Animales', 
                  description: 'Amigos del reino animal',
                  color: '#6BAE72' 
                }, 
                { 
                  name: 'Espacio', 
                  description: 'Viajes a las estrellas y planetas',
                  color: '#4E7AC7' 
                }, 
                { 
                  name: 'Piratas', 
                  description: 'Tesoros y aventuras marinas',
                  color: '#8B4513' 
                }, 
                { 
                  name: 'Princesas', 
                  description: 'Reinos encantados y magia',
                  color: '#FF69B4' 
                },
                { 
                  name: 'Dinosaurios', 
                  description: 'Criaturas prehistóricas fascinantes',
                  color: '#6EB257' 
                },
                { 
                  name: 'Misterios', 
                  description: 'Enigmas por resolver y secretos',
                  color: '#7851A9' 
                }
              ].map(category => (
                <CategoryCard key={category.name}>
                  <div className="icon" style={{ 
                    backgroundColor: `${category.color}20`, 
                    color: category.color,
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem auto',
                    fontSize: '1.8rem',
                    fontWeight: 'bold',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    {category.name === 'Aventuras' && (
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 6C3 4.34315 4.34315 3 6 3H8.17157C8.70201 3 9.21071 3.21071 9.58579 3.58579L11.4142 5.41421C11.7893 5.78929 12.298 6 12.8284 6H18C19.6569 6 21 7.34315 21 9V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6Z" stroke={category.color} strokeWidth="2" />
                        <path d="M9 14L11 12L13 14L15 12" stroke={category.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 12V18" stroke={category.color} strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    )}
                    {category.name === 'Fantasía' && (
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5 4C14.5 5.38071 13.3807 6.5 12 6.5C10.6193 6.5 9.5 5.38071 9.5 4C9.5 2.61929 10.6193 1.5 12 1.5C13.3807 1.5 14.5 2.61929 14.5 4Z" stroke={category.color} strokeWidth="2" />
                        <path d="M6 12L3 18H8.5L9.5 21H14.5L15.5 18H21L18 12M6 12L9.5 5M6 12H18M18 12L14.5 5M9.5 5L12 3L14.5 5" stroke={category.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                    {category.name === 'Animales' && (
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 11V9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9V11" stroke={category.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 11.5C4 10.1193 5.11929 9 6.5 9C7.88071 9 9 10.1193 9 11.5V14C9 17 7 19 7 19H5C5 19 3 17 3 14V11.5C3 10.1193 4.11929 9 5.5 9" stroke={category.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20 11.5C20 10.1193 18.8807 9 17.5 9C16.1193 9 15 10.1193 15 11.5V14C15 17 17 19 17 19H19C19 19 21 17 21 14V11.5C21 10.1193 19.8807 9 18.5 9" stroke={category.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 13V17" stroke={category.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 17L10 21" stroke={category.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 17L14 21" stroke={category.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                    {category.name === 'Espacio' && (
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="8" stroke={category.color} strokeWidth="2" />
                        <circle cx="12" cy="12" r="3" stroke={category.color} strokeWidth="2" />
                        <path d="M12 4V2" stroke={category.color} strokeWidth="2" strokeLinecap="round" />
                        <path d="M4 12H2" stroke={category.color} strokeWidth="2" strokeLinecap="round" />
                        <path d="M12 20V22" stroke={category.color} strokeWidth="2" strokeLinecap="round" />
                        <path d="M20 12H22" stroke={category.color} strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    )}
                    {category.name === 'Piratas' && (
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6H15C15 8.5 13.5 10 12 10C10.5 10 9 8.5 9 6Z" stroke={category.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 10V20" stroke={category.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 15L15 15" stroke={category.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5 4H19" stroke={category.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5 20C7 17 9 15 12 15C15 15 17 17 19 20" stroke={category.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                    {category.name === 'Princesas' && (
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 5L5 7L7 9L9 7L7 5Z" stroke={category.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 5L15 7L17 9L19 7L17 5Z" stroke={category.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 8L10 10L12 12L14 10L12 8Z" stroke={category.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7 5L12 8L17 5" stroke={category.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 12V20" stroke={category.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 20L15 17H9L12 20Z" stroke={category.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                    {category.name === 'Dinosaurios' && (
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 12C17 10.8954 16.1046 10 15 10C13.8954 10 13 10.8954 13 12C13 13.1046 13.8954 14 15 14V18C15 19.1046 14.1046 20 13 20H9" stroke={category.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10 10C10 8.89543 9.10457 8 8 8H6C4.89543 8 4 8.89543 4 10V14H10V10Z" stroke={category.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 14L2 17" stroke={category.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10 14L12 17" stroke={category.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13 4L17 8L20 5" stroke={category.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                    {category.name === 'Misterios' && (
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="9" stroke={category.color} strokeWidth="2" />
                        <path d="M12 16V15.5" stroke={category.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 13.5C12 11 15 11.5 15 9C15 7.5 13.5 6 12 6C10.5 6 9 7 9 9" stroke={category.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </CategoryCard>
              ))}
            </div>
          </Container>
          
          {/* Más personajes */}
          <AnimatedSvgCharacter 
            type="wizard"
            message="¡Descubre la magia!"
            size="140px"
            top="85%"
            left="10%"
            animation="heartbeat"
            duration="5s"
            primaryColor="#9D85B1"
            secondaryColor="#00B7FF"
          />
          
          <AnimatedSvgCharacter 
            type="knight"
            message="¡A la aventura!"
            size="130px"
            top="80%"
            left="85%"
            animation="floating"
            duration="4.5s"
            primaryColor="#A5A5A5"
            secondaryColor="#424242"
          />
          
          <AnimatedSvgCharacter 
            type="pirate"
            message="¡Tesoros de historias!"
            size="120px"
            top="20%"
            left="5%"
            animation="wobble"
            duration="3.5s"
            primaryColor="#8B4513"
            secondaryColor="#FFC300"
          />
        </Section>
      </main>
    </ThemeProvider>
  );
}

export default App;