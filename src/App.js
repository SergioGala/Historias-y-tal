// src/App.js - Con BooksGrid integrado
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
import BooksGrid from './components/InfiniteMenu/BooksGrid.js';
import aventurasImg from './assets/images/categories/Aventuras.jpg';
import fantasiaImg from './assets/images/categories/Fantasia.jpg';
import animalesImg from './assets/images/categories/Animales.jpg';
import espacioImg from './assets/images/categories/Espacio.jpg';
import piratasImg from './assets/images/categories/Piratas.jpg';
import princesasImg from './assets/images/categories/Princesas.jpg';
import dinosauriosImg from './assets/images/categories/Dinosaurios.jpg';
import misterioImg from './assets/images/categories/Misterio.jpg';

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

// Contenedor para la sección de libros
const BooksSection = styled.div`
  position: relative;
  width: 100%;
  padding: 20px 10px;
  margin: 0 auto;
  border-radius: 20px;
  background: ${props => props.theme.name === 'light' 
    ? 'rgba(255, 255, 255, 0.1)' 
    : 'rgba(0, 0, 0, 0.2)'};
  backdrop-filter: blur(5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  z-index: 5;
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

  // Datos para las categorías de libros
  const bookCategories = [
    { 
      title: 'Aventuras', 
      description: 'Increíbles viajes llenos de desafíos. Acompaña a valientes personajes mientras descubren mundos inexplorados y se enfrentan a peligros emocionantes.',
      image: aventurasImg,
      color: '#FF6B6B',
      link: '/category/aventuras'
    }, 
    { 
      title: 'Fantasía', 
      description: 'Mundos mágicos de ensueño donde todo es posible. Dragones, hadas, hechizos mágicos y criaturas míticas te esperan en estas historias llenas de imaginación.',
      image: fantasiaImg,
      color: '#9D85B1',
      link: '/category/fantasia'
    }, 
    { 
      title: 'Animales', 
      description: 'Amigos del reino animal con historias sorprendentes. Descubre la vida de mascotas valientes, animales salvajes y criaturas marinas en sus hábitats naturales.',
      image: animalesImg,
      color: '#6BAE72',
      link: '/category/animales'
    }, 
    { 
      title: 'Espacio', 
      description: 'Viajes a las estrellas y planetas en naves espaciales. Explora las maravillas del universo, conoce extraterrestres amigables y descubre los secretos de las galaxias.',
      image: espacioImg,
      color: '#4E7AC7',
      link: '/category/espacio'
    }, 
    { 
      title: 'Piratas', 
      description: 'Tesoros y aventuras marinas en los siete mares. Navega con valientes piratas, busca tesoros escondidos en islas misteriosas y descifra mapas antiguos con secretos.',
      image: piratasImg,
      color: '#8B4513',
      link: '/category/piratas'
    }, 
    { 
      title: 'Princesas', 
      description: 'Reinos encantados y magia en cada página. Acompaña a valientes princesas en sus aventuras, conoce sus amigos mágicos y descubre castillos encantados.',
      image: princesasImg,
      color: '#FF69B4',
      link: '/category/princesas'
    },
    { 
      title: 'Dinosaurios', 
      description: 'Criaturas prehistóricas fascinantes que dominaron la Tierra. Viaja al pasado y conoce a estos gigantes, desde veloces raptores hasta los imponentes tiranosaurios.',
      image: dinosauriosImg,
      color: '#6EB257',
      link: '/category/dinosaurios'
    },
    { 
      title: 'Misterios', 
      description: 'Enigmas por resolver y secretos ocultos en cada historia. Conviértete en detective, sigue las pistas y descubre la verdad detrás de intrigantes situaciones.',
      image: misterioImg,
      color: '#7851A9',
      link: '/category/misterios'
    }
  ];

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

        {/* Sección de categorías con la cuadrícula de libros */}
        <Section 
          $variant="clouds" 
          style={{ 
            position: 'relative', 
            paddingTop: '6rem', 
            paddingBottom: '8rem',
            overflow: 'hidden' 
          }}
        >
          <Container style={{ position: 'relative', zIndex: 5 }}>
            {/* Aquí integramos la cuadrícula de libros */}
            <BooksSection>
              <BooksGrid items={bookCategories} />
            </BooksSection>
          </Container>
          
          {/* Personajes alrededor de la sección de libros */}
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
            zIndex={10}
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
            zIndex={10}
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
            zIndex={10}
          />
        </Section>
      </main>
    </ThemeProvider>
  );
}

export default App;