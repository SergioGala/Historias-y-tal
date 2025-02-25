// src/styles/themes/darkTheme.js
import tokens from './tokens';

const darkTheme = {
  name: 'dark',
  colors: {
    primary: '#FF6B6B',     // Rojo coral (mantener el mismo que en el tema claro)
    secondary: '#4ECDC4',   // Turquesa (mantener el mismo que en el tema claro)
    accent: '#FFD166',      // Amarillo mostaza (mantener el mismo que en el tema claro)
    
    success: '#06D6A0',     // Verde menta
    warning: '#FFD166',     // Amarillo mostaza
    error: '#EF476F',       // Rosa frambuesa
    info: '#118AB2',        // Azul cerúleo
    
    text: '#F7F8FA',        // Blanco con tinte azul
    textLight: '#D3D7E8',   // Lavanda claro
    textMuted: '#9DA5B8',   // Azul grisáceo
    
    background: '#293241',  // Azul oscuro (fondo principal)
    backgroundDark: '#1F2937', // Azul más oscuro
    backgroundLight: '#3B4252', // Azul grisáceo
    card: '#3D4663',        // Azul grisáceo medio
    
    border: '#4E5A78',      // Azul grisáceo
    borderLight: '#5C6A8D',  // Azul grisáceo claro
    
    // Colores específicos para elementos infantiles (más brillantes en modo oscuro)
    bubble: {
      pink: '#FF80AB',
      blue: '#82B1FF',
      green: '#B9F6CA',
      yellow: '#FFFF8D',
      purple: '#EA80FC',
      orange: '#FFAB40'
    },

    // Colores para elementos narrativos (más brillantes en modo oscuro)
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
  shadows: {
    ...tokens.shadows,
    magical: '0 0 20px rgba(255, 223, 0, 0.8)',
    rainbow: '0 0 15px rgba(255, 0, 0, 0.4), 0 0 25px rgba(255, 165, 0, 0.4), 0 0 35px rgba(255, 255, 0, 0.4), 0 0 45px rgba(0, 128, 0, 0.4), 0 0 55px rgba(0, 0, 255, 0.4), 0 0 65px rgba(75, 0, 130, 0.4), 0 0 75px rgba(238, 130, 238, 0.4)',
  },
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

export default darkTheme;