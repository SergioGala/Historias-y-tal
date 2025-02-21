import { tokens } from './tokens';

export const darkTheme = {
  ...tokens,
  colors: {
    ...tokens.colors,
    background: {
      primary: tokens.colors.gray[900],
      secondary: tokens.colors.gray[800],
      tertiary: tokens.colors.gray[700],
    },
    text: {
      primary: tokens.colors.gray[50],
      secondary: tokens.colors.gray[300],
      tertiary: tokens.colors.gray[400],
    },
    border: tokens.colors.gray[700],
  },
};