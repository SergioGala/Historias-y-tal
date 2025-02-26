// src/components/Footer/index.js
import React from 'react';
import {
  StyledFooter,
  FooterContent,
  FooterSection,
  FooterDecoration,
  VisibleWaves,
  FloatingItem,
  Sparkle,
  EnhancedFooterLogo,
  EnhancedFooterLink,
  EnhancedSocialButton,
  EnhancedFooterBottom
} from './styles';
import Container from '../Layout/Container';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterDecoration />
      
      {/* Nuevo componente de olas con estructura interna */}
      <VisibleWaves />
      
      {/* Elementos flotantes decorativos */}
      <FloatingItem $size="60px" $top="15%" $left="10%" $duration="8s" $zIndex={2}>
        <span role="img" aria-label="cloud" style={{ fontSize: '60px' }}>☁️</span>
      </FloatingItem>
      
      <FloatingItem $size="40px" $top="30%" $left="80%" $duration="6s" $delay="1s" $zIndex={2}>
        <span role="img" aria-label="star" style={{ fontSize: '40px' }}>✨</span>
      </FloatingItem>
      
      {/* Estrellas brillantes (solo visibles en tema oscuro) */}
      <Sparkle $size="4px" $top="20%" $left="15%" $color="#FFD700" $opacity="0.7" $duration="4s" />
      <Sparkle $size="6px" $top="40%" $left="85%" $color="#FFFFFF" $opacity="0.9" $duration="3s" $delay="1s" />
      <Sparkle $size="5px" $top="70%" $left="60%" $color="#E0BBE4" $opacity="0.8" $duration="5s" $delay="0.5s" />
      <Sparkle $size="3px" $top="25%" $left="40%" $color="#FFFFFF" $opacity="0.7" $duration="3.5s" $delay="0.2s" />
      <Sparkle $size="4px" $top="55%" $left="70%" $color="#FFD700" $opacity="0.8" $duration="4.5s" $delay="1.5s" />
      <Sparkle $size="5px" $top="35%" $left="25%" $color="#FFFFFF" $opacity="0.9" $duration="3.8s" $delay="0.8s" />
      
      <Container>
        <FooterContent>
          <FooterSection>
            <EnhancedFooterLogo>Historias & Tal</EnhancedFooterLogo>
            <p>Un mundo mágico lleno de aventuras para los más pequeños. ¡Donde la imaginación cobra vida y las historias nunca terminan!</p>
            
            <div style={{ marginTop: '1.8rem' }}>
              <EnhancedSocialButton href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </EnhancedSocialButton>
              
              <EnhancedSocialButton href="#" aria-label="Twitter">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </EnhancedSocialButton>
              
              <EnhancedSocialButton href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.04 0 2.67.01 2.986.058 4.04.045.976.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.04.058 2.67 0 2.987-.01 4.04-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.04 0-2.67-.01-2.986-.058-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.054-.048-1.37-.058-4.04-.058zm0 3.063a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.468a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666zm6.538-8.469a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"/>
                </svg>
              </EnhancedSocialButton>
              
              <EnhancedSocialButton href="#" aria-label="YouTube">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </EnhancedSocialButton>
            </div>
          </FooterSection>
          
          <FooterSection>
            <h3>Explora</h3>
            <EnhancedFooterLink href="/historias">Historias</EnhancedFooterLink>
            <EnhancedFooterLink href="/categorias">Categorías</EnhancedFooterLink>
            <EnhancedFooterLink href="/populares">Más Populares</EnhancedFooterLink>
            <EnhancedFooterLink href="/recientes">Recién Añadidas</EnhancedFooterLink>
            <EnhancedFooterLink href="/crear">Crea tu Historia</EnhancedFooterLink>
          </FooterSection>
          
          <FooterSection>
            <h3>Padres y Educadores</h3>
            <EnhancedFooterLink href="/guia-padres">Guía para Padres</EnhancedFooterLink>
            <EnhancedFooterLink href="/beneficios">Beneficios de la Lectura</EnhancedFooterLink>
            <EnhancedFooterLink href="/educacion">Recursos Educativos</EnhancedFooterLink>
            <EnhancedFooterLink href="/seguridad">Seguridad Infantil</EnhancedFooterLink>
            <EnhancedFooterLink href="/actividades">Actividades Complementarias</EnhancedFooterLink>
          </FooterSection>
          
          <FooterSection>
            <h3>Sobre Nosotros</h3>
            <EnhancedFooterLink href="/quienes-somos">Quiénes Somos</EnhancedFooterLink>
            <EnhancedFooterLink href="/contacto">Contacto</EnhancedFooterLink>
            <EnhancedFooterLink href="/ayuda">Ayuda</EnhancedFooterLink>
            <EnhancedFooterLink href="/colaboraciones">Colaboraciones</EnhancedFooterLink>
            <EnhancedFooterLink href="/privacidad">Política de Privacidad</EnhancedFooterLink>
          </FooterSection>
        </FooterContent>
        
        <EnhancedFooterBottom>
          <p>© {new Date().getFullYear()} Historias & Tal. Todos los derechos reservados.</p>
          <p>Hecho con <span className="heart">❤️</span> para despertar la imaginación de los pequeños lectores.</p>
        </EnhancedFooterBottom>
      </Container>
    </StyledFooter>
  );
};

export default Footer;