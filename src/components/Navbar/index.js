// src/components/Navbar/index.js
import React, { useState, useEffect } from 'react';
import { 
  NavbarContainer,
  NavbarContent,
  Logo,
  LogoText,
  LogoImage,
  CloudBackground,
  NavLinks,
  NavLink,
  NavLinkText,
  NavLinkIcon,
  AuthButtons,
  MobileMenuButton,
  MobileMenu,
  ThemeToggleButton,
  Star,
  Cloud
} from './styles';
import Container from '../Layout/Container';
import Button from '../UI/Button';

// Iconos SVG sencillos para el tema infantil
const icons = {
  home: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  book: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  category: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  create: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  community: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  sun: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 1V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 21V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.22 4.22L5.64 5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.36 18.36L19.78 19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 12H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.22 19.78L5.64 18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  moon: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 12.79C20.8427 14.4922 20.2039 16.1144 19.1582 17.4668C18.1126 18.8192 16.7035 19.8458 15.0957 20.4265C13.4879 21.0073 11.748 21.1181 10.0794 20.7461C8.41074 20.3741 6.88033 19.5345 5.67423 18.3284C4.46812 17.1223 3.62856 15.5919 3.25654 13.9232C2.88453 12.2546 2.99531 10.5148 3.57605 8.90699C4.15679 7.29916 5.18335 5.89007 6.53577 4.84451C7.88819 3.79895 9.5104 3.15997 11.2126 3.00273C10.468 4.0375 10.0899 5.26058 10.1346 6.50686C10.1793 7.75315 10.6447 8.94506 11.4594 9.92812C12.2742 10.9112 13.3937 11.6284 14.6579 11.9692C15.9221 12.3099 17.2671 12.2564 18.4999 11.8151" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
};

// Componente de estrellas para decoración
const StarDecoration = () => {
  return (
    <>
      <Star $size={20} $top="10%" $left="5%" $delay="0s" />
      <Star $size={15} $top="15%" $left="15%" $delay="0.5s" />
      <Star $size={25} $top="8%" $left="25%" $delay="1s" />
      <Star $size={20} $top="20%" $left="35%" $delay="1.5s" />
      <Star $size={15} $top="12%" $left="45%" $delay="0.8s" />
      <Star $size={20} $top="18%" $left="65%" $delay="1.2s" />
      <Star $size={25} $top="10%" $left="75%" $delay="0.3s" />
      <Star $size={15} $top="15%" $left="85%" $delay="1.7s" />
      <Star $size={20} $top="5%" $left="92%" $delay="0.6s" />
    </>
  );
};

