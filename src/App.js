// src/App.js
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import lightTheme from './styles/themes/lightTheme';
import darkTheme from './styles/themes/darkTheme';
import GlobalStyles from './styles/globals/GlobalStyles';
import Navbar from './components/Navbar';
import Container from './components/Layout/Container';
import Section from './components/Layout/Section';
import Button from './components/UI/Button';

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
        {/* Hero Section */}
        <Section $variant="hero" style={{ paddingTop: '100px' }}>
          <Container>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
                Historias & Tal
              </h1>
              <p style={{ 
                fontSize: '1.5rem', 
                marginBottom: '2rem',
                maxWidth: '600px'
              }}>
                Un mundo de aventuras y diversión para los más pequeños. ¡Descubre historias mágicas o crea las tuyas propias!
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Button variant="rainbow" size="lg">¡Comenzar Aventura!</Button>
                {/* Usamos ocean para tema oscuro en lugar de cloud */}
                <Button variant={isDarkTheme ? "ocean" : "cloud"} size="lg">Ver Historias</Button>
              </div>
            </div>
          </Container>
        </Section>

        {/* Sección de categorías */}
        <Section $variant="clouds">
          <Container>
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>
              Explora por Categorías
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: '2rem'
            }}>
              {['Aventuras', 'Fantasía', 'Animales', 'Espacio', 'Piratas', 'Princesas'].map(category => (
                <div key={category} style={{ 
                  background: theme === 'light' ? '#FFFFFF' : '#3D4663',
                  padding: '2rem',
                  borderRadius: '1.5rem',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer',
                }}>
                  <h3>{category}</h3>
                  <p>¡Descubre historias mágicas!</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      </main>
    </ThemeProvider>
  );
}

export default App;