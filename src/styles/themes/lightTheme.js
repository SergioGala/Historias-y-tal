// src/styles/themes/lightTheme.js
import { tokens } from './tokens';

const lightTheme = {
  ...tokens,  // Esto es importante para mantener todos los tokens base
  colors: {
    ...tokens.colors,  // Mantenemos los colores base
    background: {
      primary: tokens.colors.gray[50],
      secondary: tokens.colors.gray[100],
      tertiary: tokens.colors.gray[200],
    },
    text: {
      primary: tokens.colors.gray[900],
      secondary: tokens.colors.gray[700],
      tertiary: tokens.colors.gray[500],
    },
    border: tokens.colors.gray[200],
  },
};

// Para debug
console.log('Theme spacing:', lightTheme.spacing);

export default lightTheme;