// Componente de nubes para decoración
const CloudDecoration = () => {
  return (
    <>
      <Cloud $size={100} $top="60%" $left="5%" $speed="30s" />
      <Cloud $size={80} $top="30%" $left="15%" $speed="35s" />
      <Cloud $size={120} $top="20%" $left="30%" $speed="40s" />
      <Cloud $size={90} $top="70%" $left="60%" $speed="38s" />
      <Cloud $size={110} $top="40%" $left="80%" $speed="45s" />
    </>
  );
};

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/historias'); // Estado para controlar el enlace activo
  const isDarkTheme = theme === 'dark';

  // Detectar scroll para cambiar estilos
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Actualizar el activeLink al cambiar de página
  useEffect(() => {
    // Obtener la URL actual
    const currentPath = window.location.pathname;
    // Verificar si la URL actual coincide con alguna de nuestras rutas
    if (currentPath === '/historias' || currentPath === '/categorias' || 
        currentPath === '/crear' || currentPath === '/comunidad') {
      setActiveLink(currentPath);
    }
  }, []);

  // Función para manejar clics en los enlaces
  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsMobileMenuOpen(false); // Cerrar menú móvil al hacer clic
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <NavbarContainer $isScrolled={isScrolled} $isDark={isDarkTheme}>
      {/* Decoraciones de fondo */}
      {!isDarkTheme && <CloudBackground />}
      {!isScrolled && (
        <>
          {isDarkTheme ? <StarDecoration /> : <CloudDecoration />}
        </>
      )}

      <Container>
        <NavbarContent>
          <Logo href="/">
            {/* Usamos la imagen proporcionada */}
            <LogoImage 
              src="https://i.pinimg.com/736x/2f/f2/db/2ff2db5fec296b2d2739edaa2bc816c1.jpg" 
              alt="Historias & Tal"
            />
            <LogoText $variant={isDarkTheme ? "night" : "day"}>Historias<span>&</span>Tal</LogoText>
          </Logo>

          {/* Desktop Navigation */}
          <NavLinks>
            <NavLink 
              href="/historias" 
              $active={activeLink === '/historias'}
              onClick={() => handleLinkClick('/historias')}
            >
              <NavLinkIcon>{icons.book}</NavLinkIcon>
              <NavLinkText>Historias</NavLinkText>
            </NavLink>
            <NavLink 
              href="/categorias" 
              $active={activeLink === '/categorias'}
              onClick={() => handleLinkClick('/categorias')}
            >
              <NavLinkIcon>{icons.category}</NavLinkIcon>
              <NavLinkText>Categorías</NavLinkText>
            </NavLink>
            <NavLink 
              href="/crear" 
              $active={activeLink === '/crear'}
              onClick={() => handleLinkClick('/crear')}
            >
              <NavLinkIcon>{icons.create}</NavLinkIcon>
              <NavLinkText>Crear</NavLinkText>
            </NavLink>
            <NavLink 
              href="/comunidad" 
              $active={activeLink === '/comunidad'}
              onClick={() => handleLinkClick('/comunidad')}
            >
              <NavLinkIcon>{icons.community}</NavLinkIcon>
              <NavLinkText>Comunidad</NavLinkText>
            </NavLink>
          </NavLinks>

          <AuthButtons>
            <ThemeToggleButton onClick={toggleTheme} $isDark={isDarkTheme}>
              {isDarkTheme ? icons.sun : icons.moon}
            </ThemeToggleButton>
            <Button size="md" $variant="ocean">Iniciar Sesión</Button>
            <Button size="md" $variant="rainbow">Registrarse</Button>
          </AuthButtons>

          {/* Mobile Menu Button */}
          <MobileMenuButton onClick={toggleMobileMenu} $isOpen={isMobileMenuOpen}>
            <span></span>
            <span></span>
            <span></span>
          </MobileMenuButton>
        </NavbarContent>
      </Container>

      {/* Mobile Navigation */}
      <MobileMenu $isOpen={isMobileMenuOpen} $isDark={isDarkTheme}>
        {isDarkTheme ? <StarDecoration /> : <CloudDecoration />}
        <NavLink 
          href="/historias" 
          $mobile 
          $active={activeLink === '/historias'}
          onClick={() => handleLinkClick('/historias')}
        >
          <NavLinkIcon>{icons.book}</NavLinkIcon>
          <NavLinkText>Historias</NavLinkText>
        </NavLink>
        <NavLink 
          href="/categorias" 
          $mobile 
          $active={activeLink === '/categorias'} 
          onClick={() => handleLinkClick('/categorias')}
        >
          <NavLinkIcon>{icons.category}</NavLinkIcon>
          <NavLinkText>Categorías</NavLinkText>
        </NavLink>
        <NavLink 
          href="/crear" 
          $mobile 
          $active={activeLink === '/crear'} 
          onClick={() => handleLinkClick('/crear')}
        >
          <NavLinkIcon>{icons.create}</NavLinkIcon>
          <NavLinkText>Crear</NavLinkText>
        </NavLink>
        <NavLink 
          href="/comunidad" 
          $mobile 
          $active={activeLink === '/comunidad'} 
          onClick={() => handleLinkClick('/comunidad')}
        >
          <NavLinkIcon>{icons.community}</NavLinkIcon>
          <NavLinkText>Comunidad</NavLinkText>
        </NavLink>
        <Button fullWidth={true} $variant="ocean" style={{ marginTop: '1rem' }}>Iniciar Sesión</Button>
        <Button fullWidth={true} $variant="rainbow" style={{ marginTop: '1rem' }}>Registrarse</Button>
      </MobileMenu>
    </NavbarContainer>
  );
};

export default Navbar;