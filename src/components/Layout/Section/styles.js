// src/components/Layout/Section/styles.js
import styled, { css } from 'styled-components';

export const StyledSection = styled.section`
  padding: 4rem 0;
  position: relative;
  overflow: hidden;
  
  ${({ $variant, theme }) => {
    const variants = {
      default: css`
        background-color: ${theme.colors.background};
      `,
      dark: css`
        background-color: ${theme.colors.backgroundDark};
        color: ${theme.colors.textLight};
      `,
      light: css`
        background-color: ${theme.colors.backgroundLight};
      `,
      rainbow: css`
        background: linear-gradient(
          90deg,
          ${theme.colors.gradients.rainbow.color1},
          ${theme.colors.gradients.rainbow.color2},
          ${theme.colors.gradients.rainbow.color3},
          ${theme.colors.gradients.rainbow.color4},
          ${theme.colors.gradients.rainbow.color5},
          ${theme.colors.gradients.rainbow.color6},
          ${theme.colors.gradients.rainbow.color7}
        );
        color: white;
        text-shadow: 0 1px 2px rgba(0,0,0,0.2);
      `,
      clouds: css`
        background-color: ${theme.colors.background};
        position: relative;
        
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'%3E%3Cpath fill='white' opacity='0.2' d='M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4z'%3E%3C/path%3E%3C/svg%3E");
          background-size: 20%;
          background-repeat: repeat;
          opacity: 0.1;
          z-index: 0;
        }
        
        & > * {
          position: relative;
          z-index: 1;
        }
      `,
      candy: css`
        background: linear-gradient(
          135deg,
          ${theme.colors.gradients.candy.from} 0%,
          ${theme.colors.gradients.candy.via} 50%,
          ${theme.colors.gradients.candy.to} 100%
        );
        color: #2B2D42;
      `,
      ocean: css`
        background: linear-gradient(
          135deg,
          ${theme.colors.gradients.ocean.from} 0%,
          ${theme.colors.gradients.ocean.via} 50%,
          ${theme.colors.gradients.ocean.to} 100%
        );
        color: white;
        text-shadow: 0 1px 2px rgba(0,0,0,0.2);
      `,
      stars: css`
        background-color: ${theme.colors.backgroundDark};
        position: relative;
        color: ${theme.colors.textLight};
        
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%23FFD166' opacity='0.2'%3E%3Cpath d='M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z'/%3E%3C/svg%3E");
          background-size: 5%;
          background-repeat: repeat;
          opacity: 0.2;
          z-index: 0;
        }
        
        & > * {
          position: relative;
          z-index: 1;
        }
      `,
      sunset: css`
        background: linear-gradient(
          135deg,
          ${theme.colors.gradients.sunset.from} 0%,
          ${theme.colors.gradients.sunset.via} 50%,
          ${theme.colors.gradients.sunset.to} 100%
        );
        color: white;
        text-shadow: 0 1px 2px rgba(0,0,0,0.2);
      `,
      forest: css`
        background: linear-gradient(
          135deg,
          ${theme.colors.gradients.forest.from} 0%,
          ${theme.colors.gradients.forest.via} 50%,
          ${theme.colors.gradients.forest.to} 100%
        );
        color: #2B2D42;
      `,
      hero: css`
        min-height: 80vh;
        display: flex;
        align-items: center;
        background: ${theme.name === 'dark' 
          ? `linear-gradient(135deg, ${theme.colors.backgroundDark} 0%, ${theme.colors.background} 100%)`
          : `linear-gradient(135deg, ${theme.colors.background} 0%, ${theme.colors.backgroundLight} 100%)`
        };
        
        /* Añadir pequeñas decoraciones */
        &::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 50px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z' fill='%23${theme.name === 'dark' ? '1F2937' : 'FFE0E0'}'%3E%3C/path%3E%3C/svg%3E");
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          z-index: 1;
        }
      `
    };
    
    return variants[$variant] || variants.default;
  }}
`;

export default StyledSection;