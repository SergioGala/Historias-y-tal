// src/styles/themes/lightTheme.js
import tokens from './tokens';

const lightTheme = {
  name: 'light',
  colors: {
    primary: '#FF6B6B',     // Rojo coral
    secondary: '#4ECDC4',   // Turquesa
    accent: '#FFD166',      // Amarillo mostaza
    
    success: '#06D6A0',     // Verde menta
    warning: '#FFD166',     // Amarillo mostaza
    error: '#EF476F',       // Rosa frambuesa
    info: '#118AB2',        // Azul cerúleo
    
    text: '#2B2D42',        // Azul muy oscuro (casi negro)
    textLight: '#5D5D81',   // Lavanda grisáceo
    textMuted: '#8D99AE',   // Azul grisáceo
    
    background: '#FFF9F0',  // Blanco durazno (fondo principal)
    backgroundDark: '#F8E9DD', // Durazno claro
    backgroundLight: '#FFFBF5', // Blanco cálido
    card: '#FFFFFF',        // Blanco puro
    
    border: '#FFB8B8',      // Rosa claro
    borderLight: '#FFE0E0',  // Rosa muy claro
    
    // Colores específicos para elementos infantiles
    bubble: {
      pink: '#FF80AB',
      blue: '#82B1FF',
      green: '#B9F6CA',
      yellow: '#FFFF8D',
      purple: '#EA80FC',
      orange: '#FFAB40'
    },

    // Colores para elementos narrativos
    story: {
      hero: '#FF9E80',      // Héroe (naranja melocotón)
      villain: '#B388FF',   // Villano (púrpura)
      magic: '#80D8FF',     // Magia (azul claro)
      nature: '#CCFF90',    // Naturaleza (verde lima)
      mystery: '#84FFFF'    // Misterio (cian)
    },
    
    // Gradientes para botones y elementos decorativos
    gradients: {
      rainbow: {
        color1: '#FF9AA2', // Rosa claro
        color2: '#FFB7B2', // Melocotón
        color3: '#FFDAC1', // Durazno
        color4: '#E2F0CB', // Verde menta claro
        color5: '#B5EAD7', // Menta
        color6: '#C7CEEA', // Azul lavanda
        color7: '#E0BBE4'  // Lavanda claro
      },
      sunset: {
        from: '#FDCB6E',   // Amarillo dorado
        via: '#FF7675',    // Rosa coral
        to: '#FD79A8'      // Rosa
      },
      ocean: {
        from: '#6DECFF',   // Azul celeste
        via: '#55B3FF',    // Azul cielo
        to: '#9F7AEA'      // Lavanda
      },
      forest: {
        from: '#81ECEC',   // Azul turquesa
        via: '#55EFC4',    // Verde menta
        to: '#BADC58'      // Verde lima
      },
      candy: {
        from: '#FF9FF3',   // Rosa chicle
        via: '#FEC3A6',    // Melocotón
        to: '#FFCCCC'      // Rosa claro
      }
    }
  },
  shadows: tokens.shadows,
  fonts: tokens.fonts,
  fontSizes: tokens.fontSizes,
  fontWeights: tokens.fontWeights,
  lineHeights: tokens.lineHeights,
  space: tokens.space,
  sizes: tokens.sizes,
  radii: tokens.radii,
  borders: tokens.borders,
  zIndices: tokens.zIndices,
  breakpoints: tokens.breakpoints,
  animations: tokens.animations,
};

export default lightTheme;